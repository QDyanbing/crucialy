import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/function-max-empty-lines', () => {
  it('应该通过函数中没有空行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'function-max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/function-max-empty-lines');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告函数中有空行的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'function-max-empty-lines-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/function-max-empty-lines');
  });
});
