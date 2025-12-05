/**
 * Strict Number/Unit 相关规则
 *
 * 覆盖数字单位相关规则（1条）
 */

import type { Config } from 'stylelint';

export const numberUnitRules: Config['rules'] = {
  /**
   * time-min-milliseconds
   * 动画最小时长 100ms
   */
  'time-min-milliseconds': 100,
};

