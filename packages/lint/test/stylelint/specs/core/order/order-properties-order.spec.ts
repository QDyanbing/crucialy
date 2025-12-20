import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('order/properties-order', () => {
  it('应该通过属性顺序符合功能分组的代码', async () => {
    const file = resolveFixture('core', 'order', 'order-properties-order.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'order/properties-order');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告属性顺序不符合功能分组的错误', async () => {
    const file = resolveFixture('core', 'order', 'order-properties-order-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('order/properties-order');
  });
});
