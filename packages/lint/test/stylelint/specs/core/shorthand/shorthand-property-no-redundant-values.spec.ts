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

describe('shorthand-property-no-redundant-values', () => {
  it('应该通过简写属性不使用冗余值的代码', async () => {
    const file = resolveFixture('core', 'shorthand', 'shorthand-property-no-redundant-values.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          'shorthand-property-no-redundant-values':
            shorthandRules['shorthand-property-no-redundant-values'],
        },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'shorthand-property-no-redundant-values');

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
    const ruleWarnings = getRuleWarnings(result, 'shorthand-property-no-redundant-values');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([4, 5, 6]);

    expect(validateWarningMessages(ruleWarnings, ['shorthand', 'redundant'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('shorthand-property-no-redundant-values');
      expect(w.severity).toBe('error');
    });
  });
});
