import selectorRules from '@/stylelint/core/selector';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-pseudo-class', () => {
  it('应该通过伪类数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-pseudo-class.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'selector-max-pseudo-class': selectorRules['selector-max-pseudo-class'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-pseudo-class');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告伪类数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-pseudo-class-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: selectorRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-pseudo-class');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 7]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('selector-max-pseudo-class');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/max|pseudo.*class/i);
    });
  });
});
