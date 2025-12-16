import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('import-notation', () => {
  it('应该通过使用字符串形式 @import 的代码', async () => {
    const file = resolveFixture('core', 'import', 'import-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'import-notation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用 url() 形式 @import 的错误', async () => {
    const file = resolveFixture('core', 'import', 'import-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('import-notation');
  });
});
