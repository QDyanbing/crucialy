/**
 * Strict Number/Unit 相关规则
 *
 * 覆盖数字单位相关规则（2条）
 * - 动画最小时长限制为 100ms
 * - 禁用印刷单位
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

  /**
   * @name unit-disallowed-list
   * @description 指定禁止使用的单位；Strict 模式禁用印刷单位，这些单位在 Web 开发中基本不会用到
   * @value array - 字符串数组，禁止的单位列表（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - width: 100px;
   *  - font-size: 16px;
   *  - margin: 1em;
   * @example ❌ 错误示例：
   *  - width: 10cm;                           (cm 在禁用列表中)
   *  - font-size: 12pt;                       (pt 在禁用列表中)
   *  - margin: 1in;                           (in 在禁用列表中)
   */
  'unit-disallowed-list': ['cm', 'mm', 'in', 'pt', 'pc'],
};
