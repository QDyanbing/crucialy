import core from '@/stylelint/core';
import alphaRules from '@/stylelint/core/alpha';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'alpha-value-notation';

describe(ruleName, () => {
  it('应该通过使用数字形式的 alpha 值', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: alphaRules[ruleName] },
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

  it('应该报告使用百分比形式的 alpha 值错误', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([5, 9, 13, 17]);
    expect(validateWarningMessages(ruleWarnings, ['alpha', 'percentage', 'number'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
