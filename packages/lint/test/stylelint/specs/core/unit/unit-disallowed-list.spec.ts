import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('unit-disallowed-list', () => {
  it('应该通过没有使用黑名单中单位的代码', async () => {
    const file = resolveFixture('core', 'unit', 'unit-disallowed-list.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'unit-disallowed-list');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用黑名单中单位的错误', async () => {
    const file = resolveFixture('core', 'unit', 'unit-disallowed-list-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('unit-disallowed-list');
  });
});
