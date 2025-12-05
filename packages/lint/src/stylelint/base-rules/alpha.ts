/**
 * Alpha / Opacity 相关规则
 *
 * 包含透明度值表示法相关规则（1条）
 * - alpha 值在颜色函数和 opacity 属性中的表示法
 */

import type { Config } from 'stylelint';

export const alphaRules: Config['rules'] = {
  /**
   * alpha-value-notation
   * 指定透明度值（alpha）的表示法
   *
   * 说明：
   * 此规则同时作用于：
   * - 颜色函数中的 alpha 值（如 rgba() / hsla() 等）
   * - `opacity` 属性的值
   *
   * 支持两种表示方式：
   * - percentage：百分比形式（50%）
   * - number：数字形式（0.5）
   *
   * Base 配置：
   * - Base：null（不限制，允许两种方式并存）
   *
   * 如果项目希望统一使用百分比表示法，可以这样配置：
   * - ['percentage', { exceptProperties: ['opacity'] }]
   *   - 对颜色函数强制使用百分比
   *   - 对 `opacity` 属性保留数字写法（符合 CSS 直观习惯）
   *
   * ✅ 正确示例（Base 为 null 时，均允许）：
   * - 颜色函数：
   *   ✅ color: rgba(0, 0, 0, 50%);
   *   ✅ color: rgba(0, 0, 0, 0.5);
   * - opacity 属性：
   *   ✅ opacity: 0.5;
   *   ✅ opacity: 50%;
   *
   * ❌ 错误示例（当配置为 'percentage' 且未对 opacity 做例外时）：
   *   ❌ opacity: 0.5;   (要求写成 50%)
   *   ❌ color: rgba(0, 0, 0, 0.5); (要求写成 50%)
   */
  'alpha-value-notation': null,
};


