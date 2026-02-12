import core from '@/stylelint/core';
import colorRules from '@/stylelint/core/color';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

describe('color-no-invalid-hex', () => {
  it('应该通过没有使用无效 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-no-invalid-hex.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'color-no-invalid-hex': colorRules['color-no-invalid-hex'] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'color-no-invalid-hex');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用无效 hex 颜色的错误', async () => {
    const file = resolveFixture('core', 'color', 'color-no-invalid-hex-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) {
      throw new Error('No result returned');
    }

    const ruleWarnings = getRuleWarnings(result, 'color-no-invalid-hex');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = getErrorLines(ruleWarnings);
    expect(errorLines).toEqual([4, 5]);

    // 检查错误信息包含相关关键词
    expect(validateWarningMessages(ruleWarnings, ['invalid', 'hex'])).toBe(true);
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('color-no-invalid-hex');
      expect(warning.severity).toBe('error');
    });
  });
});
