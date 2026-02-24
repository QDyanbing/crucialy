/**
 * Complexity 复杂度规则
 * @module @crucialy/lint/stylelint/core/complexity
 *
 * 包含代码复杂度限制规则（1条）
 * - 最大嵌套深度限制：避免过度嵌套，提高可读性
 */

import type { Config } from 'stylelint';

const complexityRules: Config['rules'] = {
  /**
   * @name max-nesting-depth
   * @description 限制选择器的最大嵌套深度；Strict 模式限制为 3 层，防止选择器过于复杂
   * @value number - 最大嵌套层数（Strict 配置为 3，覆盖 Base 的 null）
   * @secondary ignore: ['blockless-at-rules'] - 忽略无块级 @规则（如 @media）
   * @example ✅ 正确示例：
   *  - .a {
   *      .b {
   *        .c {
   *          color: red;
   *        }
   *      }
   *    }
   * @example ❌ 错误示例：
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
  'max-nesting-depth': [
    3,
    {
      ignore: ['blockless-at-rules'],
    },
  ],
};

export default complexityRules;
