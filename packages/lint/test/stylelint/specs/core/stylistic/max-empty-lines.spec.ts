import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/max-empty-lines', () => {
  it('应该通过连续空行在限制内的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/max-empty-lines');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告连续空行超过限制的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-empty-lines-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/max-empty-lines');
  });
});
