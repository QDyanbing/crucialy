/**
 * Complexity 复杂度规则
 *
 * 包含代码复杂度限制规则（1条）
 * - 最大嵌套深度限制
 */

import type { Config } from 'stylelint';

export const complexityRules: Config['rules'] = {
  /**
   * @name max-nesting-depth
   * @description 限制选择器的最大嵌套深度；过深的嵌套会导致 CSS 特异性过高、代码可读性差、选择器性能下降
   * @value null - 不限制嵌套深度
   * @value number - 最大嵌套层数（如：3 表示最多 3 层）
   * @example ✅ 正确示例（null 时）：
   *  - .a { .b { .c { .d { color: red; } } } }
   * @example ✅ 正确示例（假设配置为 3）：
   *  - .a {
   *      .b {
   *        .c {
   *          color: red;
   *        }
   *      }
   *    }
   * @example ❌ 错误示例（假设配置为 3）：
   *  - .a {
   *      .b {
   *        .c {
   *          .d {
   *            color: red;
   *          }
   *        }
   *      }
   *    }                                      (第4层，超过限制)
   */
  'max-nesting-depth': [null],
};

