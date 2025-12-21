import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-type', () => {
  it('应该通过类型选择器数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-type');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告类型选择器数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-type');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('selector-max-type');
  });
});
