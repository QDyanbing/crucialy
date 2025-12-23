import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-descriptor-value-no-unknown', () => {
  it('应该通过使用有效 descriptor 值的 @规则代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-descriptor-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-descriptor-value-no-unknown');

    expect(errored).toBe(false);
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用无效 descriptor 值的 @规则错误', async () => {
    const file = resolveFixture(
      'core',
      'at-rule',
      'at-rule-descriptor-value-no-unknown-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-descriptor-value-no-unknown');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBe(2);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = ruleWarnings.map(w => w.line).sort((a, b) => a - b);
    expect(errorLines).toEqual([5, 11]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('at-rule-descriptor-value-no-unknown');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/descriptor|value|unknown/i);
    });
  });
});
