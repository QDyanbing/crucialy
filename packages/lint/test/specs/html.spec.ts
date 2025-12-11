import { describe, it, expect } from 'vitest';
import html from '../../src/stylelint/html';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint html config', () => {
  it('basic-valid.html 应该通过', async () => {
    const file = resolveFixture('html', 'basic-valid.html');

    const { errored, results } = await runStylelintWithConfig({
      config: html,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('basic-invalid.html 应该报告错误', async () => {
    const file = resolveFixture('html', 'basic-invalid.html');

    const { errored, results } = await runStylelintWithConfig({
      config: html,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
  });
});

