import { describe, it, expect } from 'vitest';
import modules from '../../src/stylelint/modules';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint modules config', () => {
  it('classname-valid.css 应该通过（支持 BEM 和 camelCase）', async () => {
    const file = resolveFixture('modules', 'classname-valid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: modules,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('classname-invalid.css 应该报告命名错误', async () => {
    const file = resolveFixture('modules', 'classname-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: modules,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    expect(ruleNames).toContain('selector-class-pattern');
  });
});

