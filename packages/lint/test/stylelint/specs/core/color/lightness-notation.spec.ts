import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('lightness-notation', () => {
  it('应该通过使用百分比形式的亮度', async () => {
    const file = resolveFixture('core', 'color', 'lightness-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'lightness-notation');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用数字形式亮度的错误', async () => {
    const file = resolveFixture('core', 'color', 'lightness-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'lightness-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBe(3);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 8, 12]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('lightness-notation');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/lightness|notation/i);
    });
  });
});
