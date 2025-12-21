import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('annotation-no-unknown', () => {
  it('应该通过不使用注解的代码', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'annotation-no-unknown');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未知注解的错误', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('annotation-no-unknown');
  });
});
