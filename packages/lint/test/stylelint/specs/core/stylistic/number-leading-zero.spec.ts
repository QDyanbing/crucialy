import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/number-leading-zero', () => {
  it('应该通过数字有前导零的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-leading-zero.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/number-leading-zero');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告数字缺少前导零的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-leading-zero-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/number-leading-zero');
  });
});
