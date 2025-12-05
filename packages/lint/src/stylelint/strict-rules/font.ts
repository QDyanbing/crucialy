/**
 * Strict 字体相关规则
 *
 * 覆盖字体相关规则（1条）
 */

import type { Config } from 'stylelint';

export const fontRules: Config['rules'] = {
  /**
   * font-family-no-missing-generic-family-keyword
   * 要求字体族必须包含通用字体族关键字
   */
  'font-family-no-missing-generic-family-keyword': true,
};

