import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-hex-length', () => {
  it('应该通过 hex 颜色使用短格式的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-hex-length.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'color-hex-length');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 hex 颜色使用长格式的错误', async () => {
    const file = resolveFixture('core', 'color', 'color-hex-length-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('color-hex-length');
  });
});
