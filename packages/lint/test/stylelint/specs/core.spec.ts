import { describe, expect, it } from 'vitest';
import core from '../../../src/stylelint/core';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint core config - alpha rules', () => {
  it('应该通过使用数字形式的 alpha 值', async () => {
    const file = resolveFixture('core', 'alpha-valid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用百分比形式的 alpha 值错误', async () => {
    const file = resolveFixture('core', 'alpha-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('alpha-value-notation');
  });
});

describe('stylelint core config - annotation rules', () => {
  it('应该通过不使用注解的代码', async () => {
    const file = resolveFixture('core', 'annotation-valid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用未知注解的错误', async () => {
    const file = resolveFixture('core', 'annotation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('annotation-no-unknown');
  });
});

describe('stylelint core config - at-rule rules', () => {
  it('应该通过使用标准 @规则的代码', async () => {
    const file = resolveFixture('core', 'at-rule-valid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('应该报告使用未知 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule-invalid-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('at-rule-no-unknown');
  });

  it('应该报告使用厂商前缀 @规则的错误', async () => {
    const file = resolveFixture('core', 'at-rule-invalid-vendor.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('at-rule-no-vendor-prefix');
  });
});
