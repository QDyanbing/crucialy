import { describe, it, expect } from 'vitest';
import less from '../../src/stylelint/less';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint less config', () => {
  it('variables-valid.less 应该通过', async () => {
    const file = resolveFixture('less', 'variables-valid.less');

    const { errored, results } = await runStylelintWithConfig({
      config: less,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('mixin-valid.less 应该通过', async () => {
    const file = resolveFixture('less', 'mixin-valid.less');

    const { errored, results } = await runStylelintWithConfig({
      config: less,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });
});

