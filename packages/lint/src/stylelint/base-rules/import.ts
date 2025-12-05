/**
 * Import 相关规则
 *
 * 包含 @import 相关规则（1条）
 * - import 表示法（string/url）
 */

import type { Config } from 'stylelint';

export const importRules: Config['rules'] = {
  /**
   * import-notation
   * 指定 @import 的表示法
   *
   * 说明：@import 可以使用两种语法：
   * - string：字符串形式 @import 'styles.css';
   * - url：URL 函数形式 @import url('styles.css');
   *
   * 两种写法功能相同，选项：
   * - null：不限制，允许两种形式
   * - 'string'：强制使用字符串形式（更简洁）
   * - 'url'：强制使用 url() 形式（更明确）
   *
   * Base 配置不限制（null），允许团队自行选择
   *
   * ✅ 正确示例（null 时）：@import 'styles.css';
   * ✅ 正确示例（null 时）：@import url('styles.css');
   * ❌ 错误示例（'string' 时）：@import url('styles.css');
   * ❌ 错误示例（'url' 时）：@import 'styles.css';
   */
  'import-notation': null,
};

