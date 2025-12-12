import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('block-no-redundant-nested-style-rules', () => {
  it('应该通过使用非冗余嵌套的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-redundant-nested-style-rules.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用冗余嵌套的错误', async () => {
    const file = resolveFixture(
      'core',
      'block',
      'block-no-redundant-nested-style-rules-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('block-no-redundant-nested-style-rules');
  });
});
