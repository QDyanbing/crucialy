import timeRules from '@/stylelint/core/time';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('time-min-milliseconds', () => {
  it('应该通过时间值大于等于最小值的代码', async () => {
    const file = resolveFixture('core', 'time', 'time-min-milliseconds.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'time-min-milliseconds': timeRules['time-min-milliseconds'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'time-min-milliseconds');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告时间值小于最小值的错误', async () => {
    const file = resolveFixture('core', 'time', 'time-min-milliseconds-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: timeRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'time-min-milliseconds');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([4, 5, 6]);

    expect(validateWarningMessages(ruleWarnings, ['time', 'millisecond'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('time-min-milliseconds');
      expect(w.severity).toBe('error');
    });
  });
});
