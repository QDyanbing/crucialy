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

const ruleName = 'selector-max-type';

describe(ruleName, () => {
  it('应该通过类型选择器数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: { [ruleName]: selectorRules[ruleName] } },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告类型选择器数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-type-invalid.css');

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
      expect(getErrorLines(ruleWarnings)).toEqual([3]);
      expect(validateWarningMessages(ruleWarnings, ['max', 'type'])).toBe(true);
      ruleWarnings.forEach(w => {
        expect(w.rule).toBe(ruleName);
        expect(w.severity).toBe('error');
      });
    } else {
      expect(result.warnings?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
