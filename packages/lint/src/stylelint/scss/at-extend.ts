/**
 * SCSS @-extend 相关规则
 *
 * 包含 @extend 相关规则（1条）
 */

import type { Config } from 'stylelint';

const scssAtExtendRules: Config['rules'] = {
  /**
   * @name scss/at-extend-no-missing-placeholder
   * @description @extend 是否必须使用占位符
   * @value null - 不限制（Base 配置）
   * @value true - 必须使用占位符
   * @example ✅ 正确示例（null 时）：
   *  - \@extend .class;
   *  - \@extend %placeholder;
   * @example ❌ 错误示例（假设配置为 true）：
   *  - \@extend .class;                          (应使用 %placeholder)
   */
  'scss/at-extend-no-missing-placeholder': null,
};

export default scssAtExtendRules;
