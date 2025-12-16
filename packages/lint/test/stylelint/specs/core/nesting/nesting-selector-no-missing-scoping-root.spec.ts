import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('nesting-selector-no-missing-scoping-root', () => {
  it('应该通过嵌套选择器有作用域根的代码', async () => {
    const file = resolveFixture('core', 'nesting', 'nesting-selector-no-missing-scoping-root.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'nesting-selector-no-missing-scoping-root',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告嵌套选择器缺少作用域根的错误', async () => {
    const file = resolveFixture(
      'core',
      'nesting',
      'nesting-selector-no-missing-scoping-root-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('nesting-selector-no-missing-scoping-root');
  });
});
