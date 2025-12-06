/**
 * Time 相关规则
 *
 * 包含时间值相关规则（1条）
 * - 时间最小值限制
 */

import type { Config } from 'stylelint';

export const timeRules: Config['rules'] = {
  /**
   * @name time-min-milliseconds
   * @description 指定时间值的最小毫秒数；限制 CSS 中时间值的最小值，适用于 transition-duration、animation-duration、transition-delay 等属性，Base 配置不限制
   * @value null - 不限制，允许任何时间值
   * @value number - 最小毫秒数（如：100 表示禁止小于 100ms 的时间值）
   * @example ✅ 正确示例（null 时）：
   *  - transition-duration: 50ms;
   *  - animation-duration: 0.3s;
   * @example ❌ 错误示例（假设配置为 100）：
   *  - transition-duration: 50ms;             (小于 100ms)
   */
  'time-min-milliseconds': [null],
};
