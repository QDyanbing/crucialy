/**
 * Shorthand Property 相关规则
 *
 * 包含简写属性相关规则（1条）
 * - 禁止简写属性的冗余值
 */

import type { Config } from 'stylelint';

export const shorthandRules: Config['rules'] = {
  /**
   * @name shorthand-property-no-redundant-values
   * @description 禁止简写属性使用冗余的值；CSS 简写属性可以根据值的数量自动推断，如果对边值相同可以省略后面的值，使用最简形式可以减少代码量
   * @value true - 启用，禁止冗余值
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - margin: 10px 20px;
   *  - margin: 10px 20px 30px;
   *  - padding: 10px;
   * @example ❌ 错误示例：
   *  - margin: 10px 20px 10px 20px;           (应简写为 10px 20px)
   *  - padding: 10px 10px 10px 10px;          (应简写为 10px)
   *  - margin: 10px 20px 10px;                (应简写为 10px 20px)
   */
  'shorthand-property-no-redundant-values': [true],
};
