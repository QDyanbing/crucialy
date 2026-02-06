import core from '@/stylelint/core';
import blockRules from '@/stylelint/core/block';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('block-no-redundant-nested-style-rules', () => {
  it('应该通过没有冗余嵌套的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-redundant-nested-style-rules.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          'block-no-redundant-nested-style-rules':
            blockRules['block-no-redundant-nested-style-rules'],
        },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'block-no-redundant-nested-style-rules');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告冗余嵌套的错误', async () => {
    const file = resolveFixture(
      'core',
      'block',
      'block-no-redundant-nested-style-rules-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'block-no-redundant-nested-style-rules');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 10]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('block-no-redundant-nested-style-rules');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/redundant|nested/i);
    });
  });
});
