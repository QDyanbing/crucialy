import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-deprecated', () => {
  it('应该通过没有使用已弃用属性的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-deprecated.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-deprecated');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用已弃用属性的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-deprecated-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('property-no-deprecated');
  });
});
