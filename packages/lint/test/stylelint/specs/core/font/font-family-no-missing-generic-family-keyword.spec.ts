import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('font-family-no-missing-generic-family-keyword', () => {
  it('应该通过包含通用字体族关键字的代码', async () => {
    const file = resolveFixture(
      'core',
      'font',
      'font-family-no-missing-generic-family-keyword.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'font-family-no-missing-generic-family-keyword',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告缺少通用字体族关键字的错误', async () => {
    const file = resolveFixture(
      'core',
      'font',
      'font-family-no-missing-generic-family-keyword-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(
      w => w.rule === 'font-family-no-missing-generic-family-keyword',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('font-family-no-missing-generic-family-keyword');
  });
});
