import functionRules from '@/stylelint/core/function';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'function-disallowed-list';

describe(ruleName, () => {
  it('应该通过没有使用黑名单中函数的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-disallowed-list.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: functionRules[ruleName] },
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

  it('应该报告使用黑名单中函数的错误', async () => {
    const file = resolveFixture('core', 'function', 'function-disallowed-list-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: functionRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5, 6, 7]);
    expect(validateWarningMessages(ruleWarnings, ['disallowed', 'function'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
