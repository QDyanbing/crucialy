/**
 * Strict 函数相关规则
 *
 * 覆盖函数相关规则（1条）
 */

import type { Config } from 'stylelint';

export const functionRules: Config['rules'] = {
  /**
   * function-disallowed-list
   * 禁止颜色函数（只允许 hex 表示颜色）
   */
  'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
};

