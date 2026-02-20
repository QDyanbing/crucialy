import core from '@/stylelint/core';
import stringRules from '@/stylelint/core/string';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'string-no-newline';

describe(ruleName, () => {
  it('应该通过字符串值不包含换行符的代码', async () => {
    const file = resolveFixture('core', 'string', 'string-no-newline.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: stringRules[ruleName] },
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

  it('应该报告字符串值包含换行符的错误', async () => {
    const file = resolveFixture('core', 'string', 'string-no-newline-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 6]);
    expect(validateWarningMessages(ruleWarnings, ['string', 'newline'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
