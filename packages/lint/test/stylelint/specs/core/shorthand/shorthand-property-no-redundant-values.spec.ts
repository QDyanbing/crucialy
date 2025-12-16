import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('shorthand-property-no-redundant-values', () => {
  it('应该通过简写属性不使用冗余值的代码', async () => {
    const file = resolveFixture('core', 'shorthand', 'shorthand-property-no-redundant-values.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'shorthand-property-no-redundant-values');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告简写属性使用冗余值的错误', async () => {
    const file = resolveFixture(
      'core',
      'shorthand',
      'shorthand-property-no-redundant-values-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('shorthand-property-no-redundant-values');
  });
});
