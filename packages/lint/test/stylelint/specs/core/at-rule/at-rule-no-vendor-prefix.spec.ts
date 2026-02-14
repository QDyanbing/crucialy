import core from '@/stylelint/core';
import atRuleRules from '@/stylelint/core/at-rule';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('at-rule-no-vendor-prefix', () => {
  it('应该通过 @规则没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'at-rule-no-vendor-prefix': atRuleRules['at-rule-no-vendor-prefix'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-no-vendor-prefix');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告 @规则使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-no-vendor-prefix');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([3, 12]);

    expect(validateWarningMessages(ruleWarnings, ['vendor', 'prefix'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('at-rule-no-vendor-prefix');
      expect(w.severity).toBe('error');
    });
  });
});
