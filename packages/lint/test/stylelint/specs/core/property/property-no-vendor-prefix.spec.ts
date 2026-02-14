import core from '@/stylelint/core';
import propertyRules from '@/stylelint/core/property';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'property-no-vendor-prefix';

describe(ruleName, () => {
  it('应该通过属性没有使用厂商前缀的代码', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: propertyRules[ruleName] },
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

  it('应该报告属性使用厂商前缀的错误', async () => {
    const file = resolveFixture('core', 'property', 'property-no-vendor-prefix-invalid.css');

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

    expect(getErrorLines(ruleWarnings)).toEqual([4, 5]);
    expect(validateWarningMessages(ruleWarnings, ['vendor', 'prefix'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
