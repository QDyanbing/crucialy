import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('time-min-milliseconds', () => {
  it('应该通过时间值大于等于最小值的代码', async () => {
    const file = resolveFixture('core', 'time', 'time-min-milliseconds.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'time-min-milliseconds');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告时间值小于最小值的错误', async () => {
    const file = resolveFixture('core', 'time', 'time-min-milliseconds-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('time-min-milliseconds');
  });
});
