import importRules from '@/stylelint/core/import';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('import-notation', () => {
  it('应该通过使用字符串形式 @import 的代码', async () => {
    const file = resolveFixture('core', 'import', 'import-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'import-notation': importRules['import-notation'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, 'import-notation');

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
    const ruleWarnings = getRuleWarnings(result, 'import-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([3, 5]);

    expect(validateWarningMessages(ruleWarnings, ['import', 'notation'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe('import-notation');
      expect(w.severity).toBe('error');
    });
  });
});
