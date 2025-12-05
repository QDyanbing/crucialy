/**
 * Annotation 相关规则
 *
 * 包含注解相关规则（1条）
 * - 禁止未知注解（如 Sass 的 !default）
 */

import type { Config } from 'stylelint';

export const annotationRules: Config['rules'] = {
  /**
   * annotation-no-unknown
   * 禁止使用 Stylelint 无法识别的注解关键字
   *
   * 说明：CSS 中 annotation 指的是声明后面的 ! 关键字
   * - 标准 CSS：!important（已知）
   * - Sass/SCSS：!default, !global, !optional（在纯 CSS 中是未知的）
   *
   * 如果你使用 Sass，需要在 ignoreAnnotations 中配置允许的注解
   *
   * ✅ 正确示例：color: red !important; (标准 CSS，Stylelint 认识)
   * ❌ 错误示例：color: red !unknown; (不存在的注解)
   * ❌ 错误示例：在纯 CSS 项目中使用 Sass 的 !default 等注解
   */
  'annotation-no-unknown': true,
};
