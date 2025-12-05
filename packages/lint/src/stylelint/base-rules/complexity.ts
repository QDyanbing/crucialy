/**
 * Complexity 复杂度规则
 *
 * 包含代码复杂度限制规则（1条）
 * - 最大嵌套深度限制
 */

import type { Config } from 'stylelint';

export const complexityRules: Config['rules'] = {
  /**
   * max-nesting-depth
   * 限制选择器的最大嵌套深度
   *
   * 说明：过深的嵌套会导致：
   * - CSS 特异性过高，难以覆盖样式
   * - 代码可读性差，维护困难
   * - 选择器性能下降
   * - 通常表示组件结构设计不合理
   *
   * Base 配置不限制（null），常见配置：
   * - 3：限制最多 3 层嵌套（推荐）
   * - 2：更严格的限制，强制扁平化
   *
   * 配置示例：3
   * ✅ 正确示例（null 时）：
   * .a { .b { .c { .d { color: red; } } } }
   *
   * ✅ 正确示例（配置为 3 后）：
   * .a {
   *   .b {
   *     .c {
   *       color: red;
   *     }
   *   }
   * }
   *
   * ❌ 错误示例（配置为 3 后）：
   * .a {
   *   .b {
   *     .c {
   *       .d {
   *         color: red; (第4层，超过限制)
   *       }
   *     }
   *   }
   * }
   */
  'max-nesting-depth': null,
};

