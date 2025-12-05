/**
 * Strict 通用规则
 *
 * 覆盖通用规则（1条）
 */

import type { Config } from 'stylelint';

export const generalRules: Config['rules'] = {
  /**
   * no-descending-specificity
   * 禁止降序特异性
   */
  'no-descending-specificity': true,
};

