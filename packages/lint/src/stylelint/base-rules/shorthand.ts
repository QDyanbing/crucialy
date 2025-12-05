/**
 * Shorthand Property 相关规则
 *
 * 包含简写属性相关规则（1条）
 * - 禁止简写属性的冗余值
 */

import type { Config } from 'stylelint';

export const shorthandRules: Config['rules'] = {
  /**
   * shorthand-property-no-redundant-values
   * 禁止简写属性使用冗余的值
   *
   * 说明：CSS 简写属性可以根据值的数量自动推断
   * - margin/padding 等属性遵循 上-右-下-左 的顺序
   * - 如果对边值相同，可以省略后面的值
   *
   * 简写规则：
   * - 4 个值：上 右 下 左
   * - 3 个值：上 左右 下
   * - 2 个值：上下 左右
   * - 1 个值：四边相同
   *
   * 使用最简形式可以减少代码量，提高可读性
   *
   * ✅ 正确示例：margin: 10px 20px;
   * ✅ 正确示例：margin: 10px 20px 30px;
   * ✅ 正确示例：padding: 10px;
   * ❌ 错误示例：margin: 10px 20px 10px 20px; (应简写为 10px 20px)
   * ❌ 错误示例：padding: 10px 10px 10px 10px; (应简写为 10px)
   * ❌ 错误示例：margin: 10px 20px 10px; (应简写为 10px 20px)
   */
  'shorthand-property-no-redundant-values': true,
};

