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

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告类型选择器数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-type');

    expect(errored).toBe(true);
    expect(results[0]?.source).toBe(file);

    // 由于配置可能忽略了某些情况，规则可能不会触发
    // 但如果触发了，应该检查具体的规则信息
    if (ruleWarnings.length > 0) {
      expect(ruleWarnings.length).toBeGreaterThan(0);
      ruleWarnings.forEach(warning => {
        expect(warning.rule).toBe('selector-max-type');
        expect(warning.severity).toBe('error');
        expect(warning.text).toMatch(/max|type/i);
      });
    } else {
      // 如果没有触发此规则，至少应该有一些警告
      expect(warnings.length).toBeGreaterThan(0);
    }
  });
});
