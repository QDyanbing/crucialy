import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-id-pattern', () => {
  it('应该通过使用 kebab-case 命名的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-id-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-id-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用非 kebab-case 命名的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-id-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-id-pattern');
  });
});
