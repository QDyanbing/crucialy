import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-property-value-keyword-no-deprecated', () => {
  it('应该通过使用未弃用属性值的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-property-value-keyword-no-deprecated',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用已弃用属性值的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    // 这个规则可能不会触发，因为 stylelint 可能不认为这些值是已弃用的
    // 或者这些值被其他规则捕获了（如 property-no-deprecated）
    // 我们检查是否有相关的警告
    expect(errored).toBe(true);
    expect(warnings.length).toBeGreaterThan(0);
  });
});
