/**
 * Strict 函数相关规则
 *
 * 覆盖函数相关规则（1条）
 * - 禁止使用颜色函数，只允许 hex 表示颜色
 */

import type { Config } from 'stylelint';

export const functionRules: Config['rules'] = {
  /**
   * @name function-disallowed-list
   * @description 指定禁止使用的函数黑名单；Strict 模式禁止使用颜色函数（rgb, rgba, hsl, hsla），只允许使用 hex 表示颜色
   * @value array - 字符串数组，禁止列表中的函数（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - color: #ff0000;
   *  - color: #000;
   *  - background: var(--primary-color);
   * @example ❌ 错误示例：
   *  - color: rgb(255, 0, 0);                 (rgb 在黑名单中，应使用 #ff0000)
   *  - color: rgba(0, 0, 0, 0.5);            (rgba 在黑名单中，应使用 hex + opacity)
   *  - color: hsl(0, 100%, 50%);             (hsl 在黑名单中)
   */
  'function-disallowed-list': [['rgb', 'rgba', 'hsl', 'hsla']],
};
