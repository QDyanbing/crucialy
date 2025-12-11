import { describe, it, expect } from 'vitest';
import angular from '../../src/stylelint/angular';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint angular config', () => {
  it('component-valid.scss 应支持 :host 和 :host-context 并正常通过', async () => {
    const file = resolveFixture('angular', 'component-valid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: angular,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('component-invalid.scss 应该报告错误', async () => {
    const file = resolveFixture('angular', 'component-invalid.scss');

    const { errored, results } = await runStylelintWithConfig({
      config: angular,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('property-no-unknown');
    expect(ruleNames).toContain('selector-class-pattern');
  });
});

