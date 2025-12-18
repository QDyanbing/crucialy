import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/no-empty-first-line', () => {
  it('应该通过首行不为空的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-empty-first-line.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/no-empty-first-line');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告首行为空的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-empty-first-line-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/no-empty-first-line');
  });
});
