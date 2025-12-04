/**
 * Syntax 相关规则
 * 
 * 包含语法验证规则（1条）
 * - 禁止无效的语法字符串（如 @supports 中的语法错误）
 */

export const syntaxRules = {
  /**
   * syntax-string-no-invalid
   * 禁止无效的语法字符串
   * ✅ @supports (display: grid) {}
   * ❌ @supports (display: grid {}
   */
  'syntax-string-no-invalid': true,
  
};
