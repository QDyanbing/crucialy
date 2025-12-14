import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-vendor-prefix', () => {
  it('应该通过不使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-vendor-prefix');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('property-no-vendor-prefix');
  });
});
