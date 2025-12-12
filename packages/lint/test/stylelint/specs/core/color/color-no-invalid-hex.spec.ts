import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-no-invalid-hex', () => {
  it('应该通过使用有效 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-no-invalid-hex.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
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
