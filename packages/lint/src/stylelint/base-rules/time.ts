/**
 * Time 相关规则
 *
 * 包含时间值相关规则（1条）
 * - 时间最小值限制
 */

import type { Config } from 'stylelint';

export const timeRules: Config['rules'] = {
  /**
   * time-min-milliseconds
   * 指定时间值的最小毫秒数
   *
   * 说明：限制 CSS 中时间值的最小值
   * - 适用于 transition-duration, animation-duration, transition-delay 等属性
   * - 过短的时间值（如 1ms）可能无法被用户感知
   * - 可以用来防止无意义的过短动画
   *
   * Base 配置不限制（null），常见使用场景：
   * - 设为 100：禁止小于 100ms 的时间值（因为太快用户察觉不到）
   * - 设为 0：禁止使用 0 作为时间值（强制明确动画时长）
   *
   * 配置示例：100
   * ✅ 正确示例（null 时）：transition-duration: 50ms;
   * ✅ 正确示例（null 时）：animation-duration: 0.3s;
   * ✅ 正确示例（配置 100 后）：transition-duration: 200ms;
   * ❌ 错误示例（配置 100 后）：transition-duration: 50ms; (小于 100ms)
   */
  'time-min-milliseconds': null,
};

