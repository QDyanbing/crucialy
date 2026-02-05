import core from '@/stylelint/core';
import declarationRules from '@/stylelint/core/declaration';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-single-line-max-declarations', () => {
  it('应该通过单行声明块声明数量符合限制的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-single-line-max-declarations.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          'declaration-block-single-line-max-declarations':
            declarationRules['declaration-block-single-line-max-declarations'],
        },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-single-line-max-declarations',
    );

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告单行声明块声明数量超过限制的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-single-line-max-declarations-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-single-line-max-declarations',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([3]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('declaration-block-single-line-max-declarations');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/max.*declarations|single.*line/i);
    });
  });
});
