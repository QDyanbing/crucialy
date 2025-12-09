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
   * @description 媒体特性冒号格式
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px) { }
   * @example ❌ 错误示例：
   *  - @media (min-width 768px) { }  (缺少冒号)
   */
  'stylus/media-feature-colon': null,
};

export default stylusMediaRules;
