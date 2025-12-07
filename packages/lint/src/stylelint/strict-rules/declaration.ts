/**
 * Strict 声明相关规则
 *
 * 覆盖声明相关规则（3条）
 */

import type { Config } from 'stylelint';

export const declarationRules: Config['rules'] = {
  /**
   * declaration-no-important
   * 禁止使用 !important
   */
  'declaration-no-important': true,

  /**
   * declaration-empty-line-before
   * 声明前需要空行
   */
  'declaration-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'after-comment', 'after-declaration'],
      ignore: ['inside-single-line-block'],
    },
  ],

  /**
   * declaration-property-unit-disallowed-list
   * 禁止某些属性使用某些单位
   */
  'declaration-property-unit-disallowed-list': {
    'font-size': ['px'],
    '/^animation/': ['ms'],
  },
};
