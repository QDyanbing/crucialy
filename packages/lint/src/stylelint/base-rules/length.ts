/**
 * Length 相关规则
 *
 * 包含长度值相关规则（1条）
 * - 零值不带单位
 */

import type { Config } from 'stylelint';

export const lengthRules: Config['rules'] = {
  /**
   * length-zero-no-unit
   * 禁止长度为零时使用单位
   *
   * 说明：在 CSS 中，长度为 0 时，单位是可选的
   * - 0px, 0em, 0rem, 0% 等价于 0
   * - 省略单位可以减少代码量
   * - 是 CSS 编码的最佳实践
   *
   * 例外情况：
   * - 自定义属性（CSS 变量）中的零值可以保留单位
   *   因为变量可能在计算中使用，保留单位更明确
   *
   * ✅ 正确示例：margin: 0;
   * ✅ 正确示例：padding: 0;
   * ✅ 正确示例：border-width: 0;
   * ✅ 正确示例（自定义属性）：--spacing: 0px;
   * ❌ 错误示例：margin: 0px;
   * ❌ 错误示例：padding: 0em;
   * ❌ 错误示例：width: 0rem;
   */
  'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
};

