/**
 * SCSS @-mixin 相关规则
 *
 * 包含 @mixin 相关规则（5条）
 */

import type { Config } from 'stylelint';

const scssAtMixinRules: Config['rules'] = {
  /**
   * @name scss/at-mixin-argumentless-call-parentheses
   * @description 无参数 @mixin 调用是否使用括号
   * @value 'always' - 总是使用括号（Base 配置）
   * @value 'never' - 不使用括号
   * @example ✅ 正确示例：
   *  - \@include mixin();
   * @example ❌ 错误示例：
   *  - \@include mixin;                         (应使用括号)
   */
  'scss/at-mixin-argumentless-call-parentheses': 'always',

  /**
   * @name scss/at-mixin-named-arguments
   * @description @mixin 调用是否使用命名参数
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用命名参数
   * @value 'never' - 不使用命名参数
   * @example ✅ 正确示例（null 时）：
   *  - \@include mixin($arg1, $arg2);
   *  - \@include mixin($arg1: value, $arg2: value);
   * @example ❌ 错误示例（假设配置为 always）：
   *  - \@include mixin($arg1, $arg2);           (应使用命名参数)
   */
  'scss/at-mixin-named-arguments': null,

  /**
   * @name scss/at-mixin-parentheses-space-before
   * @description @mixin 括号前是否有空格
   * @value 'never' - 不能有空格（Base 配置）
   * @value 'always' - 必须有空格
   * @example ✅ 正确示例：
   *  - \@mixin mixin() { }
   * @example ❌ 错误示例：
   *  - \@mixin mixin () { }                     (括号前不应有空格)
   */
  'scss/at-mixin-parentheses-space-before': 'never',

  /**
   * @name scss/at-mixin-no-risky-nesting-selector
   * @description 禁止 mixin 中使用有风险的嵌套选择器
   * @value true - 启用，禁止有风险的嵌套选择器（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@mixin button() {
   *      &__element { }
   *    }
   * @example ❌ 错误示例：
   *  - \@mixin button() {
   *      & + & { }                               (有风险的嵌套选择器)
   *    }
   */
  'scss/at-mixin-no-risky-nesting-selector': true,

  /**
   * @name scss/at-mixin-pattern
   * @description @mixin 命名模式；强制使用 kebab-case
   * @value regex - 正则表达式字符串（Base 配置为 kebab-case）
   * @example ✅ 正确示例：
   *  - \@mixin button-style() { }
   *  - \@mixin responsive-grid() { }
   * @example ❌ 错误示例：
   *  - \@mixin buttonStyle() { }                (应为 kebab-case)
   *  - \@mixin ButtonStyle() { }                (应为小写)
   */
  'scss/at-mixin-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
};

export default scssAtMixinRules;
