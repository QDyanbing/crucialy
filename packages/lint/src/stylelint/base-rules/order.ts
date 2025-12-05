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
   * order/order
   * 指定声明块内容的顺序
   *
   * 说明：规范规则块中不同类型内容的顺序
   * - custom-properties：CSS 自定义属性（--variable）
   * - dollar-variables：Sass/Less 变量（$variable）
   * - declarations：普通 CSS 声明
   * - at-rules：@规则（@include, @media 等）
   * - rules：嵌套规则
   *
   * 这样的顺序有助于：
   * - 变量定义在前，使用在后
   * - 当前规则的样式在前，嵌套规则在后
   * - 提高代码可读性和可维护性
   *
   * ✅ 正确示例：
   * .card {
   *   --card-padding: 20px;        (1. 自定义属性)
   *   $card-bg: white;             (2. Sass 变量)
   *   padding: var(--card-padding); (3. 普通声明)
   *   background: $card-bg;
   *   @include border-radius(4px);  (4. @规则)
   *   &:hover {                     (5. 嵌套规则)
   *     background: #f0f0f0;
   *   }
   * }
   *
   * ❌ 错误示例：
   * .card {
   *   padding: 20px;               (声明在前)
   *   --card-padding: 20px;        (变量在后，顺序错误)
   *   &:hover { }                  (嵌套在中间)
   *   color: red;                  (声明又在嵌套后)
   * }
   */
  'order/order': [
    'custom-properties',
    'dollar-variables',
    'declarations',
    'at-rules',
    'rules',
  ],

  /**
   * order/properties-order
   * 指定属性的排列顺序
   *
   * 说明：规范 CSS 属性的书写顺序
   * - null：不限制顺序
   * - 数组：按指定顺序排列属性
   *
   * Base 配置不限制，常见排序策略：
   * - 按功能分组：布局 → 盒模型 → 文本 → 视觉效果
   * - 按字母顺序（见下一个规则）
   *
   * Strict 模式可能会启用属性排序
   *
   * 配置示例：['position', 'top', 'right', 'display', 'width', 'color']
   * ✅ 正确示例（null 时）：
   * .a {
   *   color: red;
   *   display: block;
   *   position: absolute;
   * }
   */
  'order/properties-order': null,

  /**
   * order/properties-alphabetical-order
   * 要求属性按字母顺序排列
   *
   * 说明：强制属性按字母顺序（a-z）排列
   * - null：不要求
   * - true：要求字母顺序
   *
   * Base 配置不要求，原因：
   * - 按功能分组比字母顺序更符合逻辑
   * - 可以通过 properties-order 实现更灵活的排序
   *
   * ✅ 正确示例（null 时）：
   * .a {
   *   position: absolute;
   *   display: block;
   *   color: red;
   * }
   *
   * ✅ 正确示例（如果配置为 true）：
   * .a {
   *   color: red;
   *   display: block;
   *   position: absolute;
   * }
   *
   * ❌ 错误示例（如果配置为 true）：
   * .a {
   *   position: absolute;
   *   color: red;
   *   display: block;
   * }
   */
  'order/properties-alphabetical-order': null,
};
