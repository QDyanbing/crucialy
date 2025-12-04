/**
 * Notation 表示法规则
 * 
 * 包含值表示法相关规则（2条）
 * - 色相角度表示法（angle/number）
 * - 亮度表示法（percentage）
 */

export const notationRules = {
  /**
   * hue-degree-notation
   * 色相角度表示法
   * angle: 使用deg单位 | number: 纯数字
   * ✅ hsl(180deg 50% 50%)
   * ❌ hsl(180 50% 50%)
   */
  'hue-degree-notation': 'angle',
  
  /**
   * lightness-notation
   * 亮度表示法
   * percentage: 百分比
   * ✅ hsl(180deg 50% 50%)
   * ❌ hsl(180deg 0.5 0.5)
   */
  'lightness-notation': 'percentage',
  
};
