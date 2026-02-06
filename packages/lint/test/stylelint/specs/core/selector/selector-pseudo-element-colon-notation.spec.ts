import core from '@/stylelint/core';
import selectorRules from '@/stylelint/core/selector';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-pseudo-element-colon-notation', () => {
  it('应该通过使用双冒号伪元素的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-pseudo-element-colon-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          'selector-pseudo-element-colon-notation':
            selectorRules['selector-pseudo-element-colon-notation'],
        },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-pseudo-element-colon-notation');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用单冒号伪元素的错误', async () => {
    const file = resolveFixture(
      'core',
      'selector',
      'selector-pseudo-element-colon-notation-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-pseudo-element-colon-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 7, 11]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('selector-pseudo-element-colon-notation');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/pseudo.*element|colon|notation/i);
    });
  });
});
