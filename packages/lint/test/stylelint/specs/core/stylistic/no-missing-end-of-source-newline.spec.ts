import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/no-missing-end-of-source-newline', () => {
  it('应该通过文件末尾有换行符的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-missing-end-of-source-newline.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/no-missing-end-of-source-newline',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告文件末尾缺少换行符的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'no-missing-end-of-source-newline-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/no-missing-end-of-source-newline');
  });
});
