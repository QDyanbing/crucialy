import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('custom-property-no-missing-var-function', () => {
  it('应该通过使用 var() 包裹自定义属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-property-no-missing-var-function');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告直接使用自定义属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-property-no-missing-var-function');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('custom-property-no-missing-var-function');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/var|function/i);
    });
  });
});
