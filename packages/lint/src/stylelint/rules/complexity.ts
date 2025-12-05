/**
 * Complexity 复杂度规则
 * 
 * 包含代码复杂度限制规则（1条）
 * - 最大嵌套深度（Base 不限制，Strict 限制3层）
 */

import type { Config } from 'stylelint';

export const complexityRules: Config['rules'] = {
  /**
   * max-nesting-depth
   * 最大嵌套深度
   * null: 不限制
   * 例: 3 - 最多嵌套3层
   */
  'max-nesting-depth': null,
  
};
