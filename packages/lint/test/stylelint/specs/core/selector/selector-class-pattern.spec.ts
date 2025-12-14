import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-class-pattern', () => {
  it('应该通过使用 BEM 命名的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-class-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-class-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用非 BEM 命名的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-class-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-class-pattern');
  });
});
