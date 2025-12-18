import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/declaration-colon-space-after', () => {
  it('应该通过冒号后有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'declaration-colon-space-after.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/declaration-colon-space-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告冒号后缺少空格的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'declaration-colon-space-after-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/declaration-colon-space-after');
  });
});
