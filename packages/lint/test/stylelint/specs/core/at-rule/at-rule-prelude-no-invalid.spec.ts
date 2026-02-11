import core from '@/stylelint/core';
import atRuleRules from '@/stylelint/core/at-rule';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-prelude-no-invalid', () => {
  it('应该通过 @规则的 prelude 有效的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-prelude-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'at-rule-prelude-no-invalid': atRuleRules['at-rule-prelude-no-invalid'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-prelude-no-invalid');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 @规则的 prelude 无效的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-prelude-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-prelude-no-invalid');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([9]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('at-rule-prelude-no-invalid');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/prelude|invalid/i);
    });
  });
});
