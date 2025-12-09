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
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-list-comma': null,

  /**
   * @name stylus/selector-list-comma-newline-after
   * @description 选择器列表逗号后换行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-list-comma-newline-after': null,

  /**
   * @name stylus/selector-list-comma-newline-before
   * @description 选择器列表逗号前换行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-list-comma-newline-before': null,

  /**
   * @name stylus/selector-list-comma-space-after
   * @description 选择器列表逗号后空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-list-comma-space-after': null,

  /**
   * @name stylus/selector-list-comma-space-before
   * @description 选择器列表逗号前空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-list-comma-space-before': null,

  /**
   * @name stylus/selector-pseudo-class-case
   * @description 选择器伪类大小写格式
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/selector-pseudo-class-case': null,

  /**
   * @name stylus/selector-type-no-unknown
   * @description 禁止未知的选择器类型
   * @value true - 启用，禁止未知选择器类型
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - div { }
   * @example ❌ 错误示例：
   *  - unknown-element { }  (不存在的元素)
   */
  'stylus/selector-type-no-unknown': true,
};

export default stylusSelectorRules;
