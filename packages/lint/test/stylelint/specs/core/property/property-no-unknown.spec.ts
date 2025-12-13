import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-unknown', () => {
  it('应该通过使用已知属性的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-unknown');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未知属性的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
  });
});
