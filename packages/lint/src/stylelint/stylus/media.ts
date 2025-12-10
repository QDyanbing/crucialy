/**
 * Stylus Media 相关规则
 *
 * 包含媒体查询相关规则（1条）
 * - 媒体特性冒号格式
 */

import type { Config } from 'stylelint';

const stylusMediaRules: Config['rules'] = {
  /**
   * @name stylus/media-feature-colon
   * @description 媒体特性冒号格式；统一代码风格，要求使用冒号
   * @value 'always' - 要求使用冒号
   * @value 'never' - 禁止使用冒号
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px)
   *      .class
   *        color: red
   * @example ❌ 错误示例：
   *  - @media (min-width 768px)  (缺少冒号)
   *      .class
   *        color: red
   */
  'stylus/media-feature-colon': 'always',
};

export default stylusMediaRules;
