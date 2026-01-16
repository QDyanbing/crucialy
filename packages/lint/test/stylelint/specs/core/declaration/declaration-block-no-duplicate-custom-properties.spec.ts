import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-no-duplicate-custom-properties', () => {
  it('应该通过没有重复自定义属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-duplicate-custom-properties.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-no-duplicate-custom-properties',
    );

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告重复自定义属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-duplicate-custom-properties-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-no-duplicate-custom-properties',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([6]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('declaration-block-no-duplicate-custom-properties');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/duplicate|custom.*property/i);
    });
  });
});
