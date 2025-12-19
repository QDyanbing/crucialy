import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('comment-no-empty', () => {
  it('应该通过注释有内容的代码', async () => {
    const file = resolveFixture('core', 'comment', 'comment-no-empty.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'comment-no-empty');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告空注释的错误', async () => {
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
