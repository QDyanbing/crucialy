/**
 * Length 相关规则
 *
 * 包含长度值相关规则（1条）
 * - 零值不带单位
 */

import type { Config } from 'stylelint';

export const lengthRules: Config['rules'] = {
  /**
   * @name length-zero-no-unit
   * @description 禁止长度为零时使用单位；省略单位可以减少代码量，是 CSS 编码的最佳实践
   * @value true - 启用，禁止零值带单位
   * @value false - 禁用此规则
   * @secondary ignore: ['custom-properties'] - 自定义属性中的零值可以保留单位，因为变量可能在计算中使用
   * @example ✅ 正确示例：
   *  - margin: 0;
   *  - padding: 0;
   *  - border-width: 0;
   *  - --spacing: 0px;                        (自定义属性可以保留单位)
   * @example ❌ 错误示例：
   *  - margin: 0px;                           (应省略单位)
   *  - padding: 0em;                          (应省略单位)
   *  - width: 0rem;                           (应省略单位)
   */
  'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
};

