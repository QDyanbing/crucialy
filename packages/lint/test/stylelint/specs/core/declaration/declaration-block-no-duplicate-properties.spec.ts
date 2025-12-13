import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-no-duplicate-properties', () => {
  it('应该通过没有重复属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-duplicate-properties.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    // 过滤掉 custom-property-pattern 的警告（配置问题）
    const filteredWarnings = warnings.filter(w => w.rule !== 'custom-property-pattern');

    expect(filteredWarnings.length).toBe(0);
  });

  it('应该报告重复属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-no-duplicate-properties-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('declaration-block-no-duplicate-properties');
  });
});
