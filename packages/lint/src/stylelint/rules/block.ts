/**
 * Block 相关规则
 * 
 * 包含代码块相关规则（2条）
 * - 禁止空块
 * - 禁止冗余嵌套
 */

import type { Config } from 'stylelint';

export const blockRules: Config['rules'] = {
  /**
   * block-no-empty
   * 禁止空块
   * ✅ a { color: red; }
   * ❌ a { }
   */
  'block-no-empty': true,
  
  /**
   * block-no-redundant-nested-style-rules
   * 禁止冗余的嵌套样式规则
   * ✅ a { color: red; }
   * ❌ a { & { color: red; } } (多余的嵌套)
   */
  'block-no-redundant-nested-style-rules': true,
  
};
