import importRules from '@/stylelint/core/import';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'import-notation';

describe(ruleName, () => {
  it('应该通过使用字符串形式 @import 的代码', async () => {
    const file = resolveFixture('core', 'import', 'import-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: importRules[ruleName] },
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

  it('应该报告使用 url() 形式 @import 的错误', async () => {
    const file = resolveFixture('core', 'import', 'import-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: importRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([3, 5]);
    expect(validateWarningMessages(ruleWarnings, ['import', 'notation'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
