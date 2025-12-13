import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-empty-line-before', () => {
  it('应该通过声明前没有空行的代码', async () => {
    const file = resolveFixture('core', 'declaration', 'declaration-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'declaration-empty-line-before');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告声明前有空行的错误', async () => {
    const file = resolveFixture('core', 'declaration', 'declaration-empty-line-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('declaration-empty-line-before');
  });
});
