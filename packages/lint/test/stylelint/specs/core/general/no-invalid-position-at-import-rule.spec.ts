import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-invalid-position-at-import-rule', () => {
  it('应该通过 @import 在文件开头的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-position-at-import-rule.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-invalid-position-at-import-rule');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @import 不在文件开头的错误', async () => {
    const file = resolveFixture(
      'core',
      'general',
      'no-invalid-position-at-import-rule-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-invalid-position-at-import-rule');
  });
});
