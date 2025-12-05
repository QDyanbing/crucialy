/**
 * Property 相关规则
 * 
 * 包含 CSS 属性相关规则（5条）
 * - 禁止未知/已弃用属性
 * - vendor prefix
 * - 属性白名单/黑名单
 */

import type { Config } from 'stylelint';

export const propertyRules: Config['rules'] = {
  /**
   * property-no-unknown
   * 禁止未知属性
   * ✅ display: flex;
   * ❌ unknown-prop: value;
   */
  'property-no-unknown': true,
  
  /**
   * property-no-deprecated
   * 禁止已弃用的属性
   * ✅ overflow: hidden;
   * ❌ overflow-x: -moz-hidden-unscrollable; (已弃用)
   */
  'property-no-deprecated': true,
  
  /**
   * property-no-vendor-prefix
   * 禁止属性使用 vendor prefix（应该用 autoprefixer）
   * ✅ transform: scale(1);
   * ❌ -webkit-transform: scale(1);
   */
  'property-no-vendor-prefix': true,
  
  /**
   * property-allowed-list
   * 属性白名单
   * null: 允许所有属性
   * 例: ['display', 'color'] - 只允许这些属性
   */
  'property-allowed-list': null,
  
  /**
   * property-disallowed-list
   * 属性黑名单
   * null: 不禁止任何属性
   * 例: ['float'] - 禁止 float 属性
   */
  'property-disallowed-list': null,
  
};
