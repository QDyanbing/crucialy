import core from '@/stylelint/core';
import unitRules from '@/stylelint/core/unit';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'unit-disallowed-list';

describe(ruleName, () => {
  it('应该通过没有使用黑名单中单位的代码', async () => {
    const file = resolveFixture('core', 'unit', 'unit-disallowed-list.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: unitRules[ruleName] },
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

  it('应该报告使用黑名单中单位的错误', async () => {
    const file = resolveFixture('core', 'unit', 'unit-disallowed-list-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5, 6, 7]);
    expect(validateWarningMessages(ruleWarnings, ['unit', 'disallowed'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
