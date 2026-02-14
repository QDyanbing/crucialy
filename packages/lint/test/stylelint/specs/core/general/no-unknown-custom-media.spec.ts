import core from '@/stylelint/core';
import generalRules from '@/stylelint/core/general';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'no-unknown-custom-media';

describe(ruleName, () => {
  it('应该通过使用已定义自定义 media 的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-media.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: generalRules[ruleName] },
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

  it('应该报告使用未定义自定义 media 的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-media-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([3, 9]);
    expect(validateWarningMessages(ruleWarnings, ['unknown', 'custom', 'media'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
