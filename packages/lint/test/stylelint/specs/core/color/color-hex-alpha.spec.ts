import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-hex-alpha', () => {
  it('应该通过使用 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-hex-alpha.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'color-hex-alpha');

    // 此规则配置为null，不限制，所以不应该有警告
    expect(ruleWarnings.length).toBe(0);
  });
});
