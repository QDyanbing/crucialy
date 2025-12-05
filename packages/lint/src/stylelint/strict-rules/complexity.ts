/**
 * Strict 复杂度限制规则
 *
 * 覆盖复杂度相关规则（1条）
 */

import type { Config } from 'stylelint';

export const complexityRules: Config['rules'] = {
  /**
   * max-nesting-depth
   * 最大嵌套深度 3 层
   *
   * 说明：限制 CSS 嵌套层数，防止选择器过于复杂
   * - 过深的嵌套会增加特异性，难以覆盖
   * - 降低代码可读性和可维护性
   *
   * Base 配置：null（不限制）
   * Strict 配置：3（最多 3 层嵌套）
   *
   * ✅ 正确示例：.a { .b { .c {} } }
   * ❌ 错误示例：.a { .b { .c { .d {} } } }
   */
  'max-nesting-depth': [
    3,
    {
      ignore: ['blockless-at-rules', 'pseudo-classes'],
    },
  ],
};
