import colorRules from '@/stylelint/core/color';
import { describe, expect, it } from 'vitest';
import {
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
} from '../../../stylelintTestUtils';

const ruleName = 'color-hex-alpha';

describe(ruleName, () => {
  it('应该通过使用 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-hex-alpha.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: colorRules[ruleName] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });
});
