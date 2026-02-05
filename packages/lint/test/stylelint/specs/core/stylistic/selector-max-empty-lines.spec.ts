import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

describe('@stylistic/selector-max-empty-lines', () => {
  it('应该通过选择器中没有空行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/selector-max-empty-lines');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告选择器中有空行的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-max-empty-lines-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/selector-max-empty-lines');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 9]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/selector-max-empty-lines');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/selector|empty.*line/i);
    });
  });
});
