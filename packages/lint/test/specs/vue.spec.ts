import { describe, it, expect } from 'vitest';
import vue from '../../src/stylelint/vue';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint vue config', () => {
  it('css-valid.vue 应支持 :deep 并正常通过', async () => {
    const file = resolveFixture('vue', 'css-valid.vue');

    const { errored, results } = await runStylelintWithConfig({
      config: vue,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('css-invalid.vue 应该报告错误', async () => {
    const file = resolveFixture('vue', 'css-invalid.vue');

    const { errored, results } = await runStylelintWithConfig({
      config: vue,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
  });

  it('scss-valid.vue 应支持 SCSS 和 Vue 伪类组合', async () => {
    const file = resolveFixture('vue', 'scss-valid.vue');

    const { errored, results } = await runStylelintWithConfig({
      config: vue,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });
});
