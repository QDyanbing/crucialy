import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('comment-whitespace-inside', () => {
  it('应该通过注释内部有空格的代码', async () => {
    const file = resolveFixture('core', 'comment', 'comment-whitespace-inside.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告注释内部缺少空格的错误', async () => {
    const file = resolveFixture('core', 'comment', 'comment-whitespace-inside-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('comment-whitespace-inside');
  });
});
