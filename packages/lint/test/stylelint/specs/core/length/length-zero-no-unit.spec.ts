import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('length-zero-no-unit', () => {
  it('应该通过零值没有单位的代码', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'length-zero-no-unit');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告零值有单位的错误', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('length-zero-no-unit');
  });
});
