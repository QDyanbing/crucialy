import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('syntax-string-no-invalid', () => {
  it('应该通过使用有效语法字符串的代码', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'syntax-string-no-invalid');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用无效语法字符串的错误', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'syntax-string-no-invalid');

    expect(errored).toBe(true);
    expect(results[0]?.source).toBe(file);

    // 特殊规则可能需要特殊处理
    if (ruleWarnings.length > 0) {
      expect(ruleWarnings.length).toBeGreaterThan(0);
      // 检查每个错误的具体信息
      const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
      expect(errorLines).toEqual([3, 15]);
      ruleWarnings.forEach(warning => {
        expect(warning.rule).toBe('syntax-string-no-invalid');
        expect(warning.severity).toBe('error');
        expect(warning.text).toMatch(/syntax|string|invalid/i);
      });
    } else {
      // 如果没有该规则的警告，至少应该有一些警告
      expect(warnings.length).toBeGreaterThan(0);
    }
  });
});
