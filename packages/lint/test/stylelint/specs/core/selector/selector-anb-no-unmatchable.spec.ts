import core from '@/stylelint/core';
import selectorRules from '@/stylelint/core/selector';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'selector-anb-no-unmatchable';

describe(ruleName, () => {
  it('应该通过使用可匹配 :nth-child() 表达式的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-anb-no-unmatchable.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: selectorRules[ruleName] },
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

  it('应该报告使用不可匹配 :nth-child() 表达式的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-anb-no-unmatchable-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([3, 11]);
    expect(validateWarningMessages(ruleWarnings, ['unmatchable', 'nth-child'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
