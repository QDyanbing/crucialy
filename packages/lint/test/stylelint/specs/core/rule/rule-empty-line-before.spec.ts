import core from '@/stylelint/core';
import ruleRules from '@/stylelint/core/rule';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('rule-empty-line-before', () => {
  it('应该通过多行规则前有空行的代码', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: { 'rule-empty-line-before': ruleRules['rule-empty-line-before'] } },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'rule-empty-line-before');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告多行规则前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'rule-empty-line-before');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([6, 10]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('rule-empty-line-before');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/empty.*line|rule/i);
    });
  });
});
