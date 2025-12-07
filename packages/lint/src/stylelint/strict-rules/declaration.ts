/**
 * Strict 声明相关规则
 *
 * 覆盖声明相关规则（2条）
 * - 禁止使用 !important
 * - 声明前需要空行
 */

import type { Config } from 'stylelint';

export const declarationRules: Config['rules'] = {
  /**
   * @name declaration-no-important
   * @description 禁止使用 !important；Strict 模式禁止使用，!important 会破坏 CSS 的层叠规则，使样式难以覆盖和维护
   * @value true - 禁止使用 !important（Strict 配置，覆盖 Base 的 null）
   * @value false - 允许使用
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red !important; }           (应通过提高选择器特异性来解决)
   */
  'declaration-no-important': true,

  /**
   * @name declaration-empty-line-before
   * @description 要求声明前有空行；Strict 模式总是要求空行，提高可读性
   * @value 'always' - 总是要求空行（Strict 配置，覆盖 Base 的 'never'）
   * @value 'never' - 禁止空行
   * @secondary except: ['first-nested', 'after-comment', 'after-declaration'] - 第一个嵌套声明、注释后、声明后不需要空行
   * @secondary ignore: ['inside-single-line-block'] - 单行块内可以不加空行
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *
   *      background: blue;
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *      color: red;
   *      background: blue;
   *    }                                      (缺少空行)
   */
  'declaration-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'after-comment', 'after-declaration'],
      ignore: ['inside-single-line-block'],
    },
  ],
};
