import core from '@/stylelint/core';
import unitRules from '@/stylelint/core/unit';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('unit-no-unknown', () => {
  it('应该通过没有使用未知单位的代码', async () => {
    const file = resolveFixture('core', 'unit', 'unit-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'unit-no-unknown': unitRules['unit-no-unknown'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'unit-no-unknown');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用未知单位的错误', async () => {
    const file = resolveFixture('core', 'unit', 'unit-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'unit-no-unknown');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5]);
    expect(validateWarningMessages(ruleWarnings, ['unit', 'unknown'])).toBe(true);
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('unit-no-unknown');
      expect(warning.severity).toBe('error');
    });
  });
});
