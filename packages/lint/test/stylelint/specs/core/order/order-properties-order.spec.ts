import core from '@/stylelint/core';
import orderRules from '@/stylelint/core/order';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'order/properties-order';

describe('order/properties-order', () => {
  it('应该通过属性顺序符合功能分组的代码', async () => {
    const file = resolveFixture('core', 'order', 'order-properties-order.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['stylelint-order'],
        rules: { [ruleName]: orderRules[ruleName] },
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

  it('应该报告属性顺序不符合功能分组的错误', async () => {
    const file = resolveFixture('core', 'order', 'order-properties-order-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([5, 6, 7]);
    expect(validateWarningMessages(ruleWarnings, ['order', 'property'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
