import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('font-family-name-quotes', () => {
  it('应该通过字体名称在必要时使用引号的代码', async () => {
    const file = resolveFixture('core', 'font', 'font-family-name-quotes.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'font-family-name-quotes');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告字体名称缺少引号的错误', async () => {
    const file = resolveFixture('core', 'font', 'font-family-name-quotes-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'font-family-name-quotes');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('font-family-name-quotes');
  });
});
