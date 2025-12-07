/**
 * Strict Stylistic 格式化规则
 *
 * 覆盖格式化规则（4条）
 * - 禁止选择器、值列表、函数中的空行
 * - 限制行长度为 120 字符
 */

import type { Config } from 'stylelint';

export const stylisticRules: Config['rules'] = {
  /**
   * @name @stylistic/selector-max-empty-lines
   * @description 限制选择器中最多连续空行数；Strict 模式禁止选择器中的空行，保持选择器紧凑
   * @value number - 最大空行数（Strict 配置为 0，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - a.b {}
   *  - .class:hover {}
   * @example ❌ 错误示例：
   *  - a
   *
   *    .b {}                                  (选择器中不应有空行)
   */
  '@stylistic/selector-max-empty-lines': 0,

  /**
   * @name @stylistic/value-list-max-empty-lines
   * @description 限制值列表中最多连续空行数；Strict 模式禁止值列表中的空行，保持值列表紧凑
   * @value number - 最大空行数（Strict 配置为 0，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - margin: 10px, 20px;
   *  - font-family: Arial, sans-serif;
   * @example ❌ 错误示例：
   *  - margin: 10px,
   *
   *    20px;                                  (值列表中不应有空行)
   */
  '@stylistic/value-list-max-empty-lines': 0,

  /**
   * @name @stylistic/function-max-empty-lines
   * @description 限制函数中最多连续空行数；Strict 模式禁止函数中的空行，保持函数参数紧凑
   * @value number - 最大空行数（Strict 配置为 0，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - rgb(0, 0, 0)
   *  - calc(100% - 20px)
   * @example ❌ 错误示例：
   *  - rgb(0,
   *
   *    0, 0)                                  (函数中不应有空行)
   */
  '@stylistic/function-max-empty-lines': 0,

  /**
   * @name @stylistic/max-line-length
   * @description 限制最大行长度；Strict 模式限制行长度为 120 字符，提高代码可读性
   * @value number - 最大字符数（Strict 配置为 120，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red; background: blue; border: 1px solid black; padding: 10px 20px 30px 40px; } (超过 120 字符)
   */
  '@stylistic/max-line-length': 120,
};
