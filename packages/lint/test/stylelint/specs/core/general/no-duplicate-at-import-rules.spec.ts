import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-duplicate-at-import-rules', () => {
  it('应该通过没有重复 @import 的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-duplicate-at-import-rules.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-duplicate-at-import-rules');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告重复 @import 的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-duplicate-at-import-rules-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-duplicate-at-import-rules');
  });
});
