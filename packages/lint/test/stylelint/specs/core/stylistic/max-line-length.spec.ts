import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/max-line-length', () => {
  it('应该通过行长度在限制内的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-line-length.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/max-line-length');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告行长度超过限制的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-line-length-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/max-line-length');
  });
});
