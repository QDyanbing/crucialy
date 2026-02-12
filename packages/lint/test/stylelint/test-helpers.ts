/**
 * 测试辅助函数
 * 提供通用的测试辅助方法
 */

import type { Result } from 'stylelint';
import { getErrorLines, getRuleWarnings, validateWarningMessages } from './stylelintTestUtils';

/**
 * 验证正向测试用例
 * @param result - Stylelint结果对象
 * @param ruleName - 规则名称
 * @param file - 文件路径
 * @param errored - 是否出错
 */
export function validatePositiveCase(
  result: Result,
  ruleName: string,
  file: string,
  errored: boolean,
) {
  const ruleWarnings = getRuleWarnings(result, ruleName);
  expect(ruleWarnings.length).toBe(0);
  expect(errored).toBe(false);
  expect(result.source).toBe(file);
}

/**
 * 验证负向测试用例
 * @param result - Stylelint结果对象
 * @param ruleName - 规则名称
 * @param file - 文件路径
 * @param errored - 是否出错
 * @param expectedLines - 期望的错误行号
 * @param keywords - 错误消息关键词
 */
export function validateNegativeCase(
  result: Result,
  ruleName: string,
  file: string,
  errored: boolean,
  expectedLines: number[],
  keywords: string[],
) {
  const ruleWarnings = getRuleWarnings(result, ruleName);
  expect(errored).toBe(true);
  expect(ruleWarnings.length).toBeGreaterThan(0);
  expect(result.source).toBe(file);

  const errorLines = getErrorLines(ruleWarnings);
  expect(errorLines).toEqual(expectedLines);

  expect(validateWarningMessages(ruleWarnings, keywords)).toBe(true);
  ruleWarnings.forEach(warning => {
    expect(warning.rule).toBe(ruleName);
    expect(warning.severity).toBe('error');
  });
}
