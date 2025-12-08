/**
 * SCSS Dimension 相关规则
 *
 * 包含维度相关规则（1条）
 */

import type { Config } from 'stylelint';

export const scssDimensionRules: Config['rules'] = {
  /**
   * @name scss/dimension-no-non-numeric-values
   * @description 禁止维度值使用非数字值
   * @value true - 启用，禁止非数字值（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: 100px;
   *  - width: $var;
   * @example ❌ 错误示例：
   *  - width: auto;                              (维度值应为数字)
   */
  'scss/dimension-no-non-numeric-values': true,
};
