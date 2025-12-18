import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/selector-list-comma-newline-after', () => {
  it('应该通过选择器列表逗号后有换行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-list-comma-newline-after.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/selector-list-comma-newline-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告选择器列表逗号后缺少换行的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'selector-list-comma-newline-after-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/selector-list-comma-newline-after');
  });
});
