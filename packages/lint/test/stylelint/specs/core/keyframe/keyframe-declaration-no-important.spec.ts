import core from '@/stylelint/core';
import keyframeRules from '@/stylelint/core/keyframe';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'keyframe-declaration-no-important';

describe(ruleName, () => {
  it('应该通过不使用 !important 的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-declaration-no-important.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: keyframeRules[ruleName] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
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

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([5, 9, 15, 19]);
    expect(validateWarningMessages(ruleWarnings, ['important', 'keyframe'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
