import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/number-no-trailing-zeros', () => {
  it('应该通过数字没有尾随零的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-no-trailing-zeros.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/number-no-trailing-zeros');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告数字有尾随零的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'number-no-trailing-zeros-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/number-no-trailing-zeros');
  });
});
