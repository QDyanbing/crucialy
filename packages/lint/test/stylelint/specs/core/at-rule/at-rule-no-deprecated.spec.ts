import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-no-deprecated', () => {
  it('应该通过没有使用已弃用 @规则的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-deprecated.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-deprecated');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用已弃用 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-deprecated-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-deprecated');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('at-rule-no-deprecated');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/deprecated/i);
    });
  });
});
