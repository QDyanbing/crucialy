import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-unknown-custom-properties', () => {
  it('应该通过使用已定义自定义属性的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-properties.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-unknown-custom-properties');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未定义自定义属性的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-custom-properties-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-unknown-custom-properties');
  });
});
