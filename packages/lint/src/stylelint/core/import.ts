/**
 * Import 相关规则
 *
 * 包含 @import 相关规则（1条）
 * - import 表示法（string/url）
 */

import type { Config } from 'stylelint';

export const importRules: Config['rules'] = {
  /**
   * @name import-notation
   * @description 指定 \@import 的表示法；Base 配置不限制，允许团队自行选择
   * @value null - 不限制，允许两种形式
   * @value 'string' - 强制使用字符串形式（更简洁）
   * @value 'url' - 强制使用 url() 形式（更明确）
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'styles.css';
   *  - \@import url('styles.css');
   * @example ❌ 错误示例（假设配置为 'string'）：
   *  - \@import url('styles.css');            (应使用字符串形式)
   */
  'import-notation': null,
};
