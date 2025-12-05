/**
 * Strict 代码风格规则
 *
 * 包含更严格的代码风格规则（4条）
 * - 颜色函数
 * - 字体族
 * - 选择器类型
 * - 特异性顺序
 */

import type { Config } from 'stylelint';

export const strictStyleRules: Config['rules'] = {
  /**
   * color-function-notation
   * 禁用（因为 Strict 只允许 hex 颜色）
   *
   * 说明：Strict 模式通过 function-disallowed-list 禁止所有颜色函数
   * 只允许使用 hex 颜色（#fff、#ffffff80）
   */
  'color-function-notation': null,

  /**
   * font-family-no-missing-generic-family-keyword
   * 要求字体族必须包含通用字体族关键字
   *
   * 说明：通用字体族是字体回退的最后一层保障
   * - sans-serif：无衬线字体
   * - serif：衬线字体
   * - monospace：等宽字体
   * - cursive：手写字体
   * - fantasy：装饰字体
   *
   * ✅ 正确示例：font-family: Arial, sans-serif;
   * ✅ 正确示例：font-family: 'Times New Roman', serif;
   * ❌ 错误示例：font-family: Arial;
   * ❌ 错误示例：font-family: 'iconfont'; (图标字体除外)
   */
  'font-family-no-missing-generic-family-keyword': true,

  /**
   * selector-type-no-unknown
   * 完全禁止未知类型选择器
   *
   * 说明：Strict 模式不允许任何未知的 HTML 元素
   * - Base 模式允许 Web Components 自定义元素
   * - Strict 模式更严格，只允许标准 HTML 元素
   *
   * ✅ 正确示例：div {}
   * ✅ 正确示例：span {}
   * ❌ 错误示例：unknown-element {}
   * ❌ 错误示例：my-component {} (Web Components 也不允许)
   */
  'selector-type-no-unknown': true,

  /**
   * no-descending-specificity
   * 禁止降序特异性
   *
   * 说明：防止后面的低特异性选择器被前面的高特异性选择器覆盖
   * - 违反 CSS 层叠规则的直觉
   * - 容易导致样式意外失效
   *
   * ✅ 正确示例：
   * .a {} (特异性 0,1,0)
   * .a.b {} (特异性 0,2,0)
   *
   * ❌ 错误示例：
   * .a.b {} (特异性 0,2,0)
   * .a {} (特异性 0,1,0，会被前面的覆盖)
   */
  'no-descending-specificity': true,
};

