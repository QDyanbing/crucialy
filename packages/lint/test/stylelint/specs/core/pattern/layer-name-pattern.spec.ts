import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('layer-name-pattern', () => {
  it('应该通过 @layer 名称使用 kebab-case 的代码', async () => {
    const file = resolveFixture('core', 'pattern', 'layer-name-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'layer-name-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 @layer 名称不使用 kebab-case 的错误', async () => {
    const file = resolveFixture('core', 'pattern', 'layer-name-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('layer-name-pattern');
  });
});
