/**
 * Stylus Declaration 相关规则
 *
 * 包含声明相关规则（1条）
 * - 声明冒号格式
 */

import type { Config } from 'stylelint';

const stylusDeclarationRules: Config['rules'] = {
  /**
   * @name stylus/declaration-colon
   * @description 指定声明冒号的格式
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - color red;  (缺少冒号)
   */
  'stylus/declaration-colon': null,
};

export default stylusDeclarationRules;
