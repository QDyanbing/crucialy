import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-unknown-custom-properties', () => {
  it('应该通过使用已定义自定义属性的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-properties.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-unknown-custom-properties');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用未定义自定义属性的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-properties-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-unknown-custom-properties');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('no-unknown-custom-properties');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/unknown|custom.*property/i);
    });
  });
});
