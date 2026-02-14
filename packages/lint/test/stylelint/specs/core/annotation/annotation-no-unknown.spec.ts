import core from '@/stylelint/core';
import annotationRules from '@/stylelint/core/annotation';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('annotation-no-unknown', () => {
  it('应该通过不使用注解的代码', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'annotation-no-unknown': annotationRules['annotation-no-unknown'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'annotation-no-unknown');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用未知注解的错误', async () => {
    const file = resolveFixture('core', 'annotation', 'annotation-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'annotation-no-unknown');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([5, 10, 15, 20]);

    expect(validateWarningMessages(ruleWarnings, ['annotation', 'unknown'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('annotation-no-unknown');
      expect(w.severity).toBe('error');
    });
  });
});
