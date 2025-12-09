/**
 * SCSS @-rule 相关规则
 *
 * 包含通用 @规则相关规则（3条）
 * - 条件 @规则括号使用规范
 * - 未知 @规则检查
 * - 冗余 @root 检查
 */

import type { Config } from 'stylelint';

const scssAtRuleRules: Config['rules'] = {
  /**
   * @name scss/at-rule-conditional-no-parentheses
   * @description 禁止条件 @规则使用括号
   * @value true - 启用，禁止括号（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@if $condition { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { }                    (不应使用括号)
   */
  'scss/at-rule-conditional-no-parentheses': true,

  /**
   * @name scss/at-rule-no-unknown
   * @description 禁止未知的 SCSS @规则；用于检查 SCSS 特有的 @规则是否存在
   * @value true - 启用，禁止未知 @规则（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@if ($condition) { }
   *  - \@mixin name() { }
   *  - \@function name() { }
   * @example ❌ 错误示例：
   *  - \@unknown-rule { }                       (不存在的 SCSS @规则)
   */
  'scss/at-rule-no-unknown': true,

  /**
   * @name scss/at-root-no-redundant
   * @description 禁止冗余的 @root
   * @value true - 启用，禁止冗余 @root（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .class {
   *      \@root & { }
   *    }
   * @example ❌ 错误示例：
   *  - \@root .class { }                        (根级别的 @root 是冗余的)
   */
  'scss/at-root-no-redundant': true,
};

export default scssAtRuleRules;
