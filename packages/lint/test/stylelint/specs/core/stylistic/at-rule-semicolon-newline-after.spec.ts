import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/at-rule-semicolon-newline-after', () => {
  it('应该通过 @规则分号后有换行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'at-rule-semicolon-newline-after.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/at-rule-semicolon-newline-after',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @规则分号后缺少换行的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'at-rule-semicolon-newline-after-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/at-rule-semicolon-newline-after');
  });
});
