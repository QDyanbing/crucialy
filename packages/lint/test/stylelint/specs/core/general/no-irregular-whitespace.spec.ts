import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-irregular-whitespace', () => {
  it('应该通过没有不规则空白字符的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-irregular-whitespace.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-irregular-whitespace');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告不规则空白字符的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-irregular-whitespace-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-irregular-whitespace');
  });
});
