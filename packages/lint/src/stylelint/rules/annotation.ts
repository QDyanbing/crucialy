/**
 * Annotation rules
 */

export const annotationRules = {
  /**
   * annotation-no-unknown
   * 禁止未知的注解（如 Sass 的 !default）
   * ✅ $var: value !default;
   * ❌ $var: value !unknown;
   */
  'annotation-no-unknown': true,
  
};
