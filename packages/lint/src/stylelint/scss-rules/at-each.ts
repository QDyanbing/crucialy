/**
 * SCSS @-each 相关规则
 *
 * 包含 @each 相关规则（1条）
 */

import type { Config } from 'stylelint';

export const scssAtEachRules: Config['rules'] = {
  /**
   * @name scss/at-each-key-value-single-line
   * @description 要求 @each 的键值对在同一行
   * @value true - 启用，要求单行（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@each $key, $value in $map { }
   * @example ❌ 错误示例：
   *  - \@each $key,
   *      $value in $map { }                      (键值对应在同一行)
   */
  'scss/at-each-key-value-single-line': true,
};
