import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('hue-degree-notation', () => {
  it('应该通过使用角度单位的色相值', async () => {
    const file = resolveFixture('core', 'color', 'hue-degree-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'hue-degree-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用纯数字色相值的错误', async () => {
    const file = resolveFixture('core', 'color', 'hue-degree-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('hue-degree-notation');
  });
});
