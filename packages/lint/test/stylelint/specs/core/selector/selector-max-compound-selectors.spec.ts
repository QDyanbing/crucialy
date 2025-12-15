import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-compound-selectors', () => {
  it('应该通过复合选择器数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-compound-selectors.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-compound-selectors');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告复合选择器数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-compound-selectors-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-max-compound-selectors');
  });
});
