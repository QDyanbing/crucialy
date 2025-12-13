import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('max-nesting-depth', () => {
  it('应该通过嵌套深度在限制内的代码', async () => {
    const file = resolveFixture('core', 'complexity', 'max-nesting-depth.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告嵌套深度超过限制的错误', async () => {
    const file = resolveFixture('core', 'complexity', 'max-nesting-depth-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('max-nesting-depth');
  });
});
