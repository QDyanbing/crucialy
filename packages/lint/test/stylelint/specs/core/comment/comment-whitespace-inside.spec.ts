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

const ruleName = 'comment-whitespace-inside';

describe(ruleName, () => {
  it('应该通过注释内部有空格的代码', async () => {
    const file = resolveFixture('core', 'comment', 'comment-whitespace-inside.css');

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

  it('应该报告注释内部缺少空格的错误', async () => {
    const file = resolveFixture('core', 'comment', 'comment-whitespace-inside-invalid.css');

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
    expect(validateWarningMessages(ruleWarnings, ['whitespace', 'inside'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
