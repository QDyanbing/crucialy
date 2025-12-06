/**
 * Syntax 相关规则
 *
 * 包含语法验证规则（1条）
 * - 禁止无效的语法字符串
 */

import type { Config } from 'stylelint';

export const syntaxRules: Config['rules'] = {
  /**
   * @name syntax-string-no-invalid
   * @description 禁止使用无效的语法字符串；检查 CSS 语法字符串是否合法，主要检查 \@supports 等 at-rule 中的条件语法，确保括号匹配和语法正确
   * @value true - 启用，禁止无效的语法字符串
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@supports (display: grid) { }
   *  - \@supports (display: flex) and (flex-wrap: wrap) { }
   *  - \@supports not (display: grid) { }
   * @example ❌ 错误示例：
   *  - \@supports (display: grid { }         (括号不匹配)
   *  - \@supports (display) { }              (缺少值)
   *  - \@supports display: grid { }          (缺少括号)
   */
  'syntax-string-no-invalid': [true],
};
