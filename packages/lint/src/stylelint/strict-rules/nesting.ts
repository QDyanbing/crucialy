/**
 * Strict 嵌套相关规则
 *
 * 覆盖嵌套相关规则（1条）
 */

import type { Config } from 'stylelint';

export const nestingRules: Config['rules'] = {
  /**
   * selector-nested-pattern
   * 嵌套选择器必须以 & 开头
   */
  'selector-nested-pattern': '^&',
};

