import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/function-comma-space-before', () => {
  it('应该通过函数逗号前没有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'function-comma-space-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/function-comma-space-before');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告函数逗号前有空格的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'function-comma-space-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/function-comma-space-before');
  });
});
