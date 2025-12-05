/**
 * Nesting 相关规则
 *
 * 包含 CSS 嵌套相关规则（1条）
 * - 嵌套选择器必须有作用域根
 */

import type { Config } from 'stylelint';

export const nestingRules: Config['rules'] = {
  /**
   * nesting-selector-no-missing-scoping-root
   * 禁止嵌套选择器缺少作用域根（& 符号）
   *
   * 说明：在 CSS 嵌套中，& 符号表示父选择器的引用
   * - 单独使用 & 开头的选择器必须在某个规则块内
   * - 不能在文件顶层直接使用 & 选择器
   * - 这会导致选择器无效或产生意外行为
   *
   * 适用场景：
   * - 原生 CSS 嵌套语法
   * - Sass/Less 等预处理器语法
   *
   * ✅ 正确示例：
   * .parent {
   *   & .child { }
   *   &:hover { }
   * }
   *
   * ❌ 错误示例（顶层使用 &）：
   * & .child { } (缺少父选择器上下文)
   *
   * ❌ 错误示例（&在文件顶层）：
   * &:hover { } (没有父选择器可引用)
   */
  'nesting-selector-no-missing-scoping-root': true,
};

