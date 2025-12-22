import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('container-name-pattern', () => {
  it('应该通过 container 名称使用 kebab-case 的代码', async () => {
    const file = resolveFixture('core', 'pattern', 'container-name-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'container-name-pattern');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告 container 名称不使用 kebab-case 的错误', async () => {
    const file = resolveFixture('core', 'pattern', 'container-name-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'container-name-pattern');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(ruleNames).toContain('container-name-pattern');
  });
});
