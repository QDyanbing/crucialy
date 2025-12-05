/**
 * Strict Stylistic 格式化规则
 *
 * 覆盖格式化规则（4条）
 */

import type { Config } from 'stylelint';

export const stylisticRules: Config['rules'] = {
  /**
   * @stylistic/selector-max-empty-lines
   * 选择器中禁止空行
   */
  '@stylistic/selector-max-empty-lines': 0,

  /**
   * @stylistic/value-list-max-empty-lines
   * 值列表中禁止空行
   */
  '@stylistic/value-list-max-empty-lines': 0,

  /**
   * @stylistic/function-max-empty-lines
   * 函数中禁止空行
   */
  '@stylistic/function-max-empty-lines': 0,

  /**
   * @stylistic/max-line-length
   * 限制行长度 120 字符
   */
  '@stylistic/max-line-length': 120,
};

