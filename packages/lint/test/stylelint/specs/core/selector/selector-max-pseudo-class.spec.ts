import selectorRules from '@/stylelint/core/selector';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'selector-max-pseudo-class';

describe(ruleName, () => {
  it('应该通过伪类数量在限制内的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-pseudo-class.css');

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

  it('应该报告伪类数量超过限制的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-pseudo-class-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: selectorRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([3, 7]);
    expect(validateWarningMessages(ruleWarnings, ['max', 'pseudo', 'class'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
