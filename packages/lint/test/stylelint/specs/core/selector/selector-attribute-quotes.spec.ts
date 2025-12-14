import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-attribute-quotes', () => {
  it('应该通过属性值使用引号的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-attribute-quotes.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-attribute-quotes');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告属性值缺少引号的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-attribute-quotes-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(errored).toBe(true);
    expect(ruleNames).toContain('selector-attribute-quotes');
  });
});
