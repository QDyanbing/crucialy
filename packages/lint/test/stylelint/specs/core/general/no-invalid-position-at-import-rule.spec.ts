import core from '@/stylelint/core';
import generalRules from '@/stylelint/core/general';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'no-invalid-position-at-import-rule';

describe(ruleName, () => {
  it('应该通过 @import 在文件开头的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-position-at-import-rule.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: generalRules[ruleName] },
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

  it('应该报告 @import 不在文件开头的错误', async () => {
    const file = resolveFixture(
      'core',
      'general',
      'no-invalid-position-at-import-rule-invalid.css',
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

    expect(getErrorLines(ruleWarnings)).toEqual([7]);
    expect(validateWarningMessages(ruleWarnings, ['position', 'import'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
