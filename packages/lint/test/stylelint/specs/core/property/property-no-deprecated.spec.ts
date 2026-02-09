import core from '@/stylelint/core';
import propertyRules from '@/stylelint/core/property';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-deprecated', () => {
  it('应该通过没有使用已弃用属性的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-deprecated.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'property-no-deprecated': propertyRules['property-no-deprecated'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-deprecated');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用已弃用属性的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-deprecated-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-deprecated');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([5]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('property-no-deprecated');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/deprecated|property/i);
    });
  });
});
