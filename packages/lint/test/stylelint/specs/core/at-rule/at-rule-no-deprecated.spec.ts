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

describe('at-rule-no-deprecated', () => {
  it('应该通过没有使用已弃用 @规则的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-deprecated.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'at-rule-no-deprecated': atRuleRules['at-rule-no-deprecated'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-no-deprecated');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用已弃用 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-deprecated-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-no-deprecated');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([3]);

    expect(validateWarningMessages(ruleWarnings, ['deprecated'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('at-rule-no-deprecated');
      expect(w.severity).toBe('error');
    });
  });
});
