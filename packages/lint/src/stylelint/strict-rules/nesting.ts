/**
 * Strict 嵌套相关规则
 *
 * 覆盖嵌套相关规则（1条）
 * - 嵌套选择器必须以 & 开头
 */

import type { Config } from 'stylelint';

export const nestingRules: Config['rules'] = {
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
   *      .child { color: red; }                (缺少 &，应为 & .child)
   *      :hover { color: blue; }               (缺少 &，应为 &:hover)
   *    }
   */
  'selector-nested-pattern': '^&',
};
