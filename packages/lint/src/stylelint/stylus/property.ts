/**
 * Stylus Property 相关规则
 *
 * 包含属性相关规则（1条）
 * - 属性未知检查
 */

import type { Config } from 'stylelint';

const stylusPropertyRules: Config['rules'] = {
  /**
   * @name stylus/property-no-unknown
   * @description 禁止未知的属性
   * @value true - 启用，禁止未知属性
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - unknown-prop: value;  (不存在的属性)
   */
  'stylus/property-no-unknown': true,
};

export default stylusPropertyRules;
