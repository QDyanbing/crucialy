/**
 * Annotation 相关规则
 *
 * 包含注解相关规则（1条）
 * - 禁止未知注解（如 Sass 的 !default）
 */

import type { Config } from 'stylelint';

export const annotationRules: Config['rules'] = {
  /**
   * @name annotation-no-unknown
   * @description 禁止使用 Stylelint 无法识别的注解关键字；CSS 中 annotation 指的是声明后面的 ! 关键字（如 !important）；如果使用 Sass，需要在 ignoreAnnotations 中配置允许的注解
   * @value true - 启用，禁止未知注解
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: red !important; (标准 CSS)
   * @example ❌ 错误示例：
   *  - color: red !unknown;              (不存在的注解)
   *  - color: red !default;              (Sass 注解，需在 ignoreAnnotations 中配置)
   *  - $variable: value !global;         (Sass 注解，需在 ignoreAnnotations 中配置)
   */
  'annotation-no-unknown': true,
};
