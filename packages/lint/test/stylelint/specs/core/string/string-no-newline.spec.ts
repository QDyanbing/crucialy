import stringRules from '@/stylelint/core/string';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('string-no-newline', () => {
  it('应该通过字符串值不包含换行符的代码', async () => {
    const file = resolveFixture('core', 'string', 'string-no-newline.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'string-no-newline': stringRules['string-no-newline'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'string-no-newline');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告字符串值包含换行符的错误', async () => {
    const file = resolveFixture('core', 'string', 'string-no-newline-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: stringRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'string-no-newline');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([4, 6]);

    expect(validateWarningMessages(ruleWarnings, ['string', 'newline'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('string-no-newline');
      expect(w.severity).toBe('error');
    });
  });
});
