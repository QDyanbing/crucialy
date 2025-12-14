import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('keyframe-declaration-no-important', () => {
  it('应该通过不使用 !important 的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-declaration-no-important.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-declaration-no-important');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用 !important 的错误', async () => {
    const file = resolveFixture(
      'core',
      'keyframe',
      'keyframe-declaration-no-important-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('keyframe-declaration-no-important');
  });
});
