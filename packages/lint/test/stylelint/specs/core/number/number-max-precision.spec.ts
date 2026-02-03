import numberRules from '@/stylelint/core/number';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('number-max-precision', () => {
  it('应该通过数字小数位数在限制内的代码', async () => {
    const file = resolveFixture('core', 'number', 'number-max-precision.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'number-max-precision': numberRules['number-max-precision'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'number-max-precision');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告数字小数位数超过限制的错误', async () => {
    const file = resolveFixture('core', 'number', 'number-max-precision-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: numberRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'number-max-precision');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5, 6]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('number-max-precision');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/precision|number/i);
    });
  });
});
