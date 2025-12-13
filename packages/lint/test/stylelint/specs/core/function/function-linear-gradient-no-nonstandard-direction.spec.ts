import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-linear-gradient-no-nonstandard-direction', () => {
  it('应该通过使用标准方向语法的代码', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-linear-gradient-no-nonstandard-direction.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'function-linear-gradient-no-nonstandard-direction',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用非标准方向语法的错误', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-linear-gradient-no-nonstandard-direction-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('function-linear-gradient-no-nonstandard-direction');
  });
});
