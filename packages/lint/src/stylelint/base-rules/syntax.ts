/**
 * Syntax 相关规则
 *
 * 包含语法验证规则（1条）
 * - 禁止无效的语法字符串
 */

import type { Config } from 'stylelint';

export const syntaxRules: Config['rules'] = {
  /**
   * syntax-string-no-invalid
   * 禁止使用无效的语法字符串
   *
   * 说明：检查 CSS 语法字符串是否合法
   * - 主要检查 @supports 等 at-rule 中的条件语法
   * - 确保括号匹配、语法正确
   * - 无效的语法会导致规则失效
   *
   * 常见错误：
   * - 括号不匹配
   * - 属性名或值缺失
   * - 语法拼写错误
   *
   * ✅ 正确示例：@supports (display: grid) { }
   * ✅ 正确示例：@supports (display: flex) and (flex-wrap: wrap) { }
   * ✅ 正确示例：@supports not (display: grid) { }
   * ❌ 错误示例：@supports (display: grid { } (括号不匹配)
   * ❌ 错误示例：@supports (display) { } (缺少值)
   * ❌ 错误示例：@supports display: grid { } (缺少括号)
   */
  'syntax-string-no-invalid': true,
};

