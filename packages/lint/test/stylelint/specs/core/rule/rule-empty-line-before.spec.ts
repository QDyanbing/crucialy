import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('rule-empty-line-before', () => {
  it('应该通过多行规则前有空行的代码', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'rule-empty-line-before');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告多行规则前缺少空行的错误', async () => {
    const file = resolveFixture('core', 'rule', 'rule-empty-line-before-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('rule-empty-line-before');
  });
});
