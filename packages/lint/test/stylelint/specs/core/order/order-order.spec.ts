import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('order/order', () => {
  it('应该通过声明块内容顺序正确的代码', async () => {
    const file = resolveFixture('core', 'order', 'order-order.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'order/order');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告声明块内容顺序错误的错误', async () => {
    const file = resolveFixture('core', 'order', 'order-order-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('order/order');
  });
});
