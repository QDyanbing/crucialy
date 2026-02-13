/**
 * Selector 相关规则
 *
 * 包含选择器格式、复杂度限制等规则（28条）
 * - 选择器命名模式：统一命名规范（如 BEM）
 * - 选择器复杂度限制：避免过度复杂的选择器
 * - 选择器验证：确保选择器语法正确
 * - 选择器格式：统一格式风格
 * - 选择器白名单/黑名单：控制允许的选择器
 */

import type { Config } from 'stylelint';

const selectorRules: Config['rules'] = {
  /**
   * @name selector-attribute-quotes
   * @description 要求选择器属性值使用引号
   * @value 'always' - 必须使用引号
   * @value 'never' - 禁止使用引号
   * @example ✅ 正确示例：
   *  - [type='text']
   * @example ❌ 错误示例：
   *  - [type=text]                            (缺少引号)
   */
  'selector-attribute-quotes': 'always',

  /**
   * @name selector-class-pattern
   * @description 选择器类名命名模式；Strict 模式强制使用 BEM 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 BEM，覆盖 Base 的 null）
   * @secondary resolveNestedSelectors: true - 解析嵌套选择器，确保嵌套中的类名也符合规范
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
      resolveNestedSelectors: true,
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
   * @name selector-max-specificity
   * @description 选择器最大特异性；Strict 模式限制选择器特异性，防止过度嵌套
   * @value string - 特异性字符串（Strict 配置为 '0,3,1'，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - .a.b.c {}
   *  - .a.b.c:hover {}
   * @example ❌ 错误示例：
   *  - .a.b.c.d {}                              (特异性超过 0,3,1)
   */
  'selector-max-specificity': '0,3,1',

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
  'selector-max-type': [2, { ignore: ['child', 'descendant', 'compounded'] }],

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
   * @name selector-no-vendor-prefix
   * @description 禁止选择器使用 vendor prefix；应该使用标准的伪元素选择器
   * @value true - 启用，禁止厂商前缀
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - ::placeholder {}
   * @example ❌ 错误示例：
   *  - ::-webkit-input-placeholder {}         (应使用标准语法)
   */
  'selector-no-vendor-prefix': true,

  /**
   * @name selector-not-notation
   * @description :not() 的表示法；指定 :not() 伪类的表示方式
   * @value 'simple' - 简单形式（:not(a)）
   * @value 'complex' - 复杂形式（:not(a, b)）
   * @example ✅ 正确示例（complex）：
   *  - :not(.a, .b) {}
   * @example ❌ 错误示例（假设配置为 'complex'）：
   *  - :not(.a):not(.b) {}                    (应合并为 :not(.a, .b))
   */
  'selector-not-notation': 'complex',

  /**
   * @name selector-pseudo-class-no-unknown
   * @description 禁止未知伪类；检查伪类是否为标准的 CSS 伪类
   * @value true - 启用，禁止未知伪类
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a:hover {}
   * @example ❌ 错误示例：
   *  - a:unknown {}                           (不存在的伪类)
   */
  'selector-pseudo-class-no-unknown': true,

  /**
   * @name selector-pseudo-element-colon-notation
   * @description 伪元素使用双冒号；规范伪元素的冒号表示法
   * @value 'double' - 使用双冒号（::）
   * @value 'single' - 使用单冒号（:）
   * @example ✅ 正确示例：
   *  - ::before {}
   * @example ❌ 错误示例（假设配置为 'double'）：
   *  - :before {}                             (应使用双冒号 ::before)
   */
  'selector-pseudo-element-colon-notation': 'double',

  /**
   * @name selector-pseudo-element-no-unknown
   * @description 禁止未知伪元素；检查伪元素是否为标准的 CSS 伪元素
   * @value true - 启用，禁止未知伪元素
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - ::before {}
   * @example ❌ 错误示例：
   *  - ::unknown {}                           (不存在的伪元素)
   */
  'selector-pseudo-element-no-unknown': true,

  /**
   * @name selector-type-case
   * @description 选择器类型使用小写；规范类型选择器的大小写
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - div {}
   * @example ❌ 错误示例：
   *  - DIV {}                                 (应使用小写 div)
   */
  'selector-type-case': 'lower',

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
   * @name selector-attribute-name-disallowed-list
   * @description 选择器属性名黑名单；禁止使用特定的属性名选择器
   * @value null - 不限制，不禁止任何属性名
   * @value array - 字符串数组，禁止的属性名列表（如：['id', 'class']）
   * @example ✅ 正确示例（null 时）：
   *  - [type='text']
   * @example ❌ 错误示例（假设配置为 ['id']）：
   *  - [id='foo']                             (id 在黑名单中)
   */
  'selector-attribute-name-disallowed-list': null,

  /**
   * @name selector-attribute-operator-allowed-list
   * @description 选择器属性运算符白名单；限制只能使用特定的属性运算符（= ^= $= *= ~= |=）
   * @value null - 不限制，允许所有运算符
   * @value array - 字符串数组，允许的运算符列表（如：['=']）
   * @example ✅ 正确示例（null 时）：
   *  - [type^='text']
   * @example ❌ 错误示例（假设配置为 ['=']）：
   *  - [type^='text']                         (^= 不在白名单中)
   */
  'selector-attribute-operator-allowed-list': null,

  /**
   * @name selector-attribute-operator-disallowed-list
   * @description 选择器属性运算符黑名单；禁止使用特定的属性运算符
   * @value null - 不限制，不禁止任何运算符
   * @value array - 字符串数组，禁止的运算符列表（如：['*=']）
   * @example ✅ 正确示例（null 时）：
   *  - [type*='text']
   * @example ❌ 错误示例（假设配置为 ['*=']）：
   *  - [type*='text']                         (*= 在黑名单中)
   */
  'selector-attribute-operator-disallowed-list': null,

  /**
   * @name selector-combinator-allowed-list
   * @description 选择器组合器白名单；限制只能使用特定的组合器（> + ~ 空格）
   * @value null - 不限制，允许所有组合器
   * @value array - 字符串数组，允许的组合器列表（如：['>', ' ']）
   * @example ✅ 正确示例（null 时）：
   *  - a + b {}
   * @example ❌ 错误示例（假设配置为 ['>', ' ']）：
   *  - a + b {}                               (+ 不在白名单中)
   */
  'selector-combinator-allowed-list': null,

  /**
   * @name selector-combinator-disallowed-list
   * @description 选择器组合器黑名单；禁止使用特定的组合器
   * @value null - 不限制，不禁止任何组合器
   * @value array - 字符串数组，禁止的组合器列表（如：['~']）
   * @example ✅ 正确示例（null 时）：
   *  - a ~ b {}
   * @example ❌ 错误示例（假设配置为 ['~']）：
   *  - a ~ b {}                               (~ 在黑名单中)
   */
  'selector-combinator-disallowed-list': null,

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

  /**
   * @name selector-pseudo-class-allowed-list
   * @description 伪类白名单；限制只能使用特定的伪类
   * @value null - 不限制，允许所有伪类
   * @value array - 字符串数组，允许的伪类列表（如：['hover', 'focus']）
   * @example ✅ 正确示例（null 时）：
   *  - a:active {}
   * @example ❌ 错误示例（假设配置为 ['hover', 'focus']）：
   *  - a:active {}                            (active 不在白名单中)
   */
  'selector-pseudo-class-allowed-list': null,

  /**
   * @name selector-pseudo-class-disallowed-list
   * @description 伪类黑名单；禁止使用特定的伪类
   * @value null - 不限制，不禁止任何伪类
   * @value array - 字符串数组，禁止的伪类列表（如：['nth-child']）
   * @example ✅ 正确示例（null 时）：
   *  - li:nth-child(2) {}
   * @example ❌ 错误示例（假设配置为 ['nth-child']）：
   *  - li:nth-child(2) {}                     (nth-child 在黑名单中)
   */
  'selector-pseudo-class-disallowed-list': null,

  /**
   * @name selector-pseudo-element-allowed-list
   * @description 伪元素白名单；限制只能使用特定的伪元素
   * @value null - 不限制，允许所有伪元素
   * @value array - 字符串数组，允许的伪元素列表（如：['before', 'after']）
   * @example ✅ 正确示例（null 时）：
   *  - ::placeholder {}
   * @example ❌ 错误示例（假设配置为 ['before', 'after']）：
   *  - ::placeholder {}                       (placeholder 不在白名单中)
   */
  'selector-pseudo-element-allowed-list': null,

  /**
   * @name selector-pseudo-element-disallowed-list
   * @description 伪元素黑名单；禁止使用特定的伪元素
   * @value null - 不限制，不禁止任何伪元素
   * @value array - 字符串数组，禁止的伪元素列表（如：['selection']）
   * @example ✅ 正确示例（null 时）：
   *  - ::selection {}
   * @example ❌ 错误示例（假设配置为 ['selection']）：
   *  - ::selection {}                         (selection 在黑名单中)
   */
  'selector-pseudo-element-disallowed-list': null,

  /**
   * @name selector-anb-no-unmatchable
   * @description :nth-child() 等选择器禁止不可匹配的表达式；禁止使用永远无法匹配到元素的表达式
   * @value true - 启用，禁止不可匹配的表达式
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - :nth-child(2n+1) {}
   * @example ❌ 错误示例：
   *  - :nth-child(0n+0) {}                    (永远不匹配任何元素)
   */
  'selector-anb-no-unmatchable': true,
};

export default selectorRules;
