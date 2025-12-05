/**
 * Length 相关规则
 * 
 * 包含长度值相关规则（1条）
 * - 零值不带单位（margin: 0 而非 0px）
 */

import type { Config } from 'stylelint';

export const lengthRules: Config['rules'] = {
  /**
   * length-zero-no-unit
   * 禁止零值长度带单位
   * ✅ margin: 0;
   * ❌ margin: 0px;
   * ignore: ['custom-properties'] - 自定义属性例外
   */
  'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
  
};
