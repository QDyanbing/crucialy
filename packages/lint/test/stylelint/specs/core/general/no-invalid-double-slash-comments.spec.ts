import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-invalid-double-slash-comments', () => {
  it('应该通过使用块注释的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-double-slash-comments.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-invalid-double-slash-comments');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用双斜杠注释的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-double-slash-comments-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-invalid-double-slash-comments');
  });
});
