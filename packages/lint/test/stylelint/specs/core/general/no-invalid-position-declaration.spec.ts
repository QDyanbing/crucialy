import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-invalid-position-declaration', () => {
  it('应该通过声明在有效位置的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-position-declaration.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-invalid-position-declaration');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告声明在无效位置的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-position-declaration-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-invalid-position-declaration');
  });
});
