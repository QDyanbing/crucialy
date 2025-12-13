import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('comment-no-empty', () => {
  it('应该通过使用有内容注释的代码', async () => {
    const file = resolveFixture('core', 'comment', 'comment-no-empty.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用空注释的错误', async () => {
    const file = resolveFixture('core', 'comment', 'comment-no-empty-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('comment-no-empty');
  });
});
