import core from '@/stylelint/core';
import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = '@stylistic/value-list-max-empty-lines';

describe(ruleName, () => {
  it('应该通过值列表中没有空行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['@stylistic/stylelint-plugin'],
        rules: { [ruleName]: stylisticRules[ruleName] },
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

  it('应该报告值列表中有空行的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-max-empty-lines-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 7]);
    expect(validateWarningMessages(ruleWarnings, ['value', 'empty', 'line'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
