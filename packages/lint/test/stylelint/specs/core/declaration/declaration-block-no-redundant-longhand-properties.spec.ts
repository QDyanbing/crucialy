import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-no-redundant-longhand-properties', () => {
  it('应该通过使用简写属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-redundant-longhand-properties.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-no-redundant-longhand-properties',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用冗余 longhand 属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-redundant-longhand-properties-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('declaration-block-no-redundant-longhand-properties');
  });
});
