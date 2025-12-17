import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/string-quotes', () => {
  it('应该通过字符串使用单引号的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'string-quotes.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/string-quotes');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告字符串使用双引号的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'string-quotes-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/string-quotes');
  });
});
