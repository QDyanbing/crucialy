import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

describe('@stylistic/no-extra-semicolons', () => {
  it('应该通过没有多余分号的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-extra-semicolons.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/no-extra-semicolons');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告有多余分号的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-extra-semicolons-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/no-extra-semicolons');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5, 9]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/no-extra-semicolons');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/extra|semicolon/i);
    });
  });
});
