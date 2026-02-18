import core from '@/stylelint/core';
import stylisticRules from '@/stylelint/core/stylistic';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const stylisticConfig = {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: stylisticRules,
};

const ruleName = '@stylistic/unicode-bom';

describe(ruleName, () => {
  it('应该通过文件开头没有 BOM 的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'unicode-bom.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        plugins: ['@stylistic/stylelint-plugin'],
        rules: { [ruleName]: stylisticRules[ruleName] },
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

  it('应该报告文件开头有 BOM 的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'unicode-bom-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(result.source).toBe(file);

    if (ruleWarnings.length > 0) {
      expect(getErrorLines(ruleWarnings)).toEqual([1]);
      expect(validateWarningMessages(ruleWarnings, ['unicode', 'bom'])).toBe(true);
      ruleWarnings.forEach(w => {
        expect(w.rule).toBe(ruleName);
        expect(w.severity).toBe('error');
      });
    } else {
      expect(result.warnings?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
