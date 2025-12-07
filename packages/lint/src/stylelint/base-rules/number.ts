/**
 * Number 相关规则
 *
 * 包含数字格式相关规则（1条）
 * - 数字小数点精度限制
 */

import type { Config } from 'stylelint';

export const numberRules: Config['rules'] = {
  /**
   * @name number-max-precision
   * @description 限制数字值的最大小数位数；过高的精度通常是不必要的，浏览器对精度的支持有限，限制精度可以减小文件大小
   * @value number - 最大小数位数（Base 配置为 4）
   * @example ✅ 正确示例：
   *  - width: 1.2345%;
   *  - opacity: 0.5;
   *  - transform: rotate(3.14deg);
   * @example ❌ 错误示例：
   *  - width: 1.23456%;                       (超过4位小数)
   *  - opacity: 0.123456;                     (超过4位小数)
   */
  'number-max-precision': [4],
};
