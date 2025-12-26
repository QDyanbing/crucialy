import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('length-zero-no-unit', () => {
  it('应该通过零值没有单位的代码', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'length-zero-no-unit');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告零值有单位的错误', async () => {
    const file = resolveFixture('core', 'length', 'length-zero-no-unit-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'length-zero-no-unit');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('length-zero-no-unit');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/zero|unit|length/i);
    });
  });
});
