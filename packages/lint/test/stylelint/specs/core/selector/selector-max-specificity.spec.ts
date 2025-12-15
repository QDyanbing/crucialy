import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-specificity', () => {
  it('应该通过特异性在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-specificity.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-specificity');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告特异性超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-specificity-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-max-specificity');
  });
});
