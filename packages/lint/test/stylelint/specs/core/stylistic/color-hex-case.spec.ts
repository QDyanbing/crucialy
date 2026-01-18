import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/color-hex-case', () => {
  it('应该通过 hex 颜色使用小写的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'color-hex-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/color-hex-case');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 hex 颜色使用大写的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'color-hex-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/color-hex-case');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/color-hex-case');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/color|hex|case/i);
    });
  });
});
