import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/value-list-comma-space-before', () => {
  it('应该通过值列表逗号前没有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-comma-space-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/value-list-comma-space-before',
    );

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告值列表逗号前有空格的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-comma-space-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/value-list-comma-space-before',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/value-list-comma-space-before');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/value|comma|space/i);
    });
  });
});
