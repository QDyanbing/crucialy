import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-named', () => {
  it('应该通过没有使用命名颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-named.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'color-named');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用命名颜色的错误', async () => {
    const file = resolveFixture('core', 'color', 'color-named-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('color-named');
  });
});
