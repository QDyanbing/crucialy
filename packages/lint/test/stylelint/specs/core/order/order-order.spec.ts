import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'order/order';

describe(ruleName, () => {
  it('应该通过声明块内容顺序正确的代码', async () => {
    const file = resolveFixture('core', 'order', 'order-order.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['stylelint-order'],
        rules: {
          [ruleName]: [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'at-rules',
            'rules',
          ],
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

  it('应该报告声明块内容顺序错误的错误', async () => {
    const file = resolveFixture('core', 'order', 'order-order-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([5, 16]);
    expect(validateWarningMessages(ruleWarnings, ['order'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
