import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-property-value-keyword-no-deprecated', () => {
  it('应该通过使用未弃用属性值的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-property-value-keyword-no-deprecated',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用已弃用属性值的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('declaration-property-value-keyword-no-deprecated');
  });
});
