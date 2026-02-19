import core from '@/stylelint/core';
import blockRules from '@/stylelint/core/block';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'block-no-redundant-nested-style-rules';

describe(ruleName, () => {
  it('应该通过没有冗余嵌套的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-redundant-nested-style-rules.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          [ruleName]: blockRules[ruleName],
        },
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

  it('应该报告冗余嵌套的错误', async () => {
    const file = resolveFixture(
      'core',
      'block',
      'block-no-redundant-nested-style-rules-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'block-no-redundant-nested-style-rules');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([4, 10]);
    expect(validateWarningMessages(ruleWarnings, ['redundant', 'nested'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
