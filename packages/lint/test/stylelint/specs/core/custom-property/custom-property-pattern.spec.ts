import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('custom-property-pattern', () => {
  it('应该通过自定义属性使用 kebab-case 的代码', async () => {
    const file = resolveFixture('core', 'custom-property', 'custom-property-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-property-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告自定义属性不使用 kebab-case 的错误', async () => {
    const file = resolveFixture('core', 'custom-property', 'custom-property-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('custom-property-pattern');
  });
});
