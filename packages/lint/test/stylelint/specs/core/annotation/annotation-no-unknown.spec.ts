import core from '@/stylelint/core';
import annotationRules from '@/stylelint/core/annotation';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'annotation-no-unknown';

describe(ruleName, () => {
  it('应该通过不使用注解的代码', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: annotationRules[ruleName] },
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

  it('应该报告使用未知注解的错误', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([5, 10, 15, 20]);
    expect(validateWarningMessages(ruleWarnings, ['annotation', 'unknown'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
