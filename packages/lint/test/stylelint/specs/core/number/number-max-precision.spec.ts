import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('number-max-precision', () => {
  it('应该通过数字小数位数在限制内的代码', async () => {
    const file = resolveFixture('core', 'number', 'number-max-precision.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'number-max-precision');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告数字小数位数超过限制的错误', async () => {
    const file = resolveFixture('core', 'number', 'number-max-precision-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('number-max-precision');
  });
});
