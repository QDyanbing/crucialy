import { describe, it, expect } from 'vitest';
import core from '../../src/stylelint/core';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint core config', () => {
  it('basic-valid.css 应该通过且无警告', async () => {
    const file = resolveFixture('core', 'basic-valid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    // 如果有错误，打印出来便于调试
    if (errored || (results[0]?.warnings.length ?? 0) > 0) {
      const warnings = results[0]?.warnings ?? [];
      console.log('Warnings:', warnings.map((w) => `${w.rule}: ${w.text}`));
    }

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('basic-invalid.css 应该报错，并包含预期规则', async () => {
    const file = resolveFixture('core', 'basic-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule).sort();

    // 根据 core 的规则来写断言
    expect(ruleNames).toContain('block-no-empty');
    expect(ruleNames).toContain('property-no-unknown');
  });
});

