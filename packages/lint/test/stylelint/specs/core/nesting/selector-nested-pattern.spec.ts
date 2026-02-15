import core from '@/stylelint/core';
import nestingRules from '@/stylelint/core/nesting';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'selector-nested-pattern';

describe(ruleName, () => {
  it('应该通过嵌套选择器以 & 开头的代码', async () => {
    const file = resolveFixture('core', 'nesting', 'selector-nested-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: nestingRules[ruleName] },
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

  it('应该报告嵌套选择器不以 & 开头的错误', async () => {
    const file = resolveFixture('core', 'nesting', 'selector-nested-pattern-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 8]);
    expect(validateWarningMessages(ruleWarnings, ['nested', 'pattern', 'selector'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
