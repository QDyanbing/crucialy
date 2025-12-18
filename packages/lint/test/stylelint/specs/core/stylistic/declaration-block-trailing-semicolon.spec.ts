import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/declaration-block-trailing-semicolon', () => {
  it('应该通过声明块末尾有分号的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'declaration-block-trailing-semicolon.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/declaration-block-trailing-semicolon',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告声明块末尾缺少分号的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'declaration-block-trailing-semicolon-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/declaration-block-trailing-semicolon');
  });
});
