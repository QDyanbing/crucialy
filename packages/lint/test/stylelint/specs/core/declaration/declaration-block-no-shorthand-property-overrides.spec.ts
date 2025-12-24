import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-no-shorthand-property-overrides', () => {
  it('应该通过简写属性没有覆盖 longhand 的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-shorthand-property-overrides.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-no-shorthand-property-overrides',
    );

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告简写属性覆盖 longhand 的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-shorthand-property-overrides-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-no-shorthand-property-overrides',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('declaration-block-no-shorthand-property-overrides');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/shorthand|override/i);
    });
  });
});
