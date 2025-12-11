import { describe, it, expect } from 'vitest';
import scss from '../../src/stylelint/scss';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint scss config', () => {
  it('variables-valid.scss 应该通过', async () => {
    const file = resolveFixture('scss', 'variables-valid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: scss,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('nesting-valid.scss 应该通过', async () => {
    const file = resolveFixture('scss', 'nesting-valid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: scss,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('mixin-valid.scss 应该通过', async () => {
    const file = resolveFixture('scss', 'mixin-valid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: scss,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('nesting-invalid.scss 应该报告嵌套深度错误', async () => {
    const file = resolveFixture('scss', 'nesting-invalid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: scss,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('max-nesting-depth');
  });
});

