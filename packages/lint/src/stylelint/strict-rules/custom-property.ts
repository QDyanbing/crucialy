/**
 * Strict 自定义属性相关规则
 *
 * 覆盖自定义属性相关规则（2条）
 */

import type { Config } from 'stylelint';

export const customPropertyRules: Config['rules'] = {
  /**
   * custom-property-pattern
   * 自定义属性使用 kebab-case
   */
  'custom-property-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom property to be kebab-case',
    },
  ],

  /**
   * custom-property-empty-line-before
   * 自定义属性前需要空行
   */
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    },
  ],
};
