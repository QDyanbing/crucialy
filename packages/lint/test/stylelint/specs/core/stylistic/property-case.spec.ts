import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/property-case', () => {
  it('应该通过属性名使用小写的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'property-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/property-case');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告属性名使用大写的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'property-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/property-case');
  });
});
