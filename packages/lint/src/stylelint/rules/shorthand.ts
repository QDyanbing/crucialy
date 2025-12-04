/**
 * Shorthand Property 相关规则
 * 
 * 包含简写属性相关规则（1条）
 * - 禁止简写属性的冗余值（如 margin: 10px 20px 10px 20px）
 */

export const shorthandRules = {
  /**
   * shorthand-property-no-redundant-values
   * 禁止简写属性的冗余值
   * ✅ margin: 10px 20px;
   * ❌ margin: 10px 20px 10px 20px;
   */
  'shorthand-property-no-redundant-values': true,
  
};
