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

const ruleName = 'nesting-selector-no-missing-scoping-root';

describe(ruleName, () => {
  it('应该通过嵌套选择器有作用域根的代码', async () => {
    const file = resolveFixture('core', 'nesting', 'nesting-selector-no-missing-scoping-root.css');

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

  it('应该报告嵌套选择器缺少作用域根的错误', async () => {
    const file = resolveFixture(
      'core',
      'nesting',
      'nesting-selector-no-missing-scoping-root-invalid.css',
    );

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

    expect(getErrorLines(ruleWarnings)).toEqual([3, 7]);
    expect(validateWarningMessages(ruleWarnings, ['nesting', 'scoping', 'root'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
