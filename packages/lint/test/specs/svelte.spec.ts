import { describe, it, expect } from 'vitest';
import svelte from '../../src/stylelint/svelte';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint svelte config', () => {
  it('basic-valid.svelte 应支持 :global 并正常通过', async () => {
    const file = resolveFixture('svelte', 'basic-valid.svelte');

    const { errored, results } = await runStylelintWithConfig({
      config: svelte,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('basic-invalid.svelte 应该报告错误', async () => {
    const file = resolveFixture('svelte', 'basic-invalid.svelte');

    const { errored, results } = await runStylelintWithConfig({
      config: svelte,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
  });
});

