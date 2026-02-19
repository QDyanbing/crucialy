import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

const ruleName = '@stylistic/selector-combinator-space-before';

describe(ruleName, () => {
  it('应该通过选择器组合器前有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'selector-combinator-space-before.css');

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

  it('应该报告选择器组合器前缺少空格的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'selector-combinator-space-before-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: stylisticConfig,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([3, 7, 11]);
    expect(validateWarningMessages(ruleWarnings, ['selector', 'combinator', 'space'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
