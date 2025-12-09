/**
 * SCSS @-function 相关规则
 *
 * 包含 @function 指令相关规则（3条）
 * - @function 声明格式规范（括号、空格）
 * - @function 命名规范（kebab-case）
 * - @function 调用参数格式规范（命名参数）
 */

import type { Config } from 'stylelint';

const scssAtFunctionRules: Config['rules'] = {
  /**
   * @name scss/at-function-named-arguments
   * @description @function 调用是否使用命名参数
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用命名参数
   * @value 'never' - 不使用命名参数
   * @example ✅ 正确示例（null 时）：
   *  - fn($arg1, $arg2);
   *  - fn($arg1: value, $arg2: value);
   * @example ❌ 错误示例（假设配置为 always）：
   *  - fn($arg1, $arg2);                        (应使用命名参数)
   */
  'scss/at-function-named-arguments': null,

  /**
   * @name scss/at-function-parentheses-space-before
   * @description @function 括号前是否有空格
   * @value 'never' - 不能有空格（Base 配置）
   * @value 'always' - 必须有空格
   * @example ✅ 正确示例：
   *  - \@function fn() { }
   * @example ❌ 错误示例：
   *  - \@function fn () { }                     (括号前不应有空格)
   */
  'scss/at-function-parentheses-space-before': 'never',

  /**
   * @name scss/at-function-pattern
   * @description @function 命名模式；强制使用 kebab-case
   * @value regex - 正则表达式字符串（Base 配置为 kebab-case）
   * @example ✅ 正确示例：
   *  - \@function get-color() { }
   *  - \@function calculate-width() { }
   * @example ❌ 错误示例：
   *  - \@function getColor() { }                (应为 kebab-case)
   *  - \@function GetColor() { }                (应为小写)
   */
  'scss/at-function-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
};

export default scssAtFunctionRules;
