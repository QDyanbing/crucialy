import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('keyframe-block-no-duplicate-selectors', () => {
  it('应该通过没有重复选择器的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-block-no-duplicate-selectors.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-block-no-duplicate-selectors');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告重复选择器的错误', async () => {
    const file = resolveFixture(
      'core',
      'keyframe',
      'keyframe-block-no-duplicate-selectors-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-block-no-duplicate-selectors');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('keyframe-block-no-duplicate-selectors');
  });
});
