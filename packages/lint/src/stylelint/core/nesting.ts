/**
 * Nesting 相关规则
 * @module @crucialy/lint/stylelint/core/nesting
 *
 * 包含 CSS 嵌套相关规则（2条）
 * - 嵌套选择器必须有作用域根：确保嵌套正确
 * - 嵌套选择器必须以 & 开头：统一嵌套风格
 */

import type { Config } from 'stylelint';

const nestingRules: Config['rules'] = {
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

  /**
   * @name selector-nested-pattern
   * @description 嵌套选择器模式；Strict 模式强制嵌套选择器必须以 & 开头，确保明确的父子关系
   * @value regex - 正则表达式字符串（Strict 配置为 '^&'，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .parent {
   *      & .child { color: red; }
   *      &:hover { color: blue; }
   *      &::before { content: ''; }
   *    }
   * @example ❌ 错误示例：
   *  - .parent {
   *      .child { color: red; }               (缺少 &，应为 & .child)
   *      :hover { color: blue; }              (缺少 &，应为 &:hover)
   *    }
   */
  'selector-nested-pattern': '^&',
};

export default nestingRules;
