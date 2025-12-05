/**
 * General 通用规则
 * 
 * 包含通用验证和检查规则（10条）
 * - 空源文件
 * - 注释格式
 * - 空白字符
 * - 特异性检查
 * - 重复检查
 * - 未知定义检查（动画、自定义属性等）
 */

import type { Config } from 'stylelint';

export const generalRules: Config['rules'] = {
  /**
   * no-empty-source
   * 禁止空源文件
   * null: 允许空文件
   */
  'no-empty-source': null,
  
  /**
   * no-invalid-double-slash-comments
   * 禁止无效的双斜杠注释（CSS 中应该用 /* *\/）
   * ✅ /* comment *\/
   * ❌ // comment (CSS 中无效)
   */
  'no-invalid-double-slash-comments': true,
  
  /**
   * no-irregular-whitespace
   * 禁止不规则的空白字符
   * ✅ a { color: red; }
   * ❌ a { color:​red; } (包含零宽字符)
   */
  'no-irregular-whitespace': true,
  
  /**
   * no-descending-specificity
   * 禁止低特异性选择器覆盖高特异性选择器
   * null: 不检查
   * ✅ #id {} .class {} (null 时允许)
   * ❌ .class {} #id {} #id .class {} (后者特异性降低)
   */
  'no-descending-specificity': null,
  
  /**
   * no-duplicate-at-import-rules
   * 禁止重复的 @import
   * ✅ @import 'a.css';
   * ❌ @import 'a.css'; @import 'a.css';
   */
  'no-duplicate-at-import-rules': true,
  
  /**
   * no-duplicate-selectors
   * 禁止重复的选择器
   * ✅ a {} b {}
   * ❌ a {} a {}
   */
  'no-duplicate-selectors': true,
  
  /**
   * no-unknown-animations
   * 禁止未知的动画名称
   * ✅ @keyframes slide {} a { animation: slide; }
   * ❌ a { animation: unknown; }
   */
  'no-unknown-animations': true,
  
  /**
   * no-unknown-custom-media
   * 禁止未知的自定义 media
   * ✅ @custom-media --sm (width < 768px); @media (--sm) {}
   * ❌ @media (--unknown) {}
   */
  'no-unknown-custom-media': true,
  
  /**
   * no-unknown-custom-properties
   * 禁止未知的自定义属性
   * null: 不检查（因为可能来自其他文件）
   */
  'no-unknown-custom-properties': null,
  
  /**
   * no-invalid-position-at-import-rule
   * @import 必须在最前面
   * ✅ @import ''; a {}
   * ❌ a {} @import '';
   */
  'no-invalid-position-at-import-rule': true,
  
  /**
   * no-invalid-position-declaration
   * 声明位置必须正确（不能在某些 @规则里）
   * ✅ a { color: red; }
   * ❌ @import { color: red; }
   */
  'no-invalid-position-declaration': true,
  
};
