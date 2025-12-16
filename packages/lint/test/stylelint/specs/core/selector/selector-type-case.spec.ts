import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-type-case', () => {
  it('应该通过类型选择器使用小写的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-type-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-type-case');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告类型选择器使用大写的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-type-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-type-case');
  });
});
