import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/selector-pseudo-class-case', () => {
  it('应该通过伪类使用小写的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-pseudo-class-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/selector-pseudo-class-case');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告伪类使用大写的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-pseudo-class-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/selector-pseudo-class-case');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/selector-pseudo-class-case');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/selector|pseudo.*class|case/i);
    });
  });
});
