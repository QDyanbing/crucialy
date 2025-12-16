import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-not-notation', () => {
  it('应该通过使用复杂形式 :not() 的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-not-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-not-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用简单形式 :not() 的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-not-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-not-notation');
  });
});
