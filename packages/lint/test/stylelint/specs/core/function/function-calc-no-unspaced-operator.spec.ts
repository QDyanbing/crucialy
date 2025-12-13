import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-calc-no-unspaced-operator', () => {
  it('应该通过 calc() 运算符周围有空格的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-calc-no-unspaced-operator.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-calc-no-unspaced-operator');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 calc() 运算符周围缺少空格的错误', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-calc-no-unspaced-operator-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('function-calc-no-unspaced-operator');
  });
});
