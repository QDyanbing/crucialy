/**
 * SCSS General / Sheet 相关规则
 *
 * 包含通用/样式表相关规则（6条）
 */

import type { Config } from 'stylelint';

const scssGeneralRules: Config['rules'] = {
  /**
   * @name scss/no-dollar-variables
   * @description 禁止使用 $变量
   * @value null - 允许使用（Base 配置）
   * @value true - 禁止使用 $变量
   * @example ✅ 正确示例（null 时）：
   *  - $var: value;
   * @example ❌ 错误示例（假设配置为 true）：
   *  - $var: value;                              (不应使用 $变量)
   */
  'scss/no-dollar-variables': null,

  /**
   * @name scss/no-duplicate-dollar-variables
   * @description 禁止重复的 $变量
   * @value true - 启用，禁止重复变量（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $var: value1;
   * @example ❌ 错误示例：
   *  - $var: value1;
   *    $var: value2;                             (重复定义变量)
   */
  'scss/no-duplicate-dollar-variables': true,

  /**
   * @name scss/no-duplicate-load-rules
   * @description 禁止重复的 @import/@use/@forward 规则
   * @value true - 启用，禁止重复加载规则（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@import 'variables';
   * @example ❌ 错误示例：
   *  - \@import 'variables';
   *    \@import 'variables';                     (重复导入)
   */
  'scss/no-duplicate-load-rules': true,

  /**
   * @name scss/no-duplicate-mixins
   * @description 禁止重复的 @mixin
   * @value true - 启用，禁止重复 mixin（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@mixin button() { }
   * @example ❌ 错误示例：
   *  - \@mixin button() { }
   *    \@mixin button() { }                      (重复定义 mixin)
   */
  'scss/no-duplicate-mixins': true,

  /**
   * @name scss/no-global-function-names
   * @description 禁止全局函数名
   * @value null - 不限制（Base 配置）
   * @value true - 禁止全局函数名
   * @example ✅ 正确示例（null 时）：
   *  - color: darken($base, 10%);
   * @example ❌ 错误示例（假设配置为 true）：
   *  - color: darken($base, 10%);                (应使用模块化的函数)
   */
  'scss/no-global-function-names': null,

  /**
   * @name scss/no-unused-private-members
   * @description 禁止未使用的私有成员（函数、mixin、变量或占位符选择器）
   * @value true - 启用，禁止未使用的私有成员（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $-private-var: value; // 被使用
   * @example ❌ 错误示例：
   *  - $-private-var: value; // 未被使用     (未使用的私有变量)
   */
  'scss/no-unused-private-members': true,
};

export default scssGeneralRules;
