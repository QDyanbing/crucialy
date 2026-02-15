import core from '@/stylelint/core';
import colorRules from '@/stylelint/core/color';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'hue-degree-notation';

describe(ruleName, () => {
  it('应该通过使用角度单位的色相值', async () => {
    const file = resolveFixture('core', 'color', 'hue-degree-notation.css');

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

  it('应该报告使用纯数字色相值的错误', async () => {
    const file = resolveFixture('core', 'color', 'hue-degree-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([4, 8, 12]);
    expect(validateWarningMessages(ruleWarnings, ['hue', 'degree', 'notation'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
