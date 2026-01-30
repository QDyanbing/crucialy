import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('named-grid-areas-no-invalid', () => {
  it('应该通过使用有效命名网格区域的代码', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'named-grid-areas-no-invalid');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用无效命名网格区域的错误', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'named-grid-areas-no-invalid');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([6]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('named-grid-areas-no-invalid');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/grid.*area|invalid/i);
    });
  });
});
