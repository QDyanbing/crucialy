/**
 * Strict 选择器限制规则
 *
 * 包含选择器使用限制规则（4条）
 * - 组合器限制
 * - 伪类限制
 * - 属性选择器限制
 * - 嵌套模式
 */

import type { Config } from 'stylelint';

export const selectorRules: Config['rules'] = {
  /**
   * selector-max-combinators
   * 限制组合器数量（最多 3 个）
   *
   * 说明：组合器用于连接选择器
   * - 后代选择器（空格）：.a .b
   * - 子选择器（>）：.a > .b
   * - 相邻兄弟（+）：.a + .b
   * - 通用兄弟（~）：.a ~ .b
   *
   * ✅ 正确示例：.a > .b + .c {}
   * ❌ 错误示例：.a > .b + .c ~ .d {}
   */
  'selector-max-combinators': 3,

  /**
   * selector-max-pseudo-class
   * 限制伪类数量（最多 3 个）
   *
   * 说明：伪类用于定义元素的特殊状态
   * - :hover、:focus、:active 等
   *
   * ✅ 正确示例：a:hover:focus:active {}
   * ❌ 错误示例：a:hover:focus:active:visited {}
   */
  'selector-max-pseudo-class': 3,

  /**
   * selector-max-attribute
   * 限制属性选择器数量（最多 2 个）
   *
   * 说明：属性选择器用于选择具有特定属性的元素
   * - [type="text"]
   * - [disabled]
   * - [data-*="value"]
   *
   * ✅ 正确示例：[type="text"][disabled] {}
   * ❌ 错误示例：[type="text"][disabled][required] {}
   */
  'selector-max-attribute': 2,

  /**
   * selector-nested-pattern
   * 嵌套选择器必须以 & 开头
   *
   * 说明：强制使用 BEM 风格的嵌套
   * - & 表示父选择器的引用
   * - 确保嵌套选择器与父选择器有明确关联
   *
   * ✅ 正确示例：
   * .block {
   *   &__element {}
   *   &--modifier {}
   * }
   *
   * ❌ 错误示例：
   * .block {
   *   .element {} (缺少 &)
   * }
   */
  'selector-nested-pattern': '^&',
};

