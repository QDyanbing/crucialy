import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-no-invalid-hex', () => {
  it('应该通过没有使用无效 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-no-invalid-hex.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'color-no-invalid-hex');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用无效 hex 颜色的错误', async () => {
    const file = resolveFixture('core', 'color', 'color-no-invalid-hex-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('color-no-invalid-hex');
  });
});
