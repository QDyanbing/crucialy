import core from '@/stylelint/core';
import ruleRules from '@/stylelint/core/rule';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'rule-empty-line-before';

describe(ruleName, () => {
  it('应该通过多行规则前有空行的代码', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: { [ruleName]: ruleRules[ruleName] } },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告多行规则前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([6, 10]);
    expect(validateWarningMessages(ruleWarnings, ['empty', 'line', 'rule'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
