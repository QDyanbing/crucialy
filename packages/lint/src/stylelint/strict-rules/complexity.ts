/**
 * Strict 复杂度限制规则
 *
 * 包含代码复杂度控制规则（9条）
 * - 嵌套深度限制
 * - 选择器复杂度限制
 * - 特异性限制
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
   * ✅ 正确示例：.a { .b { .c {} } }
   * ❌ 错误示例：.a { .b { .c { .d {} } } }
   */
  'max-nesting-depth': [
    3,
    {
      ignore: ['blockless-at-rules', 'pseudo-classes'],
    },
  ],

  /**
   * selector-max-id
   * 禁止使用 ID 选择器
   *
   * 说明：ID 选择器特异性过高，难以覆盖
   * - 推荐使用 class 选择器
   * - ID 可用于 JavaScript 获取元素，但不用于样式
   *
   * ✅ 正确示例：.class {}
   * ❌ 错误示例：#id {}
   * ❌ 错误示例：div#id {}
   */
  'selector-max-id': 0,

  /**
   * selector-max-specificity
   * 限制选择器特异性
   *
   * 说明：限制为最多 3 个类选择器的特异性 (0,3,0)
   * - 特异性格式：(id, class, type)
   * - 避免过高特异性导致样式难以覆盖
   *
   * ✅ 正确示例：.a.b.c {}
   * ✅ 正确示例：.a .b .c {}
   * ❌ 错误示例：.a.b.c.d {}
   * ❌ 错误示例：.a .b .c .d {}
   */
  'selector-max-specificity': '0,3,0',

  /**
   * selector-max-compound-selectors
   * 限制复合选择器数量
   *
   * 说明：限制选择器链的长度（最多 3 层）
   *
   * ✅ 正确示例：.a .b .c {}
   * ❌ 错误示例：.a .b .c .d {}
   */
  'selector-max-compound-selectors': 3,

  /**
   * selector-max-type
   * 限制类型选择器数量
   *
   * 说明：类型选择器（如 div, span）特异性低但性能差
   * - 推荐少用类型选择器
   * - 优先使用 class 选择器
   *
   * ✅ 正确示例：div {}
   * ✅ 正确示例：div.class {}
   * ❌ 错误示例：div span p {}
   */
  'selector-max-type': [2, { ignore: ['child', 'descendant', 'compounded'] }],

  /**
   * selector-max-universal
   * 禁止通配符选择器
   *
   * 说明：通配符选择器 (*) 性能差，影响所有元素
   *
   * ✅ 正确示例：.class {}
   * ❌ 错误示例：* {}
   * ❌ 错误示例：.class * {}
   */
  'selector-max-universal': 0,

  /**
   * selector-no-qualifying-type
   * 禁止选择器限定类型
   *
   * 说明：避免使用类型+class/id 组合，这会增加不必要的特异性
   *
   * ✅ 正确示例：.button {}
   * ❌ 错误示例：button.button {}
   * ❌ 错误示例：div#id {}
   */
  'selector-no-qualifying-type': [
    true,
    {
      ignore: ['attribute', 'class'],
    },
  ],

  /**
   * declaration-no-important
   * 禁止使用 !important
   *
   * 说明：!important 是代码设计不当的体现
   * - 会导致样式难以覆盖
   * - 破坏 CSS 层叠规则
   *
   * ✅ 正确示例：color: red;
   * ❌ 错误示例：color: red !important;
   */
  'declaration-no-important': true,

  /**
   * selector-max-class
   * 限制类选择器数量
   *
   * 说明：限制单个选择器中的 class 数量（最多 4 个）
   *
   * ✅ 正确示例：.a.b.c {}
   * ✅ 正确示例：.a.b.c.d {}
   * ❌ 错误示例：.a.b.c.d.e {}
   */
  'selector-max-class': 4,
};

