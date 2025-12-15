import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('media-feature-name-value-no-unknown', () => {
  it('应该通过使用已知媒体特性值的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-feature-name-value-no-unknown');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未知媒体特性值的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-value-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('media-feature-name-value-no-unknown');
  });
});
