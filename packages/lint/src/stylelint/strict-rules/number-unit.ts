/**
 * Strict Number/Unit 相关规则
 *
 * 覆盖数字单位相关规则（1条）
 * - 动画最小时长限制为 100ms
 */

import type { Config } from 'stylelint';

export const numberUnitRules: Config['rules'] = {
  /**
   * @name time-min-milliseconds
   * @description 指定时间值的最小毫秒数；Strict 模式限制为 100ms，防止过快的动画影响用户体验
   * @value number - 最小毫秒数（Strict 配置为 100，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - transition-duration: 100ms;
   *  - animation-duration: 0.3s;
   *  - transition-delay: 200ms;
   * @example ❌ 错误示例：
   *  - transition-duration: 50ms;             (小于 100ms)
   *  - animation-duration: 0.05s;             (50ms，小于 100ms)
   */
  'time-min-milliseconds': 100,
};
