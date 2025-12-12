import { describe, expect, it } from 'vitest';
import core from '../../../../../src/stylelint/core';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-no-vendor-prefix', () => {
  it('应该通过使用标准 @规则的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用厂商前缀 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-no-vendor-prefix-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('at-rule-no-vendor-prefix');
  });
});
