import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('block-no-empty', () => {
  it('应该通过代码块不为空的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'block-no-empty');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告空代码块的错误', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('block-no-empty');
  });
});
