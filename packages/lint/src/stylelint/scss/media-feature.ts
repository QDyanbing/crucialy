/**
 * SCSS Media feature 相关规则
 *
 * 包含媒体查询特性相关规则（1条）
 * - Media feature 值使用 $变量的规范
 */

import type { Config } from 'stylelint';

const scssMediaFeatureRules: Config['rules'] = {
  /**
   * @name scss/media-feature-value-dollar-variable
   * @description Media feature 值是否使用 $变量
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用 $变量
   * @value 'never' - 不使用 $变量
   * @example ✅ 正确示例（null 时）：
   *  - \@media (min-width: 768px) { }
   *  - \@media (min-width: $breakpoint) { }
   * @example ❌ 错误示例（假设配置为 always）：
   *  - \@media (min-width: 768px) { }            (应使用 $变量)
   */
  'scss/media-feature-value-dollar-variable': null,
};

export default scssMediaFeatureRules;
