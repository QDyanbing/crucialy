import core from '@/stylelint/core';
import atRuleRules from '@/stylelint/core/at-rule';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('at-rule-empty-line-before', () => {
  it('应该通过 @规则前有空行的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'at-rule-empty-line-before': atRuleRules['at-rule-empty-line-before'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-empty-line-before');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告 @规则前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-empty-line-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'at-rule-empty-line-before');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([6]);

    expect(validateWarningMessages(ruleWarnings, ['empty', 'line', 'before'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('at-rule-empty-line-before');
      expect(w.severity).toBe('error');
    });
  });
});
