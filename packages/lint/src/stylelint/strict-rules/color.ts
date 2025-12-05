/**
 * Strict 颜色相关规则
 *
 * 覆盖 Base 配置中的颜色规则（1条）
 * - 颜色函数表示法
 */

import type { Config } from 'stylelint';

export const colorRules: Config['rules'] = {
  /**
   * color-function-notation
   * 禁用（因为 Strict 只允许 hex 颜色）
   *
   * 说明：Strict 模式通过 function-disallowed-list 禁止所有颜色函数
   * 只允许使用 hex 颜色（#fff、#ffffff80）
   * 所以这个规则设为 null，不需要检查颜色函数的表示法
   *
   * Base 配置：null（允许所有颜色函数语法）
   * Strict 配置：null（因为根本不允许颜色函数）
   */
  'color-function-notation': null,
};

