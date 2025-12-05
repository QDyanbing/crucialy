/**
 * Number 相关规则
 *
 * 包含数字格式相关规则（1条）
 * - 数字小数点精度限制
 */

import type { Config } from 'stylelint';

export const numberRules: Config['rules'] = {
  /**
   * number-max-precision
   * 限制数字值的最大小数位数
   *
   * 说明：限制 CSS 中数字值的小数精度
   * - 过高的精度（如 1.123456789）通常是不必要的
   * - 浏览器对精度的支持有限，过高精度无实际意义
   * - 限制精度可以减小 CSS 文件大小
   *
   * Base 配置限制为 4 位小数
   *
   * ✅ 正确示例：width: 1.2345%;
   * ✅ 正确示例：opacity: 0.5;
   * ✅ 正确示例：transform: rotate(3.14deg);
   * ❌ 错误示例：width: 1.23456%; (超过4位小数)
   * ❌ 错误示例：opacity: 0.123456; (超过4位小数)
   */
  'number-max-precision': 4,
};

