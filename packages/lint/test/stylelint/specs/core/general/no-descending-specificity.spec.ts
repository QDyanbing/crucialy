import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-descending-specificity', () => {
  it('应该通过特异性不降低的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-descending-specificity.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-descending-specificity');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告特异性降低的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-descending-specificity-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-descending-specificity');
  });
});
