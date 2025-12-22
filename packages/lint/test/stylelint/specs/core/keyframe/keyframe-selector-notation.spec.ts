import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('keyframe-selector-notation', () => {
  it('应该通过使用一致表示法的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-selector-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-selector-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告混用关键字和百分比的错误', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-selector-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframe-selector-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('keyframe-selector-notation');
  });
});
