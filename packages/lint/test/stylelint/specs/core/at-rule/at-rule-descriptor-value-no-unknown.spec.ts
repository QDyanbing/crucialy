import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-descriptor-value-no-unknown', () => {
  it('应该通过使用有效 descriptor 值的 @规则代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-descriptor-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-descriptor-value-no-unknown');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用无效 descriptor 值的 @规则错误', async () => {
    const file = resolveFixture(
      'core',
      'at-rule',
      'at-rule-descriptor-value-no-unknown-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('at-rule-descriptor-value-no-unknown');
  });
});
