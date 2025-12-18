import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/block-opening-brace-newline-after', () => {
  it('应该通过多行块开括号后有换行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'block-opening-brace-newline-after.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/block-opening-brace-newline-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告多行块开括号后缺少换行的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'block-opening-brace-newline-after-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/block-opening-brace-newline-after');
  });
});
