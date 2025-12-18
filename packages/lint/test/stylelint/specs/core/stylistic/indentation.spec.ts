import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/indentation', () => {
  it('应该通过使用正确缩进的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'indentation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/indentation');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用错误缩进的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'indentation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);

    expect(ruleNames).toContain('@stylistic/indentation');
  });
});
