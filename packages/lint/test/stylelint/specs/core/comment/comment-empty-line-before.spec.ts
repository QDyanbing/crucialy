import core from '@/stylelint/core';
import commentRules from '@/stylelint/core/comment';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'comment-empty-line-before';

describe(ruleName, () => {
  it('应该通过注释前有空行的代码', async () => {
    const file = resolveFixture('core', 'comment', 'comment-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: commentRules[ruleName] },
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

  it('应该报告注释前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'comment', 'comment-empty-line-before-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([6]);
    expect(validateWarningMessages(ruleWarnings, ['empty', 'line', 'before'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
