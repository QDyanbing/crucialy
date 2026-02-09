import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

describe('@stylistic/max-empty-lines', () => {
  it('应该通过连续空行在限制内的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['@stylistic/stylelint-plugin'],
        rules: { '@stylistic/max-empty-lines': stylisticRules['@stylistic/max-empty-lines'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/max-empty-lines');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告连续空行超过限制的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'max-empty-lines-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/max-empty-lines');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([7]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/max-empty-lines');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/max|empty.*line/i);
    });
  });
});
