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
   * import 表示法
   * null: 不限制 | string: 使用字符串 | url: 使用 url()
   */
  'import-notation': null,
  
};
