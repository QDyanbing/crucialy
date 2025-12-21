import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-no-vendor-prefix', () => {
  it('应该通过 @规则没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-vendor-prefix');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @规则使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-no-vendor-prefix');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('at-rule-no-vendor-prefix');
  });
});
