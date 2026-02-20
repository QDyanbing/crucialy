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

const ruleName = 'at-rule-no-unknown';

describe(ruleName, () => {
  it('应该通过使用标准 @规则的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: { [ruleName]: atRuleRules[ruleName] } },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用未知 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([7, 11, 15]);
    expect(validateWarningMessages(ruleWarnings, ['unknown', 'at-rule'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
