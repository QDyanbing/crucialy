import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-property-value-no-unknown', () => {
  it('应该通过使用已知属性值的代码', async () => {
    const file = resolveFixture('core', 'declaration', 'declaration-property-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'declaration-property-value-no-unknown');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未知属性值的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-no-unknown-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'declaration-property-value-no-unknown');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('declaration-property-value-no-unknown');
  });
});
