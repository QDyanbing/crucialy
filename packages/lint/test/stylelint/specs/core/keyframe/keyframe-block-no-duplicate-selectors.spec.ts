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

const ruleName = 'keyframe-block-no-duplicate-selectors';

describe(ruleName, () => {
  it('应该通过没有重复选择器的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframe-block-no-duplicate-selectors.css');

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

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([12, 30]);
    expect(validateWarningMessages(ruleWarnings, ['duplicate', 'selector', 'keyframe'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
