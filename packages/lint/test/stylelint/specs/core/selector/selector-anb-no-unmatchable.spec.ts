import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-anb-no-unmatchable', () => {
  it('应该通过使用可匹配 :nth-child() 表达式的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-anb-no-unmatchable.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-anb-no-unmatchable');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用不可匹配 :nth-child() 表达式的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-anb-no-unmatchable-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-anb-no-unmatchable');
  });
});
