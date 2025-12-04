/**
 * Custom-property rules
 */

export const custompropertyRules = {
  /**
   * custom-property-pattern
   * 自定义属性命名模式（正则）
   * null: 不限制命名
   * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
   * ✅ --my-color: red; (null 时允许)
   */
  'custom-property-pattern': null,
  
  /**
   * custom-property-empty-line-before
   * 自定义属性前是否需要空行
   * null: 不限制
   */
  'custom-property-empty-line-before': null,
  
  /**
   * custom-property-no-missing-var-function
   * 禁止直接使用自定义属性（需用 var() 包裹）
   * ✅ color: var(--my-color);
   * ❌ color: --my-color;
   */
  'custom-property-no-missing-var-function': true,
  
};
