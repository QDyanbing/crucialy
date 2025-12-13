import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-empty-source', () => {
  it('应该通过非空源文件的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-empty-source.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-empty-source');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告空源文件的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-empty-source-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-empty-source');
  });
});
