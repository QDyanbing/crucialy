import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-nested-pattern', () => {
  it('应该通过嵌套选择器以 & 开头的代码', async () => {
    const file = resolveFixture('core', 'nesting', 'selector-nested-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-nested-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告嵌套选择器不以 & 开头的错误', async () => {
    const file = resolveFixture('core', 'nesting', 'selector-nested-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-nested-pattern');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('selector-nested-pattern');
  });
});
