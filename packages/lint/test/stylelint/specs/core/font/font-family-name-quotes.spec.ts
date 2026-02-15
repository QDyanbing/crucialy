import core from '@/stylelint/core';
import fontRules from '@/stylelint/core/font';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'font-family-name-quotes';

describe(ruleName, () => {
  it('应该通过字体名称在必要时使用引号的代码', async () => {
    const file = resolveFixture('core', 'font', 'font-family-name-quotes.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: fontRules[ruleName] },
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

  it('应该报告字体名称缺少引号的错误', async () => {
    const file = resolveFixture('core', 'font', 'font-family-name-quotes-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5]);
    expect(validateWarningMessages(ruleWarnings, ['quotes', 'font-family'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
