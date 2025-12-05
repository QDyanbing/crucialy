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
   * - Base：'number'（强制使用数字形式）
   *
   * 选择 'number' 的原因：
   * - 数字形式（0.5）在 CSS 中更常见且历史更悠久
   * - 与传统 `opacity` 属性习惯保持一致
   * - 更简洁直观，范围 0-1 易于理解
   *
   * ✅ 正确示例：
   * - 颜色函数：
   *   ✅ color: rgba(0, 0, 0, 0.5);
   *   ✅ color: hsla(120, 100%, 50%, 0.8);
   * - opacity 属性：
   *   ✅ opacity: 0.5;
   *   ✅ opacity: 1;
   *
   * ❌ 错误示例：
   *   ❌ color: rgba(0, 0, 0, 50%);     (应使用 0.5)
   *   ❌ opacity: 50%;                   (应使用 0.5)
   *   ❌ color: hsla(120, 100%, 50%, 80%); (应使用 0.8)
   */
  'alpha-value-notation': 'number',
};
