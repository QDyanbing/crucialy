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

export const selectorRules = {
  /**
   * selector-attribute-quotes
   * 选择器属性值必须使用引号
   * ✅ [type='text']
   * ❌ [type=text]
   */
  'selector-attribute-quotes': 'always',
  
  /**
   * selector-class-pattern
   * 选择器类名模式（正则）
   * null: 不限制命名
   * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
   * ✅ .my-class {} (null 时允许)
   * ✅ .myClass {} (null 时允许)
   */
  'selector-class-pattern': null,
  
  /**
   * selector-id-pattern
   * 选择器 ID 模式（正则）
   * null: 不限制命名
   * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
   */
  'selector-id-pattern': null,
  
  /**
   * selector-nested-pattern
   * 嵌套选择器模式（正则）
   * null: 不限制
   */
  'selector-nested-pattern': null,
  
  /**
   * selector-max-attribute
   * 选择器最大属性选择器数
   * null: 不限制 | 数字: 最多n个
   * 例: 2 - 最多2个属性选择器
   */
  'selector-max-attribute': null,
  
  /**
   * selector-max-class
   * 选择器最大类选择器数
   * null: 不限制
   * 例: 3 - 最多3个类选择器
   */
  'selector-max-class': null,
  
  /**
   * selector-max-combinators
   * 选择器最大组合器数（> + ~ 空格）
   * null: 不限制
   * 例: 3 - 最多3个组合器
   */
  'selector-max-combinators': null,
  
  /**
   * selector-max-compound-selectors
   * 选择器最大复合选择器数
   * null: 不限制
   * 例: 3 - .a .b .c 最多3层
   */
  'selector-max-compound-selectors': null,
  
  /**
   * selector-max-id
   * 选择器最大 ID 选择器数
   * null: 不限制 | 建议设为 0 或 1
   */
  'selector-max-id': null,
  
  /**
   * selector-max-pseudo-class
   * 选择器最大伪类数
   * null: 不限制
   */
  'selector-max-pseudo-class': null,
  
  /**
   * selector-max-specificity
   * 选择器最大特异性
   * null: 不限制
   * 例: '0,3,0' - 最多3个类选择器
   */
  'selector-max-specificity': null,
  
  /**
   * selector-max-type
   * 选择器最大类型选择器数
   * null: 不限制
   */
  'selector-max-type': null,
  
  /**
   * selector-max-universal
   * 选择器最大通配符数
   * null: 不限制
   */
  'selector-max-universal': null,
  
  /**
   * selector-no-qualifying-type
   * 禁止选择器限定类型
   * null: 允许 | true: 禁止
   * ✅ .class {} (null 时允许)
   * ✅ div.class {} (null 时允许)
   * ❌ div.class {} (true 时禁止，应该只用 .class)
   */
  'selector-no-qualifying-type': null,
  
  /**
   * selector-no-vendor-prefix
   * 禁止选择器使用 vendor prefix
   * ✅ ::placeholder {}
   * ❌ ::-webkit-input-placeholder {}
   */
  'selector-no-vendor-prefix': true,
  
  /**
   * selector-not-notation
   * :not() 的表示法
   * simple: :not(a) | complex: :not(a, b)
   * ✅ :not(.a, .b) (complex)
   * ❌ :not(.a):not(.b) (complex 时应该合并)
   */
  'selector-not-notation': 'complex',
  
  /**
   * selector-pseudo-class-no-unknown
   * 禁止未知伪类
   * ✅ a:hover {}
   * ❌ a:unknown {}
   */
  'selector-pseudo-class-no-unknown': true,
  
  /**
   * selector-pseudo-element-colon-notation
   * 伪元素使用双冒号
   * double: :: | single: :
   * ✅ ::before
   * ❌ :before
   */
  'selector-pseudo-element-colon-notation': 'double',
  
  /**
   * selector-pseudo-element-no-unknown
   * 禁止未知伪元素
   * ✅ ::before {}
   * ❌ ::unknown {}
   */
  'selector-pseudo-element-no-unknown': true,
  
  /**
   * selector-type-case
   * 选择器类型使用小写
   * ✅ div {}
   * ❌ DIV {}
   */
  'selector-type-case': 'lower',
  
  /**
   * selector-type-no-unknown
   * 禁止未知类型选择器
   * ignore: ['custom-elements'] - 允许 Web Components 自定义元素
   * ✅ div {}
   * ✅ my-component {} (Web Components)
   * ❌ unknown-typo-element {}
   */
  'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
  
  /**
   * selector-attribute-name-disallowed-list
   * 选择器属性名黑名单
   * null: 不限制
   * 例: ['id', 'class'] - 禁止 [id] 和 [class] 属性选择器
   * ✅ [type='text'] (null 时允许)
   * ❌ [id='foo'] (配置黑名单时禁止)
   */
  'selector-attribute-name-disallowed-list': null,
  
  /**
   * selector-attribute-operator-allowed-list
   * 选择器属性运算符白名单（= ^= $= *= ~= |=）
   * null: 允许所有运算符
   * 例: ['='] - 只允许精确匹配 =
   */
  'selector-attribute-operator-allowed-list': null,
  
  /**
   * selector-attribute-operator-disallowed-list
   * 选择器属性运算符黑名单
   * null: 不禁止任何运算符
   * 例: ['*='] - 禁止包含匹配 *=
   */
  'selector-attribute-operator-disallowed-list': null,
  
  /**
   * selector-combinator-allowed-list
   * 选择器组合器白名单（> + ~ 空格）
   * null: 允许所有组合器
   * 例: ['>', ' '] - 只允许子选择器和后代选择器
   */
  'selector-combinator-allowed-list': null,
  
  /**
   * selector-combinator-disallowed-list
   * 选择器组合器黑名单
   * null: 不禁止任何组合器
   * 例: ['~'] - 禁止通用兄弟选择器
   */
  'selector-combinator-disallowed-list': null,
  
  /**
   * selector-disallowed-list
   * 选择器黑名单（正则）
   * null: 不禁止任何选择器
   * 例: ['/^#/'] - 禁止 ID 选择器
   */
  'selector-disallowed-list': null,
  
  /**
   * selector-pseudo-class-allowed-list
   * 伪类白名单
   * null: 允许所有伪类
   * 例: ['hover', 'focus'] - 只允许 :hover 和 :focus
   */
  'selector-pseudo-class-allowed-list': null,
  
  /**
   * selector-pseudo-class-disallowed-list
   * 伪类黑名单
   * null: 不禁止任何伪类
   * 例: ['nth-child'] - 禁止 :nth-child()
   */
  'selector-pseudo-class-disallowed-list': null,
  
  /**
   * selector-pseudo-element-allowed-list
   * 伪元素白名单
   * null: 允许所有伪元素
   * 例: ['before', 'after'] - 只允许 ::before 和 ::after
   */
  'selector-pseudo-element-allowed-list': null,
  
  /**
   * selector-pseudo-element-disallowed-list
   * 伪元素黑名单
   * null: 不禁止任何伪元素
   * 例: ['selection'] - 禁止 ::selection
   */
  'selector-pseudo-element-disallowed-list': null,
  
  /**
   * selector-anb-no-unmatchable
   * :nth-child() 等选择器禁止不可匹配的表达式
   * ✅ :nth-child(2n+1) {}
   * ❌ :nth-child(0n+0) {} (永远不匹配)
   */
  'selector-anb-no-unmatchable': true,
  
};
