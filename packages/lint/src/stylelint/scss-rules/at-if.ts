/**
 * SCSS @-if 相关规则
 *
 * 包含 @if 相关规则（3条）
 */

import type { Config } from 'stylelint';

export const scssAtIfRules: Config['rules'] = {
  /**
   * @name scss/at-if-closing-brace-newline-after
   * @description @if 右大括号后是否换行
   * @value 'always-last-in-chain' - 链的最后一个总是换行（Base 配置）
   * @value 'always-intermediate' - 中间的总是换行
   * @example ✅ 正确示例：
   *  - \@if ($condition) { }
   *    \@else { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { } \@else { }         (缺少换行)
   */
  'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

  /**
   * @name scss/at-if-closing-brace-space-after
   * @description @if 右大括号后是否有空格
   * @value 'always-intermediate' - 中间的有空格（Base 配置）
   * @value 'always-last-in-chain' - 最后一个有空格
   * @example ✅ 正确示例：
   *  - \@if ($condition) { } \@else if ($condition) { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { }\@else if ($condition) { }    (缺少空格)
   */
  'scss/at-if-closing-brace-space-after': 'always-intermediate',

  /**
   * @name scss/at-if-no-null
   * @description 禁止 @if 条件使用 null
   * @value true - 启用，禁止使用 null（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@if ($var) { }
   *  - \@if ($var == false) { }
   * @example ❌ 错误示例：
   *  - \@if ($var == null) { }                  (不应使用 null 比较)
   */
  'scss/at-if-no-null': true,
};

