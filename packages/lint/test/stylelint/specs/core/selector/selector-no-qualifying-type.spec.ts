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

const ruleName = 'selector-no-qualifying-type';

describe(ruleName, () => {
  it('应该通过不使用类型选择器限定类或ID的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type.css');

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

  it('应该报告使用类型选择器限定类或ID的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type-invalid.css');

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
    expect(validateWarningMessages(ruleWarnings, ['qualifying', 'type'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
