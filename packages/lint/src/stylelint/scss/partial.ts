/**
 * SCSS Partial 相关规则
 *
 * 包含部分文件（_partial.scss）相关规则（1条）
 * - 部分文件中 @import 的使用限制
 */

import type { Config } from 'stylelint';

const scssPartialRules: Config['rules'] = {
  /**
   * @name scss/partial-no-import
   * @description 禁止在部分文件中使用 @import
   * @value null - 不限制（Base 配置）
   * @value true - 禁止在部分文件中使用 @import
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables';
   * @example ❌ 错误示例（假设配置为 true，文件为 _partial.scss）：
   *  - \@import 'variables';                     (部分文件不应使用 @import)
   */
  'scss/partial-no-import': null,
};

export default scssPartialRules;
