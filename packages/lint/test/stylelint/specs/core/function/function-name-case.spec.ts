import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-name-case', () => {
  it('应该通过函数名使用小写的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-name-case.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-name-case');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告函数名使用大写的错误', async () => {
    const file = resolveFixture('core', 'function', 'function-name-case-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('function-name-case');
  });
});
