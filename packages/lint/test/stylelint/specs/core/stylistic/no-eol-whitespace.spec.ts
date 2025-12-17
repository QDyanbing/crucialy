import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/no-eol-whitespace', () => {
  it('应该通过行尾没有空格的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-eol-whitespace.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/no-eol-whitespace');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告行尾有空格的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-eol-whitespace-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/no-eol-whitespace');
  });
});
