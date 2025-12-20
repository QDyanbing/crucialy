import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('media-type-no-deprecated', () => {
  it('应该通过没有使用已弃用 media type 的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-type-no-deprecated.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-type-no-deprecated');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用已弃用 media type 的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-type-no-deprecated-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('media-type-no-deprecated');
  });
});
