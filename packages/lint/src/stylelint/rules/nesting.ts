/**
 * Nesting rules
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
