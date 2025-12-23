import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-no-vendor-prefix', () => {
  it('应该通过 @规则没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-vendor-prefix');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 @规则使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-vendor-prefix');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBe(2);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 12]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('at-rule-no-vendor-prefix');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/vendor|prefix/i);
    });
  });
});
