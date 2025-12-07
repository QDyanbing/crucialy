/**
 * Strict 声明相关规则
 *
 * 覆盖声明相关规则（1条）
 * - 禁止使用 !important
 */

import type { Config } from 'stylelint';

export const declarationRules: Config['rules'] = {
  /**
   * @name declaration-no-important
   * @description 禁止使用 !important；Strict 模式禁止使用，!important 会破坏 CSS 的层叠规则，使样式难以覆盖和维护
   * @value true - 禁止使用 !important（Strict 配置，覆盖 Base 的 null）
   * @value false - 允许使用
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red !important; }           (应通过提高选择器特异性来解决)
   */
  'declaration-no-important': true,
};
