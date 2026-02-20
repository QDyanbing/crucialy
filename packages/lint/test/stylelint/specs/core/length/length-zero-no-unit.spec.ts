import core from '@/stylelint/core';
import lengthRules from '@/stylelint/core/length';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'length-zero-no-unit';

describe(ruleName, () => {
  it('应该通过零值没有单位的代码', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: lengthRules[ruleName] },
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

  it('应该报告零值有单位的错误', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5, 6]);
    expect(validateWarningMessages(ruleWarnings, ['zero', 'unit', 'length'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
