import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('custom-property-no-missing-var-function', () => {
  it('应该通过使用 var() 包裹自定义属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-property-no-missing-var-function');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告直接使用自定义属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('custom-property-no-missing-var-function');
  });
});
