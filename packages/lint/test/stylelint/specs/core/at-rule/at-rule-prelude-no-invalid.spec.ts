import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('at-rule-prelude-no-invalid', () => {
  it('应该通过 @规则的 prelude 有效的代码', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-prelude-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'at-rule-prelude-no-invalid');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @规则的 prelude 无效的错误', async () => {
    const file = resolveFixture('core', 'at-rule', 'at-rule-prelude-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('at-rule-prelude-no-invalid');
  });
});
