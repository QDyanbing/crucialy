import core from '@/stylelint/core';
import generalRules from '@/stylelint/core/general';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'no-descending-specificity';

describe(ruleName, () => {
  it('应该通过特异性不降低的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-descending-specificity.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: generalRules[ruleName] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告特异性降低的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-descending-specificity-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([7]);
    expect(validateWarningMessages(ruleWarnings, ['descending', 'specificity'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
