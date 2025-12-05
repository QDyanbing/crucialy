/**
 * Block 相关规则
 * 
 * 包含代码块相关规则（2条）
 * - 禁止空块
 * - 禁止冗余嵌套
 */

import type { Config } from 'stylelint';

export const blockRules: Config['rules'] = {
  /**
   * block-no-empty
   * 禁止空的代码块
   *
   * 说明：空的代码块通常是由以下原因造成的：
   * - 代码遗留：删除了规则内容但忘记删除选择器
   * - 开发中：还未填写样式的占位符
   * - 错误：意外创建的无用代码
   *
   * 空块会增加 CSS 文件大小，且没有任何作用
   *
   * ✅ 正确示例：a { color: red; }
   * ✅ 正确示例：a { display: block; padding: 10px; }
   * ❌ 错误示例：a { }
   * ❌ 错误示例：.empty-class { }
   */
  'block-no-empty': true,
  
  /**
   * block-no-redundant-nested-style-rules
   * 禁止冗余的嵌套样式规则
   *
   * 说明：在 CSS 嵌套中，有时会出现不必要的 & 嵌套
   * - & 符号表示父选择器的引用
   * - 单独的 & { } 嵌套不会改变选择器，纯属多余
   *
   * 冗余嵌套会降低代码可读性，增加维护成本
   *
   * 常见场景：
   * - SCSS/Less 中误用嵌套语法
   * - 重构代码时遗留的结构
   *
   * ✅ 正确示例：
   * a {
   *   color: red;
   * }
   * 
   * ✅ 正确示例（有意义的嵌套）：
   * a {
   *   color: red;
   *   &:hover { color: blue; }
   * }
   * 
   * ❌ 错误示例：
   * a {
   *   & {
   *     color: red;
   *   }
   * }
   */
  'block-no-redundant-nested-style-rules': true,
  
};
