import core from '@/stylelint/core';
import declarationRules from '@/stylelint/core/declaration';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'declaration-property-value-no-unknown';

describe(ruleName, () => {
  it('应该通过使用已知属性值的代码', async () => {
    const file = resolveFixture('core', 'declaration', 'declaration-property-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: declarationRules[ruleName] },
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

  it('应该报告使用未知属性值的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-no-unknown-invalid.css',
    );

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5, 9]);
    expect(validateWarningMessages(ruleWarnings, ['unknown', 'value'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
