import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('font-family-no-duplicate-names', () => {
  it('应该通过字体名称不重复的代码', async () => {
    const file = resolveFixture('core', 'font', 'font-family-no-duplicate-names.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'font-family-no-duplicate-names');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告字体名称重复的错误', async () => {
    const file = resolveFixture('core', 'font', 'font-family-no-duplicate-names-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'font-family-no-duplicate-names');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('font-family-no-duplicate-names');
  });
});
