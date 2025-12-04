/**
 * Value 相关规则
 * 
 * 包含值格式相关规则（2条）
 * - 值关键字大小写
 * - vendor prefix
 */

export const valueRules = {
  /**
   * value-keyword-case
   * 值关键字使用小写
   * ✅ display: block;
   * ❌ display: BLOCK;
   * camelCaseSvgKeywords: true - SVG 关键字保持驼峰（如 viewBox）
   */
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
  
  /**
   * value-no-vendor-prefix
   * 禁止值使用 vendor prefix（应该用 autoprefixer）
   * ✅ display: flex;
   * ❌ display: -webkit-box;
   * ignoreValues: ['box', 'inline-box'] - 某些值例外
   */
  'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
  
};
