import core from '@/stylelint/core';
import syntaxRules from '@/stylelint/core/syntax';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'syntax-string-no-invalid';

describe(ruleName, () => {
  it('应该通过使用有效语法字符串的代码', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          [ruleName]: syntaxRules[ruleName],
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

  it('应该报告使用无效语法字符串的错误', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(result.source).toBe(file);

    if (ruleWarnings.length > 0) {
      expect(ruleWarnings.length).toBeGreaterThan(0);
      expect(getErrorLines(ruleWarnings)).toEqual([3, 15]);
      expect(validateWarningMessages(ruleWarnings, ['syntax', 'string', 'invalid'])).toBe(true);
      ruleWarnings.forEach(w => {
        expect(w.rule).toBe(ruleName);
        expect(w.severity).toBe('error');
      });
    } else {
      expect(result.warnings?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
