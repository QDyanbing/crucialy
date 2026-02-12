import core from '@/stylelint/core';
import alphaRules from '@/stylelint/core/alpha';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('alpha-value-notation', () => {
  it('应该通过使用数字形式的 alpha 值', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'alpha-value-notation': alphaRules['alpha-value-notation'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'alpha-value-notation');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用百分比形式的 alpha 值错误', async () => {
    const file = resolveFixture('core', 'alpha', 'alpha-value-notation-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'alpha-value-notation');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([5, 9, 13, 17]);

    // 检查错误信息包含相关关键词
    expect(validateWarningMessages(ruleWarnings, ['alpha', 'percentage', 'number'])).toBe(true);
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('alpha-value-notation');
      expect(warning.severity).toBe('error');
    });
  });
});
