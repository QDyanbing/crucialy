import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-disallowed-list', () => {
  it('应该通过没有使用黑名单中函数的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-disallowed-list.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-disallowed-list');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用黑名单中函数的错误', async () => {
    const file = resolveFixture('core', 'function', 'function-disallowed-list-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('function-disallowed-list');
  });
});
