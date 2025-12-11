import { describe, it, expect } from 'vitest';
import cssInJs from '../../src/stylelint/css-in-js';
import { resolveFixture, runStylelintWithConfig } from '../stylelintTestUtils';

describe('stylelint css-in-js config', () => {
  it('styled-valid.tsx 应通过', async () => {
    const file = resolveFixture('css-in-js', 'styled-valid.tsx');

    const { errored, results } = await runStylelintWithConfig({
      config: cssInJs,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });

  it('styled-invalid.tsx 不会报 property-no-unknown（已关闭）', async () => {
    const file = resolveFixture('css-in-js', 'styled-invalid.tsx');

    const { errored, results } = await runStylelintWithConfig({
      config: cssInJs,
      files: file,
    });

    // CSS-in-JS 配置中已关闭 property-no-unknown，所以这里不会报错
    // 这验证了配置正确生效
    expect(errored).toBe(false);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map((w) => w.rule);

    // 验证 property-no-unknown 确实被关闭了
    expect(ruleNames).not.toContain('property-no-unknown');
  });

  it('emotion-valid.tsx 应通过', async () => {
    const file = resolveFixture('css-in-js', 'emotion-valid.tsx');

    const { errored, results } = await runStylelintWithConfig({
      config: cssInJs,
      files: file,
    });

    expect(errored).toBe(false);
    expect(results[0]?.warnings.length).toBe(0);
  });
});
