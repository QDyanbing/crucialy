import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/function-parentheses-space-inside', () => {
  it('应该通过函数括号内没有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'function-parentheses-space-inside.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/function-parentheses-space-inside',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告函数括号内有空格的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'function-parentheses-space-inside-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/function-parentheses-space-inside');
  });
});
