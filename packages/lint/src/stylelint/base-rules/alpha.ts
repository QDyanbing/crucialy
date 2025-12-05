/**
 * Alpha / Opacity 相关规则
 *
 * 包含透明度值表示法相关规则（1条）
 * - alpha 值在颜色函数和 opacity 属性中的表示法
 */

import type { Config } from 'stylelint';

export const alphaRules: Config['rules'] = {
  /**
   * @name alpha-value-notation
   * @description 指定透明度值的表示法；
   * @value 'null' - 不限制，允许两种方式并存；
   * @value 'number' - 数字形式（0.5）
   * @value 'percentage' - 百分比形式（50%）
   * @example ✅ 正确（使用数字形式）：
   *  - color: rgba(0, 0, 0, 0.5);
   *  - color: hsla(120, 100%, 50%, 0.8);
   *  - opacity: 0.5;
   *  - opacity: 1;
   * @example ❌ 错误（使用百分比形式）：
   *  - color: rgba(0, 0, 0, 50%);     (应使用 0.5)
   *  - opacity: 50%;                   (应使用 0.5)
   *  - color: hsla(120, 100%, 50%, 80%); (应使用 0.8)
   */
  'alpha-value-notation': ['number'],
};
