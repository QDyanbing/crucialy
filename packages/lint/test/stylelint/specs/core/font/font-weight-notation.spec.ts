import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('font-weight-notation', () => {
  it('应该通过使用数字形式 font-weight 的代码', async () => {
    const file = resolveFixture('core', 'font', 'font-weight-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'font-weight-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用命名形式 font-weight 的错误', async () => {
    const file = resolveFixture('core', 'font', 'font-weight-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'font-weight-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('font-weight-notation');
  });
});
