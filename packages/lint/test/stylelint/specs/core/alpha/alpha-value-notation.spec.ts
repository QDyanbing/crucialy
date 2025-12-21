import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('alpha-value-notation', () => {
  it('应该通过使用数字形式的 alpha 值', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'alpha-value-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用百分比形式的 alpha 值错误', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'alpha-value-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('alpha-value-notation');
  });
});
