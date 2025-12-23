import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('block-no-empty', () => {
  it('应该通过代码块不为空的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'block-no-empty');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告空代码块的错误', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'block-no-empty');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBe(2);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 6]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('block-no-empty');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/empty|block/i);
    });
  });
});
