import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-not-notation', () => {
  it('应该通过使用复杂形式 :not() 的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-not-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-not-notation');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用简单形式 :not() 的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-not-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-not-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('selector-not-notation');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/not|notation/i);
    });
  });
});
