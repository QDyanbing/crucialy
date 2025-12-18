import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/selector-combinator-space-after', () => {
  it('应该通过选择器组合器后有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-combinator-space-after.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/selector-combinator-space-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告选择器组合器后缺少空格的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-combinator-space-after-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/selector-combinator-space-after');
  });
});
