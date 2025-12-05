/**
 * Strict 选择器相关规则
 *
 * 覆盖选择器相关规则（13条）
 */

import type { Config } from 'stylelint';

export const selectorRules: Config['rules'] = {
  /**
   * selector-class-pattern
   * 强制 BEM 命名规范
   */
  'selector-class-pattern': [
    '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    {
      message: 'Expected class selector to follow BEM naming (block__element--modifier)',
    },
  ],

  /**
   * selector-id-pattern
   * ID 使用 kebab-case
   */
  'selector-id-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected id selector to be kebab-case',
    },
  ],

  /**
   * selector-max-id
   * 禁止 ID 选择器
   */
  'selector-max-id': 0,

  /**
   * selector-max-specificity
   * 限制选择器特异性
   */
  'selector-max-specificity': '0,3,0',

  /**
   * selector-max-compound-selectors
   * 限制复合选择器数量
   */
  'selector-max-compound-selectors': 3,

  /**
   * selector-max-type
   * 限制类型选择器数量
   */
  'selector-max-type': [2, { ignore: ['child', 'descendant', 'compounded'] }],

  /**
   * selector-max-universal
   * 禁止通配符选择器
   */
  'selector-max-universal': 0,

  /**
   * selector-no-qualifying-type
   * 禁止选择器限定类型
   */
  'selector-no-qualifying-type': [
    true,
    {
      ignore: ['attribute', 'class'],
    },
  ],

  /**
   * selector-max-class
   * 限制类选择器数量
   */
  'selector-max-class': 4,

  /**
   * selector-max-combinators
   * 限制组合器数量
   */
  'selector-max-combinators': 3,

  /**
   * selector-max-pseudo-class
   * 限制伪类数量
   */
  'selector-max-pseudo-class': 3,

  /**
   * selector-max-attribute
   * 限制属性选择器数量
   */
  'selector-max-attribute': 2,

  /**
   * selector-type-no-unknown
   * 完全禁止未知类型选择器
   */
  'selector-type-no-unknown': true,

  /**
   * selector-disallowed-list
   * 禁止通配符选择器
   */
  'selector-disallowed-list': ['/^\\*/'],
};
