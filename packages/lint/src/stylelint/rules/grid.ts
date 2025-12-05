/**
 * Grid 相关规则
 * 
 * 包含 CSS Grid 相关规则（1条）
 * - 禁止无效的命名网格区域
 */

import type { Config } from 'stylelint';

export const gridRules: Config['rules'] = {
  /**
   * named-grid-areas-no-invalid
   * 禁止无效的命名网格区域
   * ✅ grid-template-areas: 'a a' 'b b';
   * ❌ grid-template-areas: 'a a' 'b';
   */
  'named-grid-areas-no-invalid': true,
  
};
