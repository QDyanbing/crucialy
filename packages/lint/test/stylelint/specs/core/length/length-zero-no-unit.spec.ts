import lengthRules from '@/stylelint/core/length';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('length-zero-no-unit', () => {
  it('应该通过零值没有单位的代码', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'length-zero-no-unit': lengthRules['length-zero-no-unit'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'length-zero-no-unit');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告零值有单位的错误', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: lengthRules },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'length-zero-no-unit');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5, 6]);
    expect(validateWarningMessages(ruleWarnings, ['zero', 'unit', 'length'])).toBe(true);
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('length-zero-no-unit');
      expect(warning.severity).toBe('error');
    });
  });
});
