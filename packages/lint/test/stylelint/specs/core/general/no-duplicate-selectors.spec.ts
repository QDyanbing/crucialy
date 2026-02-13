import core from '@/stylelint/core';
import generalRules from '@/stylelint/core/general';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('no-duplicate-selectors', () => {
  it('应该通过没有重复选择器的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-duplicate-selectors.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'no-duplicate-selectors': generalRules['no-duplicate-selectors'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'no-duplicate-selectors');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告重复选择器的错误', async () => {
    const file = resolveFixture('core', 'general', 'no-duplicate-selectors-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'no-duplicate-selectors');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([11]);

    // 检查错误信息包含相关关键词
    expect(validateWarningMessages(ruleWarnings, ['duplicate', 'selector'])).toBe(true);
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('no-duplicate-selectors');
      expect(warning.severity).toBe('error');
    });
  });
});
