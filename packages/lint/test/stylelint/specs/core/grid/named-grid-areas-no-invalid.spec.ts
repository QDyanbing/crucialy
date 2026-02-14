import core from '@/stylelint/core';
import gridRules from '@/stylelint/core/grid';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('named-grid-areas-no-invalid', () => {
  it('应该通过使用有效命名网格区域的代码', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: {
          'named-grid-areas-no-invalid': gridRules['named-grid-areas-no-invalid'],
        },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'named-grid-areas-no-invalid');

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用无效命名网格区域的错误', async () => {
    const file = resolveFixture('core', 'grid', 'named-grid-areas-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'named-grid-areas-no-invalid');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([6]);

    expect(validateWarningMessages(ruleWarnings, ['grid', 'area', 'invalid'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('named-grid-areas-no-invalid');
      expect(w.severity).toBe('error');
    });
  });
});
