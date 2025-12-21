import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-empty-line-before', () => {
  it('应该通过 @规则前有空行的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-empty-line-before');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @规则前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-empty-line-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-empty-line-before');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('at-rule-empty-line-before');
  });
});
