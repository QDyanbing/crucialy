/**
 * Nesting 相关规则
 *
 * 包含 CSS 嵌套相关规则（1条）
 * - 嵌套选择器必须有作用域根
 */

import type { Config } from 'stylelint';

export const nestingRules: Config['rules'] = {
  /**
   * @name nesting-selector-no-missing-scoping-root
   * @description 禁止嵌套选择器缺少作用域根（& 符号）；& 选择器必须在某个规则块内，不能在文件顶层直接使用
   * @value true - 启用，禁止缺少作用域根
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .parent {
   *      & .child { }
   *      &:hover { }
   *    }
   * @example ❌ 错误示例：
   *  - & .child { }                           (缺少父选择器上下文)
   *  - &:hover { }                            (没有父选择器可引用)
   */
  'nesting-selector-no-missing-scoping-root': true,
};
