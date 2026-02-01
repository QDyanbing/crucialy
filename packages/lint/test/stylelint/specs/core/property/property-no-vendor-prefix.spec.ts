import core from '@/stylelint/core';
import propertyRules from '@/stylelint/core/property';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-vendor-prefix', () => {
  it('应该通过属性没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: propertyRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-vendor-prefix');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告属性使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-vendor-prefix');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('property-no-vendor-prefix');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/vendor|prefix/i);
    });
  });
});
