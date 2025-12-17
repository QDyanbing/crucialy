import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('named-grid-areas-no-invalid', () => {
  it('应该通过使用有效命名网格区域的代码', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'named-grid-areas-no-invalid');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用无效命名网格区域的错误', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('named-grid-areas-no-invalid');
  });
});
