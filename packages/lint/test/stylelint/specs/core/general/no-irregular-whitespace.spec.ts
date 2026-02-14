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

const ruleName = 'no-irregular-whitespace';

describe(ruleName, () => {
  it('应该通过没有不规则空白字符的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-irregular-whitespace.css');

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

  it('应该报告不规则空白字符的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-irregular-whitespace-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4]);
    expect(validateWarningMessages(ruleWarnings, ['irregular', 'whitespace'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
