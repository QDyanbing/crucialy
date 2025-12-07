/**
 * Selector 相关规则
 *
 * 包含选择器格式、复杂度限制等规则（28条）
 * - 选择器命名模式
 * - 选择器复杂度限制（max-*）
 * - 选择器验证（未知类型、伪类、伪元素）
 * - 选择器格式（引号、大小写、表示法）
 * - 选择器白名单/黑名单
 */

import type { Config } from 'stylelint';

export const selectorRules: Config['rules'] = {
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
   * @description 选择器类名命名模式；规范类选择器的命名风格
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^[a-z]+(-[a-z]+)*$' 强制 kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - .my-class {}
   *  - .myClass {}
   * @example ❌ 错误示例（假设配置为 '^[a-z]+(-[a-z]+)*$'）：
   *  - .myClass {}                            (不是 kebab-case，应使用 .my-class)
   */
  'selector-class-pattern': null,

  /**
   * @name selector-id-pattern
   * @description 选择器 ID 命名模式；规范 ID 选择器的命名风格
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^[a-z]+(-[a-z]+)*$' 强制 kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - #my-id {}
   * @example ❌ 错误示例（假设配置为 '^[a-z]+(-[a-z]+)*$'）：
   *  - #myId {}                               (不是 kebab-case，应使用 #my-id)
   */
  'selector-id-pattern': null,

  /**
   * @name selector-nested-pattern
   * @description 嵌套选择器模式；规范嵌套选择器的命名风格
   * @value null - 不限制
   * @value regex - 正则表达式字符串
   * @example ✅ 正确示例（null 时）：
   *  - .parent { .child { } }
   */
  'selector-nested-pattern': null,

  /**
   * @name selector-max-attribute
   * @description 选择器最大属性选择器数；限制选择器中属性选择器的数量
   * @value null - 不限制
   * @value number - 最大数量（如：2 表示最多 2 个属性选择器）
   * @example ✅ 正确示例（null 时）：
   *  - [type='text'][required]
   * @example ❌ 错误示例（假设配置为 1）：
   *  - [type='text'][required]                (超过限制)
   */
  'selector-max-attribute': null,

  /**
   * @name selector-max-class
   * @description 选择器最大类选择器数；限制选择器中类选择器的数量
   * @value null - 不限制
   * @value number - 最大数量（如：3 表示最多 3 个类选择器）
   * @example ✅ 正确示例（null 时）：
   *  - .a.b.c {}
   * @example ❌ 错误示例（假设配置为 2）：
   *  - .a.b.c {}                              (超过限制)
   */
  'selector-max-class': null,

  /**
   * @name selector-max-combinators
   * @description 选择器最大组合器数；限制选择器中组合器（> + ~ 空格）的数量
   * @value null - 不限制
   * @value number - 最大数量（如：3 表示最多 3 个组合器）
   * @example ✅ 正确示例（null 时）：
   *  - a > b + c ~ d {}
   * @example ❌ 错误示例（假设配置为 2）：
   *  - a > b + c {}                           (超过限制)
   */
  'selector-max-combinators': null,

  /**
   * @name selector-max-compound-selectors
   * @description 选择器最大复合选择器数；限制选择器中复合选择器的数量
   * @value null - 不限制
   * @value number - 最大数量（如：3 表示最多 3 层）
   * @example ✅ 正确示例（null 时）：
   *  - .a .b .c {}
   * @example ❌ 错误示例（假设配置为 2）：
   *  - .a .b .c {}                            (超过限制)
   */
  'selector-max-compound-selectors': null,

  /**
   * @name selector-max-id
   * @description 选择器最大 ID 选择器数；限制选择器中 ID 选择器的数量，建议设为 0 或 1
   * @value null - 不限制
   * @value number - 最大数量（如：1 表示最多 1 个 ID 选择器）
   * @example ✅ 正确示例（null 时）：
   *  - #id {}
   * @example ❌ 错误示例（假设配置为 0）：
   *  - #id {}                                 (不应使用 ID 选择器)
   */
  'selector-max-id': null,

  /**
   * @name selector-max-pseudo-class
   * @description 选择器最大伪类数；限制选择器中伪类的数量
   * @value null - 不限制
   * @value number - 最大数量
   * @example ✅ 正确示例（null 时）：
   *  - a:hover:focus {}
   * @example ❌ 错误示例（假设配置为 1）：
   *  - a:hover:focus {}                       (超过限制)
   */
  'selector-max-pseudo-class': null,

  /**
   * @name selector-max-specificity
   * @description 选择器最大特异性；限制选择器的特异性值
   * @value null - 不限制
   * @value string - 特异性字符串（如：'0,3,0' 表示最多 3 个类选择器）
   * @example ✅ 正确示例（null 时）：
   *  - .a.b.c {}
   * @example ❌ 错误示例（假设配置为 '0,2,0'）：
   *  - .a.b.c {}                              (特异性超过限制)
   */
  'selector-max-specificity': null,

  /**
   * @name selector-max-type
   * @description 选择器最大类型选择器数；限制选择器中类型选择器的数量
   * @value null - 不限制
   * @value number - 最大数量
   * @example ✅ 正确示例（null 时）：
   *  - div span p {}
   * @example ❌ 错误示例（假设配置为 2）：
   *  - div span p {}                          (超过限制)
   */
  'selector-max-type': null,

  /**
   * @name selector-max-universal
   * @description 选择器最大通配符数；限制选择器中通配符（*）的数量
   * @value null - 不限制
   * @value number - 最大数量
   * @example ✅ 正确示例（null 时）：
   *  - * {}
   * @example ❌ 错误示例（假设配置为 0）：
   *  - * {}                                   (不应使用通配符)
   */
  'selector-max-universal': null,

  /**
   * @name selector-no-qualifying-type
   * @description 禁止选择器限定类型；禁止使用类型选择器限定类或 ID 选择器
   * @value null - 允许限定类型
   * @value true - 禁止限定类型
   * @example ✅ 正确示例（null 时）：
   *  - .class {}
   *  - div.class {}
   * @example ❌ 错误示例（假设配置为 true）：
   *  - div.class {}                           (应只用 .class)
   */
  'selector-no-qualifying-type': null,

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
   * @description 禁止未知类型选择器；检查类型选择器是否为标准的 HTML 元素或已配置的自定义元素
   * @value true - 启用，禁止未知类型选择器
   * @value false - 禁用此规则
   * @secondary ignore: ['custom-elements'] - 允许 Web Components 自定义元素
   * @example ✅ 正确示例：
   *  - div {}
   *  - my-component {}                        (Web Components)
   * @example ❌ 错误示例：
   *  - unknown-typo-element {}                (不存在的元素)
   */
  'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],

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
   * @description 选择器黑名单；禁止使用匹配特定模式的选择器（支持正则）
   * @value null - 不限制，不禁止任何选择器
   * @value array - 字符串数组，禁止的选择器模式（如：['/^#/'] 禁止 ID 选择器）
   * @example ✅ 正确示例（null 时）：
   *  - #id {}
   * @example ❌ 错误示例（假设配置为 ['/^#/']）：
   *  - #id {}                                 (ID 选择器在黑名单中)
   */
  'selector-disallowed-list': null,

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
