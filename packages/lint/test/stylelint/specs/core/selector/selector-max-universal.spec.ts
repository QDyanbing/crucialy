import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-max-universal', () => {
  it('应该通过不使用通配符选择器的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-universal.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-max-universal');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用通配符选择器的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-max-universal-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('selector-max-universal');
  });
});
