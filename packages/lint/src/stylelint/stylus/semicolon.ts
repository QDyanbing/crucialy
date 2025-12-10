/**
 * Stylus Semicolon 相关规则
 *
 * 包含分号相关规则（1条）
 * - 分号使用要求
 */

import type { Config } from 'stylelint';

const stylusSemicolonRules: Config['rules'] = {
  /**
   * @name stylus/semicolon
   * @description 指定分号的使用要求；统一代码风格，要求使用分号
   * @value 'always' - 要求使用分号
   * @value 'never' - 禁止使用分号
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - color: red  (缺少分号)
   */
  'stylus/semicolon': 'always',
};

export default stylusSemicolonRules;
