/**
 * Strict 选择器相关规则
 *
 * 覆盖选择器相关规则（14条）
 * - BEM 命名规范
 * - ID 和选择器复杂度限制
 * - 选择器验证
 */

import type { Config } from 'stylelint';

export const selectorRules: Config['rules'] = {
  /**
   * @name selector-class-pattern
   * @description 选择器类名命名模式；Strict 模式强制使用 BEM 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 BEM，覆盖 Base 的 null）
   * @secondary message: 'Expected class selector to follow BEM naming (block__element--modifier)' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - .block {}
   *  - .block__element {}
   *  - .block--modifier {}
   *  - .block__element--modifier {}
   * @example ❌ 错误示例：
   *  - .blockElement {}                         (不是 BEM，应为 .block__element)
   *  - .Block {}                                (不是 BEM 格式)
   */
  'selector-class-pattern': [
    '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    {
      message: 'Expected class selector to follow BEM naming (block__element--modifier)',
    },
  ],

  /**
   * @name selector-id-pattern
   * @description 选择器 ID 命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
   * @secondary message: 'Expected id selector to be kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - #my-id {}
   *  - #primary-button {}
   * @example ❌ 错误示例：
   *  - #myId {}                                 (不是 kebab-case，应使用 #my-id)
   *  - #MyId {}                                 (不是 kebab-case，应为小写)
   */
  'selector-id-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected id selector to be kebab-case',
    },
  ],

  /**
   * @name selector-max-id
   * @description 选择器最大 ID 选择器数；Strict 模式禁止使用 ID 选择器，提高样式可维护性
   * @value number - 最大数量（Strict 配置为 0，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .class {}
   * @example ❌ 错误示例：
   *  - #id {}                                   (不应使用 ID 选择器)
   */
  'selector-max-id': 0,

  /**
   * @name selector-max-specificity
   * @description 选择器最大特异性；Strict 模式限制选择器特异性，防止过度嵌套
   * @value string - 特异性字符串（Strict 配置为 '0,3,0'，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .a.b.c {}
   * @example ❌ 错误示例：
   *  - .a.b.c.d {}                              (特异性超过 0,3,0)
   */
  'selector-max-specificity': '0,3,0',

  /**
   * @name selector-max-compound-selectors
   * @description 选择器最大复合选择器数；Strict 模式限制复合选择器数量，防止选择器过于复杂
   * @value number - 最大数量（Strict 配置为 3，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .a .b .c {}
   * @example ❌ 错误示例：
   *  - .a .b .c .d {}                           (超过限制)
   */
  'selector-max-compound-selectors': 3,

  /**
   * @name selector-max-type
   * @description 选择器最大类型选择器数；Strict 模式限制类型选择器数量，但允许子选择器、后代选择器和复合选择器
   * @value array - [最大数量, { ignore: [...] }]（Strict 配置为 2，覆盖 Base 的 null）
   * @secondary ignore: ['child', 'descendant', 'compounded'] - 允许子选择器、后代选择器和复合选择器
   * @example ✅ 正确示例：
   *  - div > span {}
   *  - div span {}
   * @example ❌ 错误示例：
   *  - div span p {}                            (超过限制)
   */
  'selector-max-type': [
    2,
    { ignore: ['child', 'descendant', 'compounded'] },
  ],

  /**
   * @name selector-max-universal
   * @description 选择器最大通配符数；Strict 模式禁止使用通配符选择器
   * @value number - 最大数量（Strict 配置为 0，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .class {}
   * @example ❌ 错误示例：
   *  - * {}                                     (不应使用通配符)
   */
  'selector-max-universal': 0,

  /**
   * @name selector-no-qualifying-type
   * @description 禁止选择器限定类型；Strict 模式禁止使用类型选择器限定类或 ID，但允许属性选择器和类选择器
   * @value array - [true, { ignore: [...] }]（Strict 配置，覆盖 Base 的 null）
   * @secondary ignore: ['attribute', 'class'] - 允许属性选择器和类选择器限定类型
   * @example ✅ 正确示例：
   *  - .class {}
   *  - [type='text'].class {}
   * @example ❌ 错误示例：
   *  - div.class {}                             (应只用 .class)
   *  - div#id {}                                (应只用 #id)
   */
  'selector-no-qualifying-type': [
    true,
    {
      ignore: ['attribute', 'class'],
    },
  ],

  /**
   * @name selector-max-class
   * @description 选择器最大类选择器数；Strict 模式限制类选择器数量
   * @value number - 最大数量（Strict 配置为 4，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .a.b.c.d {}
   * @example ❌ 错误示例：
   *  - .a.b.c.d.e {}                            (超过限制)
   */
  'selector-max-class': 4,

  /**
   * @name selector-max-combinators
   * @description 选择器最大组合器数；Strict 模式限制组合器数量，防止选择器过于复杂
   * @value number - 最大数量（Strict 配置为 3，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - a > b + c {}
   * @example ❌ 错误示例：
   *  - a > b + c ~ d {}                         (超过限制)
   */
  'selector-max-combinators': 3,

  /**
   * @name selector-max-pseudo-class
   * @description 选择器最大伪类数；Strict 模式限制伪类数量
   * @value number - 最大数量（Strict 配置为 3，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - a:hover:focus:active {}
   * @example ❌ 错误示例：
   *  - a:hover:focus:active:visited {}          (超过限制)
   */
  'selector-max-pseudo-class': 3,

  /**
   * @name selector-max-attribute
   * @description 选择器最大属性选择器数；Strict 模式限制属性选择器数量
   * @value number - 最大数量（Strict 配置为 2，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - [type='text'][required] {}
   * @example ❌ 错误示例：
   *  - [type='text'][required][disabled] {}     (超过限制)
   */
  'selector-max-attribute': 2,

  /**
   * @name selector-type-no-unknown
   * @description 禁止未知类型选择器；Strict 模式完全禁止未知类型选择器，不允许自定义元素
   * @value true - 启用，禁止未知类型选择器（Strict 配置，覆盖 Base 的允许自定义元素）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - div {}
   *  - span {}
   * @example ❌ 错误示例：
   *  - unknown-element {}                       (不存在的元素)
   */
  'selector-type-no-unknown': true,

  /**
   * @name selector-disallowed-list
   * @description 选择器黑名单；Strict 模式禁止使用通配符选择器
   * @value array - 字符串数组，禁止的选择器模式（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .class {}
   *  - #id {}
   * @example ❌ 错误示例：
   *  - * {}                                     (通配符在黑名单中)
   *  - * .class {}                              (包含通配符)
   */
  'selector-disallowed-list': ['/^\\*/'],
};
