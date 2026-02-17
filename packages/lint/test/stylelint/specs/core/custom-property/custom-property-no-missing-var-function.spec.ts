import customPropertyRules from '@/stylelint/core/custom-property';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'custom-property-no-missing-var-function';

describe(ruleName, () => {
  it('应该通过使用 var() 包裹自定义属性的代码', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: customPropertyRules[ruleName] },
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

  it('应该报告直接使用自定义属性的错误', async () => {
    const file = resolveFixture(
      'core',
      'custom-property',
      'custom-property-no-missing-var-function-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: customPropertyRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([8]);
    expect(validateWarningMessages(ruleWarnings, ['var', 'function'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
