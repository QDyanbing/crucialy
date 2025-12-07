/**
 * Strict 声明相关规则
 *
 * 覆盖声明相关规则（3条）
 * - 禁止使用 !important
 * - 声明前需要空行
 * - 禁止某些属性使用某些单位
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
  'declaration-no-important': [true],

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

  /**
   * @name declaration-property-unit-disallowed-list
   * @description 指定属性禁止使用的单位黑名单；Strict 模式禁止特定属性使用特定单位
   * @value object - 对象，为不同属性指定禁止的单位（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - a { font-size: 1rem; }
   *  - a { animation-duration: 1s; }
   * @example ❌ 错误示例：
   *  - a { font-size: 12px; }                (px 在黑名单中，应使用 rem/em)
   *  - a { animation-duration: 200ms; }      (ms 在黑名单中，应使用 s)
   */
  'declaration-property-unit-disallowed-list': [
    {
      'font-size': ['px'],
      '/^animation/': ['ms'],
    },
  ],
};
