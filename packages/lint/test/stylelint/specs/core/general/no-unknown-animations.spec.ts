import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-unknown-animations', () => {
  it('应该通过使用已定义动画的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-animations.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-unknown-animations');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用未定义动画的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-unknown-animations-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('no-unknown-animations');
  });
});
