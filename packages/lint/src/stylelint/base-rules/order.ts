/**
 * Order 顺序规则
 *
 * 来自 stylelint-order 插件（3条）
 * - 声明块内容顺序（custom-properties → declarations → rules）
 * - 属性顺序（在 strict 模式中配置）
 * - 属性字母顺序
 */

import type { Config } from 'stylelint';

export const orderRules: Config['rules'] = {
  /**
   * @name order/order
   * @description 指定声明块内容的顺序；规范规则块中不同类型内容的顺序，提高代码可读性和可维护性
   * @value array - 顺序数组（custom-properties → dollar-variables → declarations → at-rules → rules）
   * @example ✅ 正确示例：
   *  - .card {
   *      --card-padding: 20px;
   *      $card-bg: white;
   *      padding: var(--card-padding);
   *      background: $card-bg;
   *      \@include border-radius(4px);
   *      &:hover {
   *        background: #f0f0f0;
   *      }
   *    }
   * @example ❌ 错误示例：
   *  - .card {
   *      padding: 20px;
   *      --card-padding: 20px;
   *      &:hover { }
   *      color: red;
   *    }                                      (顺序错误)
   */
  'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],

  /**
   * @name order/properties-order
   * @description 指定属性的排列顺序；规范 CSS 属性的书写顺序
   * @value null - 不限制顺序
   * @value array - 按指定顺序排列属性（如：['position', 'top', 'right', 'display', 'width', 'color']）
   * @example ✅ 正确示例（null 时）：
   *  - .a {
   *      color: red;
   *      display: block;
   *      position: absolute;
   *    }
   * @example ❌ 错误示例（假设配置了顺序）：
   *  - .a {
   *      color: red;
   *      position: absolute;
   *      display: block;
   *    }                                      (顺序不符合配置)
   */
  'order/properties-order': [null],

  /**
   * @name order/properties-alphabetical-order
   * @description 要求属性按字母顺序排列；Base 配置不要求，因为按功能分组比字母顺序更符合逻辑
   * @value null - 不要求字母顺序
   * @value true - 要求字母顺序
   * @example ✅ 正确示例（null 时）：
   *  - .a {
   *      position: absolute;
   *      display: block;
   *      color: red;
   *    }
   * @example ❌ 错误示例（假设配置为 true）：
   *  - .a {
   *      position: absolute;
   *      color: red;
   *      display: block;
   *    }                                      (不是字母顺序，应为 color → display → position)
   */
  'order/properties-alphabetical-order': [null],
};
