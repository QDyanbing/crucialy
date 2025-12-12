import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('alpha-value-notation', () => {
  it('应该通过使用数字形式的 alpha 值', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用百分比形式的 alpha 值错误', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('alpha-value-notation');
  });
});
