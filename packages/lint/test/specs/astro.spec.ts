import { describe, it, expect } from 'vitest';
import astro from '../../src/stylelint/astro';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint astro config', () => {
  it('basic-valid.astro 应支持 :global 并正常通过', async () => {
    const file = resolveFixture('astro', 'basic-valid.astro');

    const { errored, results } = await runStylelintWithConfig({
      config: astro,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('basic-invalid.astro 应该报告错误', async () => {
    const file = resolveFixture('astro', 'basic-invalid.astro');

    const { errored, results } = await runStylelintWithConfig({
      config: astro,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
  });
});

