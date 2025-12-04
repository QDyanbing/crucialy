/**
 * Nesting 相关规则
 * 
 * 包含 CSS 嵌套相关规则（1条）
 * - 嵌套选择器禁止缺少作用域根（& 符号）
 */

export const nestingRules = {
  /**
   * nesting-selector-no-missing-scoping-root
   * 嵌套选择器禁止缺少作用域根
   * ✅ a { & b {} }
   * ❌ & b {} (缺少父选择器)
   */
  'nesting-selector-no-missing-scoping-root': true,
  
};
