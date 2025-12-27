import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('property-no-vendor-prefix', () => {
  it('应该通过属性没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'property-no-vendor-prefix');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
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
    expect(ruleWarnings.length).toBe(2);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的详细信息
    expect(ruleWarnings[0]?.line).toBe(4);
    expect(ruleWarnings[0]?.column).toBe(3);
    expect(ruleWarnings[0]?.text).toMatch(/vendor|prefix/i);

    expect(ruleWarnings[1]?.line).toBe(5);
    expect(ruleWarnings[1]?.column).toBe(3);
    expect(ruleWarnings[1]?.text).toMatch(/vendor|prefix/i);

    // 检查所有错误的通用信息
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('property-no-vendor-prefix');
      expect(warning.severity).toBe('error');
    });
  });
});
