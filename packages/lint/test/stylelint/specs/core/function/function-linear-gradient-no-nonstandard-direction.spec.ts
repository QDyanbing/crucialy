import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-linear-gradient-no-nonstandard-direction', () => {
  it('应该通过使用标准方向语法的代码', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-linear-gradient-no-nonstandard-direction.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'function-linear-gradient-no-nonstandard-direction',
    );

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用非标准方向语法的错误', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-linear-gradient-no-nonstandard-direction-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'function-linear-gradient-no-nonstandard-direction',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('function-linear-gradient-no-nonstandard-direction');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/linear-gradient|direction|nonstandard/i);
    });
  });
});
