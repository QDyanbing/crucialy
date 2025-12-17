import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/no-extra-semicolons', () => {
  it('应该通过没有多余分号的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-extra-semicolons.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/no-extra-semicolons');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告有多余分号的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-extra-semicolons-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/no-extra-semicolons');
  });
});
