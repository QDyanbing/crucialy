import core from '@/stylelint/core';
import blockRules from '@/stylelint/core/block';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('block-no-empty', () => {
  it('应该通过代码块不为空的代码', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: { 'block-no-empty': blockRules['block-no-empty'] } },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'block-no-empty');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告空代码块的错误', async () => {
    const file = resolveFixture('core', 'block', 'block-no-empty-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'block-no-empty');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([3, 6]);

    expect(validateWarningMessages(ruleWarnings, ['empty', 'block'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('block-no-empty');
      expect(w.severity).toBe('error');
    });
  });
});
