import core from '@/stylelint/core';
import shorthandRules from '@/stylelint/core/shorthand';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'shorthand-property-no-redundant-values';

describe(ruleName, () => {
  it('应该通过简写属性不使用冗余值的代码', async () => {
    const file = resolveFixture('core', 'shorthand', 'shorthand-property-no-redundant-values.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          [ruleName]: shorthandRules[ruleName],
        },
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

  it('应该报告简写属性使用冗余值的错误', async () => {
    const file = resolveFixture(
      'core',
      'shorthand',
      'shorthand-property-no-redundant-values-invalid.css',
    );

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
    expect(validateWarningMessages(ruleWarnings, ['shorthand', 'redundant'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
