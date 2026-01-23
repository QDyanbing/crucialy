import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('keyframe-block-no-duplicate-selectors', () => {
  it('应该通过没有重复选择器的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-block-no-duplicate-selectors.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-block-no-duplicate-selectors');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告重复选择器的错误', async () => {
    const file = resolveFixture(
      'core',
      'keyframe',
      'keyframe-block-no-duplicate-selectors-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-block-no-duplicate-selectors');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([12, 30]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('keyframe-block-no-duplicate-selectors');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/duplicate|selector|keyframe/i);
    });
  });
});
