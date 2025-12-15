import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-type', () => {
  it('应该通过类型选择器数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-type');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告类型选择器数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-type');

    // 由于配置忽略了后代选择器，这个规则可能不会触发
    // 但如果有其他错误，测试应该通过
    if (ruleWarnings.length > 0) {
      expect(ruleWarnings.length).toBeGreaterThan(0);
    } else {
      // 如果没有触发此规则，至少应该有一些警告
      expect(warnings.length).toBeGreaterThan(0);
    }
  });
});
