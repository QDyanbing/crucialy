import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('media-feature-range-notation', () => {
  it('应该通过使用 context 表示法的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-range-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-feature-range-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用非 context 表示法的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-range-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'media-feature-range-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('media-feature-range-notation');
  });
});
