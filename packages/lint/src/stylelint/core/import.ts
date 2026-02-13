/**
 * Import 相关规则
 *
 * 包含 @import 相关规则（1条）
 * - import 表示法：统一使用 string 或 url 格式
 */

import type { Config } from 'stylelint';

const importRules: Config['rules'] = {
  /**
   * @name import-notation
   * @description 指定 @import 的表示法；Strict 模式统一使用字符串形式，更简洁
   * @value 'string' - 强制使用字符串形式（Strict 配置，覆盖 Base 的 null）
   * @value 'url' - 强制使用 url() 形式
   * @example ✅ 正确示例：
   *  - @import 'styles.css';
   *  - @import 'reset.css';
   * @example ❌ 错误示例：
   *  - @import url('styles.css');            (应使用字符串形式)
   */
  'import-notation': 'string',
};

export default importRules;
