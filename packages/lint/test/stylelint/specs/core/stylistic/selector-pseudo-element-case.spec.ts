import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/selector-pseudo-element-case', () => {
  it('应该通过伪元素使用小写的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-pseudo-element-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/selector-pseudo-element-case');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告伪元素使用大写的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-pseudo-element-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/selector-pseudo-element-case');
  });
});
