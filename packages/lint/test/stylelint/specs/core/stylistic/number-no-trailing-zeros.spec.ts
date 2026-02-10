import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

describe('@stylistic/number-no-trailing-zeros', () => {
  it('应该通过数字没有尾随零的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-no-trailing-zeros.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['@stylistic/stylelint-plugin'],
        rules: {
          '@stylistic/number-no-trailing-zeros':
            stylisticRules['@stylistic/number-no-trailing-zeros'],
        },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/number-no-trailing-zeros');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告数字有尾随零的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-no-trailing-zeros-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/number-no-trailing-zeros');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5, 6]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/number-no-trailing-zeros');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/number|trailing|zero/i);
    });
  });
});
