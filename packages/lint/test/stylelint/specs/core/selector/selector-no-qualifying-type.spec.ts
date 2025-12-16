import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-no-qualifying-type', () => {
  it('应该通过不使用类型选择器限定类或ID的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-no-qualifying-type');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用类型选择器限定类或ID的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-no-qualifying-type');
  });
});
