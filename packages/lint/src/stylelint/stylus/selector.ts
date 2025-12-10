/**
 * Stylus Selector 相关规则
 *
 * 包含选择器相关规则（7条）
 * - 选择器列表逗号格式
 * - 选择器伪类大小写
 * - 选择器类型未知检查
 */

import type { Config } from 'stylelint';

const stylusSelectorRules: Config['rules'] = {
  /**
   * @name stylus/selector-list-comma
   * @description 选择器列表逗号格式
   * @value 'always' - 要求使用逗号
   * @value 'never' - 禁止使用逗号
   * @value null - 不限制
   */
  'stylus/selector-list-comma': null,

  /**
   * @name stylus/selector-list-comma-newline-after
   * @description 选择器列表逗号后换行要求
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行时总是需要换行
   * @value 'never-multi-line' - 多行时禁止换行
   * @value null - 不限制
   */
  'stylus/selector-list-comma-newline-after': null,

  /**
   * @name stylus/selector-list-comma-newline-before
   * @description 选择器列表逗号前换行要求
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行时总是需要换行
   * @value 'never-multi-line' - 多行时禁止换行
   * @value null - 不限制
   */
  'stylus/selector-list-comma-newline-before': null,

  /**
   * @name stylus/selector-list-comma-space-after
   * @description 选择器列表逗号后空格要求；统一代码风格，要求逗号后有空格（与 core 规则一致）
   * @value 'always' - 要求逗号后有空格
   * @value 'never' - 禁止逗号后有空格
   * @value 'always-single-line' - 单行时要求逗号后有空格
   * @value 'never-single-line' - 单行时禁止逗号后有空格
   * @example ✅ 正确示例：
   *  - .class1, .class2
   *      color: red
   * @example ❌ 错误示例（注意逗号后没有空格）：
   *  - .class1,.class2  ← 逗号后缺少空格，应为 .class1, .class2
   *      color: red
   */
  'stylus/selector-list-comma-space-after': 'always',

  /**
   * @name stylus/selector-list-comma-space-before
   * @description 选择器列表逗号前空格要求；统一代码风格，禁止逗号前空格（与 core 规则一致）
   * @value 'never' - 禁止逗号前空格
   * @value 'always' - 要求逗号前空格
   * @value 'always-single-line' - 单行时要求逗号前空格
   * @value 'never-single-line' - 单行时禁止逗号前空格
   * @example ✅ 正确示例：
   *  - .class1, .class2
   *      color: red
   * @example ❌ 错误示例（注意逗号前有空格）：
   *  - .class1 , .class2  ← 逗号前不应有空格，应为 .class1, .class2
   *      color: red
   */
  'stylus/selector-list-comma-space-before': 'never',

  /**
   * @name stylus/selector-pseudo-class-case
   * @description 选择器伪类大小写格式；统一代码风格，要求小写（与 core 规则一致）
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - a:hover
   *      color: red
   * @example ❌ 错误示例：
   *  - a:HOVER  (应为小写)
   *      color: red
   */
  'stylus/selector-pseudo-class-case': 'lower',

  /**
   * @name stylus/selector-type-no-unknown
   * @description 禁止未知的选择器类型
   * @value true - 启用，禁止未知选择器类型
   * @value false - 禁用此规则
   * @secondary ignore: ["custom-elements", "default-namespace"] - 忽略的选择器类型
   * @secondary ignoreNamespaces: ["<string|RegExp>[]"] - 忽略的命名空间
   * @secondary ignoreTypes: ["<string|RegExp>[]"] - 忽略的类型
   * @example ✅ 正确示例：
   *  - div { }
   * @example ❌ 错误示例：
   *  - unknown-element { }  (不存在的元素)
   */
  'stylus/selector-type-no-unknown': true,
};

export default stylusSelectorRules;
