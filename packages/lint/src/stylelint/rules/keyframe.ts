/**
 * Keyframe 相关规则
 * 
 * 包含 @keyframes 动画相关规则（4条）
 * - keyframe 选择器表示法（百分比/关键字）
 * - 禁止重复选择器
 * - 禁止 !important
 * - keyframes 命名模式
 */

export const keyframeRules = {
  /**
   * keyframe-selector-notation
   * keyframe 选择器表示法
   * percentage: 0%, 100% | keyword: from, to
   * percentage-unless-within-keyword-only-block: 除非只有关键字，否则用百分比
   * ✅ @keyframes { 0% {} 100% {} }
   * ✅ @keyframes { from {} to {} }
   */
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
  
  /**
   * keyframe-block-no-duplicate-selectors
   * keyframe 块中禁止重复选择器
   * ✅ @keyframes { 0% {} 100% {} }
   * ❌ @keyframes { 0% {} 0% {} }
   */
  'keyframe-block-no-duplicate-selectors': true,
  
  /**
   * keyframe-declaration-no-important
   * keyframe 声明禁止 !important
   * ✅ @keyframes { 0% { color: red; } }
   * ❌ @keyframes { 0% { color: red !important; } }
   */
  'keyframe-declaration-no-important': true,
  
  /**
   * keyframes-name-pattern
   * keyframes 名称模式（正则）
   * null: 不限制
   * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
   */
  'keyframes-name-pattern': null,
  
};
