import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/declaration-block-semicolon-newline-after', () => {
  it('应该通过多行声明块分号后有换行的代码', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'declaration-block-semicolon-newline-after.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/declaration-block-semicolon-newline-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告多行声明块分号后缺少换行的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'declaration-block-semicolon-newline-after-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/declaration-block-semicolon-newline-after');
  });
});
