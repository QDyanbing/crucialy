/**
 * Time 相关规则
 *
 * 包含时间值相关规则（1条）
 * - 时间最小值限制：确保动画和过渡效果有足够的持续时间，提升用户体验
 */

import type { Config } from 'stylelint';

const timeRules: Config['rules'] = {
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

export default timeRules;
