import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('media-query-no-invalid', () => {
  it('应该通过使用有效媒体查询的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-query-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-query-no-invalid');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用无效媒体查询的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-query-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('media-query-no-invalid');
  });
});
