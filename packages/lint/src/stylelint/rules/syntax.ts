/**
 * Syntax rules
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
