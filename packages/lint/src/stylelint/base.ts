/**
 * Base Stylelint configuration
 * All core rules explicitly configured
 * Zero preset policy
 */

import type { StylelintConfig } from './types';

// 规则集用于后续检查规则完整性
// import { coreRules } from '../stylelint-rule-sets/core';
// import { stylisticRules } from '../stylelint-rule-sets/stylistic';
// import { orderRules } from '../stylelint-rule-sets/order';

export const base: StylelintConfig = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    // ============================================
    // Color 相关规则
    // ============================================
    
    /**
     * alpha-value-notation
     * 指定 alpha 值的表示法
     * percentage: 使用百分比 | number: 使用数字 0-1
     * ✅ rgba(0, 0, 0, 50%)
     * ❌ rgba(0, 0, 0, 0.5)
     */
    'alpha-value-notation': 'percentage',
    
    /**
     * color-function-notation
     * 指定颜色函数的表示法
     * modern: rgb(0 0 0 / 50%) | legacy: rgba(0, 0, 0, 0.5)
     * null: 不限制（Base 设为 null 以兼容 Less 等预处理器）
     * ✅ rgb(0 0 0 / 50%) (null 时允许)
     * ✅ rgba(0, 0, 0, 0.5) (null 时允许)
     */
    'color-function-notation': null,
    
    /**
     * color-function-alias-notation
     * 指定颜色函数别名（hsl/hsla/rgb/rgba）
     * null: 不限制
     */
    'color-function-alias-notation': null,
    
    /**
     * color-hex-alpha
     * 禁止或要求 hex 颜色使用 alpha 通道
     * null: 不限制 | always: 必须使用 | never: 禁止使用
     * ✅ #fff (null 时允许)
     * ✅ #ffffff80 (null 时允许)
     */
    'color-hex-alpha': null,
    
    /**
     * color-hex-length
     * 指定 hex 颜色的长度
     * short: #fff | long: #ffffff
     * ✅ #fff
     * ❌ #ffffff
     */
    'color-hex-length': 'short',
    
    /**
     * color-named
     * 要求或禁止命名颜色
     * null: 不限制 | never: 禁止 | always-where-possible: 尽可能使用
     * ✅ #000 (null 时允许)
     * ✅ black (null 时允许)
     */
    'color-named': null,
    
    /**
     * color-no-hex
     * 禁止使用 hex 颜色
     * null: 允许使用 hex
     * ✅ #fff (null 时允许)
     * ✅ rgb(255 255 255) (null 时允许)
     */
    'color-no-hex': null,
    
    /**
     * color-no-invalid-hex
     * 禁止无效的 hex 颜色
     * ✅ #fff
     * ❌ #fffffffff (无效)
     */
    'color-no-invalid-hex': true,
    
    // ============================================
    // Length 相关规则
    // ============================================
    
    /**
     * length-zero-no-unit
     * 禁止零值长度带单位
     * ✅ margin: 0;
     * ❌ margin: 0px;
     * ignore: ['custom-properties'] - 自定义属性例外
     */
    'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
    
    // ============================================
    // Font 相关规则
    // ============================================
    
    /**
     * font-family-name-quotes
     * 要求字体名称使用引号
     * always-where-recommended: 有空格或特殊字符时使用引号
     * ✅ font-family: 'Times New Roman', serif;
     * ✅ font-family: Arial, sans-serif;
     * ❌ font-family: Times New Roman, serif;
     */
    'font-family-name-quotes': 'always-where-recommended',
    
    /**
     * font-family-no-duplicate-names
     * 禁止重复的字体名称
     * ✅ font-family: Arial, sans-serif;
     * ❌ font-family: Arial, Arial, sans-serif;
     */
    'font-family-no-duplicate-names': true,
    
    /**
     * font-family-no-missing-generic-family-keyword
     * 禁止缺少通用字体族关键字（serif/sans-serif/monospace 等）
     * null: 不要求（Base 设为 null 以支持 iconfont 等特殊字体）
     * ✅ font-family: Arial, sans-serif; (null 时允许)
     * ✅ font-family: 'iconfont'; (null 时允许)
     */
    'font-family-no-missing-generic-family-keyword': null,
    
    /**
     * font-weight-notation
     * 指定 font-weight 的表示法
     * numeric: 使用数字 | named-where-possible: 尽可能使用命名
     * ✅ font-weight: 700;
     * ❌ font-weight: bold;
     * ignore: ['relative'] - bolder/lighter 例外
     */
    'font-weight-notation': ['numeric', { ignore: ['relative'] }],
    
    // ============================================
    // Function 相关规则
    // ============================================
    
    /**
     * function-calc-no-unspaced-operator
     * calc() 函数运算符周围必须有空格
     * ✅ calc(100% - 20px)
     * ❌ calc(100%-20px)
     */
    'function-calc-no-unspaced-operator': true,
    
    /**
     * function-linear-gradient-no-nonstandard-direction
     * 禁止线性渐变使用非标准方向语法
     * ✅ linear-gradient(to right, #fff, #000)
     * ❌ linear-gradient(left, #fff, #000)
     */
    'function-linear-gradient-no-nonstandard-direction': true,
    
    /**
     * function-name-case
     * 函数名小写
     * ✅ calc(100% - 20px)
     * ❌ CALC(100% - 20px)
     */
    'function-name-case': 'lower',
    
    /**
     * function-no-unknown
     * 禁止未知函数
     * ✅ calc(), rgba(), var()
     * ❌ unknown-function()
     */
    'function-no-unknown': true,
    
    /**
     * function-url-quotes
     * URL 必须使用引号
     * ✅ url('image.png')
     * ❌ url(image.png)
     */
    'function-url-quotes': 'always',
    
    /**
     * function-url-no-scheme-relative
     * 禁止 scheme-relative URL
     * null: 不限制
     * ✅ url('//example.com/image.png') (null 时允许)
     */
    'function-url-no-scheme-relative': null,
    
    /**
     * function-url-scheme-allowed-list
     * URL scheme 白名单
     * null: 不限制
     * 例: ['https', 'data'] - 只允许 https 和 data
     */
    'function-url-scheme-allowed-list': null,
    
    /**
     * function-url-scheme-disallowed-list
     * URL scheme 黑名单
     * null: 不限制
     * 例: ['http'] - 禁止 http
     */
    'function-url-scheme-disallowed-list': null,
    
    /**
     * function-allowed-list
     * 函数白名单
     * null: 允许所有函数
     */
    'function-allowed-list': null,
    
    /**
     * function-disallowed-list
     * 函数黑名单
     * null: 不禁止任何函数
     */
    'function-disallowed-list': null,
    
    // ============================================
    // Number / Unit 相关规则
    // ============================================
    
    /**
     * number-max-precision
     * 数字最大小数位数
     * ✅ width: 1.2345%;
     * ❌ width: 1.23456%; (超过4位)
     */
    'number-max-precision': 4,
    
    /**
     * unit-no-unknown
     * 禁止未知单位
     * ✅ width: 100px;
     * ❌ width: 100unknown;
     */
    'unit-no-unknown': true,
    
    /**
     * unit-allowed-list
     * 单位白名单
     * null: 允许所有单位
     * 例: ['px', 'em', '%'] - 只允许这些单位
     */
    'unit-allowed-list': null,
    
    /**
     * unit-disallowed-list
     * 单位黑名单
     * null: 不禁止任何单位
     * 例: ['pt'] - 禁止 pt 单位
     */
    'unit-disallowed-list': null,
    
    // ============================================
    // String 相关规则
    // ============================================
    
    /**
     * string-no-newline
     * 字符串中禁止换行符
     * ✅ content: 'hello';
     * ❌ content: 'hello
     *     world';
     */
    'string-no-newline': true,
    
    // ============================================
    // Time 相关规则
    // ============================================
    
    /**
     * time-min-milliseconds
     * 时间最小毫秒数
     * null: 不限制
     * 例: 100 - 禁止小于 100ms 的时间值
     */
    'time-min-milliseconds': null,
    
    // ============================================
    // Value 相关规则
    // ============================================
    
    /**
     * value-keyword-case
     * 值关键字使用小写
     * ✅ display: block;
     * ❌ display: BLOCK;
     * camelCaseSvgKeywords: true - SVG 关键字保持驼峰（如 viewBox）
     */
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    
    /**
     * value-no-vendor-prefix
     * 禁止值使用 vendor prefix（应该用 autoprefixer）
     * ✅ display: flex;
     * ❌ display: -webkit-box;
     * ignoreValues: ['box', 'inline-box'] - 某些值例外
     */
    'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
    
    // ============================================
    // Custom property 相关规则
    // ============================================
    
    /**
     * custom-property-pattern
     * 自定义属性命名模式（正则）
     * null: 不限制命名
     * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
     * ✅ --my-color: red; (null 时允许)
     */
    'custom-property-pattern': null,
    
    /**
     * custom-property-empty-line-before
     * 自定义属性前是否需要空行
     * null: 不限制
     */
    'custom-property-empty-line-before': null,
    
    /**
     * custom-property-no-missing-var-function
     * 禁止直接使用自定义属性（需用 var() 包裹）
     * ✅ color: var(--my-color);
     * ❌ color: --my-color;
     */
    'custom-property-no-missing-var-function': true,
    
    // ============================================
    // Shorthand property 相关规则
    // ============================================
    
    /**
     * shorthand-property-no-redundant-values
     * 禁止简写属性的冗余值
     * ✅ margin: 10px 20px;
     * ❌ margin: 10px 20px 10px 20px;
     */
    'shorthand-property-no-redundant-values': true,
    
    // ============================================
    // Property 相关规则
    // ============================================
    
    /**
     * property-no-unknown
     * 禁止未知属性
     * ✅ display: flex;
     * ❌ unknown-prop: value;
     */
    'property-no-unknown': true,
    
    /**
     * property-no-deprecated
     * 禁止已弃用的属性
     * ✅ overflow: hidden;
     * ❌ overflow-x: -moz-hidden-unscrollable; (已弃用)
     */
    'property-no-deprecated': true,
    
    /**
     * property-no-vendor-prefix
     * 禁止属性使用 vendor prefix（应该用 autoprefixer）
     * ✅ transform: scale(1);
     * ❌ -webkit-transform: scale(1);
     */
    'property-no-vendor-prefix': true,
    
    /**
     * property-allowed-list
     * 属性白名单
     * null: 允许所有属性
     * 例: ['display', 'color'] - 只允许这些属性
     */
    'property-allowed-list': null,
    
    /**
     * property-disallowed-list
     * 属性黑名单
     * null: 不禁止任何属性
     * 例: ['float'] - 禁止 float 属性
     */
    'property-disallowed-list': null,
    
    // ============================================
    // Keyframe 相关规则
    // ============================================
    
    /**
     * keyframe-selector-notation
     * keyframe 选择器表示法
     * percentage: 0%, 100% | keyword: from, to
     * percentage-unless-within-keyword-only-block: 除非只有关键字，否则用百分比
     * ✅ @keyframes { 0% {} 100% {} }
     * ✅ @keyframes { from {} to {} }
     */
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    
    /**
     * keyframe-block-no-duplicate-selectors
     * keyframe 块中禁止重复选择器
     * ✅ @keyframes { 0% {} 100% {} }
     * ❌ @keyframes { 0% {} 0% {} }
     */
    'keyframe-block-no-duplicate-selectors': true,
    
    /**
     * keyframe-declaration-no-important
     * keyframe 声明禁止 !important
     * ✅ @keyframes { 0% { color: red; } }
     * ❌ @keyframes { 0% { color: red !important; } }
     */
    'keyframe-declaration-no-important': true,
    
    /**
     * keyframes-name-pattern
     * keyframes 名称模式（正则）
     * null: 不限制
     * 例: '^[a-z]+(-[a-z]+)*$' - kebab-case
     */
    'keyframes-name-pattern': null,
    
    // ============================================
    // Declaration 相关规则
    // ============================================
    
    /**
     * declaration-block-no-duplicate-custom-properties
     * 声明块禁止重复自定义属性
     * ✅ .a { --color: red; }
     * ❌ .a { --color: red; --color: blue; }
     */
    'declaration-block-no-duplicate-custom-properties': true,
    
    /**
     * declaration-block-no-duplicate-properties
     * 声明块禁止重复属性
     * ✅ a { color: red; }
     * ❌ a { color: red; color: blue; }
     * ignore: ['consecutive-duplicates-with-different-values']
     * 允许连续不同值的重复（用于 fallback）
     */
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values'] },
    ],
    
    /**
     * declaration-block-no-redundant-longhand-properties
     * 禁止冗余的 longhand 属性（应该用简写）
     * ✅ margin: 1px 2px;
     * ❌ margin-top: 1px; margin-right: 2px; margin-bottom: 1px; margin-left: 2px;
     */
    'declaration-block-no-redundant-longhand-properties': true,
    
    /**
     * declaration-block-no-shorthand-property-overrides
     * 禁止简写属性覆盖 longhand 属性
     * ✅ margin-left: 10px; margin: 20px;
     * ❌ margin: 20px; margin-left: 10px; (margin 会被覆盖)
     */
    'declaration-block-no-shorthand-property-overrides': true,
    
    /**
     * declaration-block-single-line-max-declarations
     * 单行声明块最大声明数
     * ✅ a { color: red; }
     * ❌ a { color: red; background: blue; } (超过1个)
     */
    'declaration-block-single-line-max-declarations': 1,
    
    /**
     * declaration-empty-line-before
     * 声明前是否需要空行
     * null: 不限制
     */
    'declaration-empty-line-before': null,
    
    /**
     * declaration-no-important
     * 禁止使用 !important
     * null: 允许使用
     * ✅ color: red !important; (null 时允许)
     */
    'declaration-no-important': null,
    
    /**
     * declaration-property-max-values
     * 声明属性最大值数量
     * null: 不限制
     * 例: { '/^border/': 1 } - border 系列属性最多1个值
     */
    'declaration-property-max-values': null,
    
    /**
     * declaration-property-unit-allowed-list
     * 声明属性单位白名单
     * null: 不限制
     * 例: { 'font-size': ['px', 'em'] }
     */
    'declaration-property-unit-allowed-list': null,
    
    /**
     * declaration-property-unit-disallowed-list
     * 声明属性单位黑名单
     * null: 不限制
     * 例: { 'font-size': ['pt'] }
     */
    'declaration-property-unit-disallowed-list': null,
    
    /**
     * declaration-property-value-allowed-list
     * 声明属性值白名单
     * null: 不限制
     */
    'declaration-property-value-allowed-list': null,
    
    /**
     * declaration-property-value-disallowed-list
     * 声明属性值黑名单
     * null: 不限制
     * 例: { '/^border/': ['none'] } - border 系列禁止 none
     */
    'declaration-property-value-disallowed-list': null,
    
    /**
     * declaration-property-value-keyword-no-deprecated
     * 禁止已弃用的属性值关键字
     * ✅ overflow: auto;
     * ❌ overflow: -moz-scrollbars-none; (已弃用)
     */
    'declaration-property-value-keyword-no-deprecated': true,
    
    /**
     * declaration-property-value-no-unknown
     * 禁止未知的属性值
     * ✅ display: block;
     * ❌ display: unknown-value;
     */
    'declaration-property-value-no-unknown': true,
    
    // ============================================
    // Block 相关规则
    // ============================================
    
    /**
     * block-no-empty
     * 禁止空块
     * ✅ a { color: red; }
     * ❌ a { }
     */
    'block-no-empty': true,
    
    /**
     * block-no-redundant-nested-style-rules
     * 禁止冗余的嵌套样式规则
     * ✅ a { color: red; }
     * ❌ a { & { color: red; } } (多余的嵌套)
     */
    'block-no-redundant-nested-style-rules': true,
    
    // ============================================
    // Selector 相关规则
    // ============================================
    
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
    
    // ============================================
    // Media 相关规则
    // ============================================
    
    /**
     * media-feature-name-no-unknown
     * 禁止未知的 media feature 名称
     * ✅ @media (width > 600px) {}
     * ❌ @media (unknown-feature: value) {}
     */
    'media-feature-name-no-unknown': true,
    
    /**
     * media-feature-name-no-vendor-prefix
     * 禁止 media feature 使用 vendor prefix
     * ✅ @media (min-width: 600px) {}
     * ❌ @media (-webkit-min-device-pixel-ratio: 2) {}
     */
    'media-feature-name-no-vendor-prefix': true,
    
    /**
     * media-feature-name-allowed-list
     * media feature 白名单
     * null: 允许所有
     */
    'media-feature-name-allowed-list': null,
    
    /**
     * media-feature-name-disallowed-list
     * media feature 黑名单
     * null: 不禁止任何
     */
    'media-feature-name-disallowed-list': null,
    
    /**
     * media-feature-name-unit-allowed-list
     * media feature 单位白名单
     * null: 允许所有单位
     */
    'media-feature-name-unit-allowed-list': null,
    
    /**
     * media-feature-name-value-allowed-list
     * media feature 值白名单
     * null: 允许所有值
     */
    'media-feature-name-value-allowed-list': null,
    
    /**
     * media-feature-name-value-no-unknown
     * 禁止未知的 media feature 值
     * ✅ @media (orientation: landscape) {}
     * ❌ @media (orientation: unknown) {}
     */
    'media-feature-name-value-no-unknown': true,
    
    /**
     * media-feature-range-notation
     * media feature range 表示法
     * context: 根据上下文 | prefix: (min-width: 600px)
     * ✅ @media (width >= 600px) {} (context)
     * ✅ @media (min-width: 600px) {} (context)
     */
    'media-feature-range-notation': 'context',
    
    /**
     * media-query-no-invalid
     * 禁止无效的 media query
     * ✅ @media (width > 600px) {}
     * ❌ @media (width >>600px) {}
     */
    'media-query-no-invalid': true,
    
    /**
     * media-type-no-deprecated
     * 禁止已弃用的 media type
     * ✅ @media screen {}
     * ❌ @media aural {} (已弃用)
     */
    'media-type-no-deprecated': true,
    
    // ============================================
    // At-rule 相关规则
    // ============================================
    
    /**
     * at-rule-no-unknown
     * 禁止未知的 @规则
     * ✅ @media {}
     * ✅ @import ''
     * ❌ @unknown-rule {}
     */
    'at-rule-no-unknown': true,
    
    /**
     * at-rule-no-deprecated
     * 禁止已弃用的 @规则
     * ✅ @media {}
     * ❌ @document {} (已弃用)
     */
    'at-rule-no-deprecated': true,
    
    /**
     * at-rule-no-vendor-prefix
     * 禁止 @规则使用 vendor prefix
     * ✅ @keyframes {}
     * ❌ @-webkit-keyframes {}
     */
    'at-rule-no-vendor-prefix': true,
    
    /**
     * at-rule-allowed-list
     * @规则白名单
     * null: 允许所有
     * 例: ['media', 'import'] - 只允许这些
     */
    'at-rule-allowed-list': null,
    
    /**
     * at-rule-disallowed-list
     * @规则黑名单
     * null: 不禁止任何
     * 例: ['extend'] - 禁止 @extend
     */
    'at-rule-disallowed-list': null,
    
    /**
     * at-rule-empty-line-before
     * @规则前需要空行
     * always: 总是需要
     * except: 例外情况
     * - blockless-after-same-name-blockless: 同名无块 @规则后
     * - first-nested: 第一个嵌套时
     * ignore: ['after-comment'] - 注释后忽略
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    
    /**
     * at-rule-property-required-list
     * @规则必需的属性列表
     * null: 不限制
     * 例: { 'font-face': ['font-family', 'src'] }
     */
    'at-rule-property-required-list': null,
    
    /**
     * at-rule-prelude-no-invalid
     * 禁止无效的 @规则 prelude
     * ✅ @media (width > 600px) {}
     * ❌ @media (width >>> 600px) {}
     */
    'at-rule-prelude-no-invalid': true,
    
    /**
     * at-rule-descriptor-no-unknown
     * 禁止未知的 @规则 descriptor（如 @font-face 中的属性）
     * ✅ @font-face { font-family: ''; }
     * ❌ @font-face { unknown-descriptor: ''; }
     */
    'at-rule-descriptor-no-unknown': true,
    
    /**
     * at-rule-descriptor-value-no-unknown
     * 禁止未知的 @规则 descriptor 值
     * ✅ @font-face { font-display: swap; }
     * ❌ @font-face { font-display: unknown; }
     */
    'at-rule-descriptor-value-no-unknown': true,
    
    // ============================================
    // Comment 相关规则
    // ============================================
    
    /**
     * comment-empty-line-before
     * 注释前需要空行
     * always: 总是需要
     * except: ['first-nested'] - 第一个嵌套时例外
     * ignore: ['stylelint-commands'] - stylelint 命令注释例外
     * ✅ 
     * a {}
     * 
     * /* comment *\/
     * b {}
     */
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['stylelint-commands'] },
    ],
    
    /**
     * comment-no-empty
     * 禁止空注释
     * ✅ /* comment *\/
     * ❌ /* *\/
     */
    'comment-no-empty': true,
    
    /**
     * comment-pattern
     * 注释内容模式（正则）
     * null: 不限制
     * 例: '^TODO:' - 注释必须以 TODO: 开头
     */
    'comment-pattern': null,
    
    /**
     * comment-whitespace-inside
     * 注释内部需要空格
     * always: /*空格comment空格*\/
     * ✅ /* comment *\/
     * ❌ /*comment*\/
     */
    'comment-whitespace-inside': 'always',
    
    /**
     * comment-word-disallowed-list
     * 注释词黑名单
     * null: 不限制
     * 例: ['/^TODO:/'] - 禁止 TODO 注释
     */
    'comment-word-disallowed-list': null,
    
    // ============================================
    // General 相关规则
    // ============================================
    
    /**
     * no-empty-source
     * 禁止空源文件
     * null: 允许空文件
     */
    'no-empty-source': null,
    
    /**
     * no-invalid-double-slash-comments
     * 禁止无效的双斜杠注释（CSS 中应该用 /* *\/）
     * ✅ /* comment *\/
     * ❌ // comment (CSS 中无效)
     */
    'no-invalid-double-slash-comments': true,
    
    /**
     * no-irregular-whitespace
     * 禁止不规则的空白字符
     * ✅ a { color: red; }
     * ❌ a { color:​red; } (包含零宽字符)
     */
    'no-irregular-whitespace': true,
    
    /**
     * no-descending-specificity
     * 禁止低特异性选择器覆盖高特异性选择器
     * null: 不检查
     * ✅ #id {} .class {} (null 时允许)
     * ❌ .class {} #id {} #id .class {} (后者特异性降低)
     */
    'no-descending-specificity': null,
    
    /**
     * no-duplicate-at-import-rules
     * 禁止重复的 @import
     * ✅ @import 'a.css';
     * ❌ @import 'a.css'; @import 'a.css';
     */
    'no-duplicate-at-import-rules': true,
    
    /**
     * no-duplicate-selectors
     * 禁止重复的选择器
     * ✅ a {} b {}
     * ❌ a {} a {}
     */
    'no-duplicate-selectors': true,
    
    /**
     * no-unknown-animations
     * 禁止未知的动画名称
     * ✅ @keyframes slide {} a { animation: slide; }
     * ❌ a { animation: unknown; }
     */
    'no-unknown-animations': true,
    
    /**
     * no-unknown-custom-media
     * 禁止未知的自定义 media
     * ✅ @custom-media --sm (width < 768px); @media (--sm) {}
     * ❌ @media (--unknown) {}
     */
    'no-unknown-custom-media': true,
    
    /**
     * no-unknown-custom-properties
     * 禁止未知的自定义属性
     * null: 不检查（因为可能来自其他文件）
     */
    'no-unknown-custom-properties': null,
    
    /**
     * no-invalid-position-at-import-rule
     * @import 必须在最前面
     * ✅ @import ''; a {}
     * ❌ a {} @import '';
     */
    'no-invalid-position-at-import-rule': true,
    
    /**
     * no-invalid-position-declaration
     * 声明位置必须正确（不能在某些 @规则里）
     * ✅ a { color: red; }
     * ❌ @import { color: red; }
     */
    'no-invalid-position-declaration': true,
    
    // ============================================
    // Notation 相关规则
    // ============================================
    
    /**
     * hue-degree-notation
     * 色相角度表示法
     * angle: 使用deg单位 | number: 纯数字
     * ✅ hsl(180deg 50% 50%)
     * ❌ hsl(180 50% 50%)
     */
    'hue-degree-notation': 'angle',
    
    /**
     * lightness-notation
     * 亮度表示法
     * percentage: 百分比
     * ✅ hsl(180deg 50% 50%)
     * ❌ hsl(180deg 0.5 0.5)
     */
    'lightness-notation': 'percentage',
    
    // ============================================
    // Rule 相关规则
    // ============================================
    
    /**
     * rule-empty-line-before
     * 规则前需要空行
     * always-multi-line: 多行规则前需要空行
     * except: ['first-nested'] - 第一个嵌套规则例外
     * ignore: ['after-comment'] - 注释后忽略
     */
    'rule-empty-line-before': [
      'always-multi-line',
      { except: ['first-nested'], ignore: ['after-comment'] },
    ],
    
    /**
     * rule-nesting-at-rule-required-list
     * 规则嵌套必需的 @规则列表
     * null: 不限制
     */
    'rule-nesting-at-rule-required-list': null,
    
    /**
     * rule-selector-property-disallowed-list
     * 特定选择器禁止特定属性
     * null: 不限制
     * 例: { '/^\\./': ['position'] } - 类选择器禁止 position
     */
    'rule-selector-property-disallowed-list': null,
    
    // ============================================
    // Complexity 相关规则
    // ============================================
    
    /**
     * max-nesting-depth
     * 最大嵌套深度
     * null: 不限制
     * 例: 3 - 最多嵌套3层
     */
    'max-nesting-depth': null,
    
    // ============================================
    // Import 相关规则
    // ============================================
    
    /**
     * import-notation
     * import 表示法
     * null: 不限制 | string: 使用字符串 | url: 使用 url()
     */
    'import-notation': null,
    
    // ============================================
    // Naming Pattern 相关规则
    // ============================================
    
    /**
     * container-name-pattern
     * 容器名称模式（CSS Container Queries）
     * null: 不限制
     */
    'container-name-pattern': null,
    
    /**
     * custom-media-pattern
     * 自定义 media 名称模式
     * null: 不限制
     */
    'custom-media-pattern': null,
    
    /**
     * layer-name-pattern
     * CSS layer 名称模式
     * null: 不限制
     */
    'layer-name-pattern': null,
    
    // ============================================
    // Annotation 相关规则
    // ============================================
    
    /**
     * annotation-no-unknown
     * 禁止未知的注解（如 Sass 的 !default）
     * ✅ $var: value !default;
     * ❌ $var: value !unknown;
     */
    'annotation-no-unknown': true,
    
    // ============================================
    // Grid 相关规则
    // ============================================
    
    /**
     * named-grid-areas-no-invalid
     * 禁止无效的命名网格区域
     * ✅ grid-template-areas: 'a a' 'b b';
     * ❌ grid-template-areas: 'a a' 'b';
     */
    'named-grid-areas-no-invalid': true,
    
    // ============================================
    // Nesting 相关规则
    // ============================================
    
    /**
     * nesting-selector-no-missing-scoping-root
     * 嵌套选择器禁止缺少作用域根
     * ✅ a { & b {} }
     * ❌ & b {} (缺少父选择器)
     */
    'nesting-selector-no-missing-scoping-root': true,
    
    // ============================================
    // Syntax 相关规则
    // ============================================
    
    /**
     * syntax-string-no-invalid
     * 禁止无效的语法字符串
     * ✅ @supports (display: grid) {}
     * ❌ @supports (display: grid {}
     */
    'syntax-string-no-invalid': true,
    
    // ============================================
    // Stylistic 规则（@stylistic/stylelint-plugin）
    // ============================================
    
    /** hex 颜色小写 | ✅ #fff ❌ #FFF */
    '@stylistic/color-hex-case': 'lower',
    
    /** 缩进2个空格 | ✅ a {\n  color: red;\n} */
    '@stylistic/indentation': 2,
    
    /** Unix 换行符(LF) | ✅ \n ❌ \r\n */
    '@stylistic/linebreaks': 'unix',
    
    /** 最多1个空行 | ✅ a {}\n\nb {} ❌ a {}\n\n\nb {} */
    '@stylistic/max-empty-lines': 1,
    
    /** 最大行长度 | null: 不限制 */
    '@stylistic/max-line-length': null,
    
    /** 选择器中最多空行数 | null: 不限制 */
    '@stylistic/selector-max-empty-lines': null,
    
    /** 值列表中最多空行数 | null: 不限制 */
    '@stylistic/value-list-max-empty-lines': null,
    
    /** 函数中最多空行数 | null: 不限制 */
    '@stylistic/function-max-empty-lines': null,
    
    /** 首行不能为空 | ✅ a {} ❌ \na {} */
    '@stylistic/no-empty-first-line': true,
    
    /** 行尾禁止空格 | ✅ a {} ❌ a {}  */
    '@stylistic/no-eol-whitespace': true,
    
    /** 禁止多余的分号 | ✅ a { color: red; } ❌ a { color: red;; } */
    '@stylistic/no-extra-semicolons': true,
    
    /** 文件末尾必须有换行符 */
    '@stylistic/no-missing-end-of-source-newline': true,
    
    /** 数字前导零 | ✅ 0.5 ❌ .5 */
    '@stylistic/number-leading-zero': 'always',
    
    /** 数字禁止尾随零 | ✅ 1.5 ❌ 1.50 */
    '@stylistic/number-no-trailing-zeros': true,
    
    /** 属性名小写 | ✅ color ❌ COLOR */
    '@stylistic/property-case': 'lower',
    
    /** 伪类小写 | ✅ :hover ❌ :HOVER */
    '@stylistic/selector-pseudo-class-case': 'lower',
    
    /** 伪元素小写 | ✅ ::before ❌ ::BEFORE */
    '@stylistic/selector-pseudo-element-case': 'lower',
    
    /** 字符串使用单引号 | ✅ content: 'x' ❌ content: "x" */
    '@stylistic/string-quotes': 'single',
    
    /** 禁止 Unicode BOM */
    '@stylistic/unicode-bom': 'never',
    
    /** 单位小写 | ✅ 10px ❌ 10PX */
    '@stylistic/unit-case': 'lower',
    
    // ============================================
    // Stylistic 空格规则
    // ============================================
    
    /**
     * @stylistic/at-rule-name-space-after
     * @规则名称后需要空格
     * ✅ @media (width > 600px) {}
     * ❌ @media(width > 600px) {}
     */
    '@stylistic/at-rule-name-space-after': 'always',
    
    /**
     * @stylistic/block-opening-brace-space-before
     * 块开括号前需要空格
     * ✅ a { color: red; }
     * ❌ a{ color: red; }
     */
    '@stylistic/block-opening-brace-space-before': 'always',
    
    /**
     * @stylistic/declaration-colon-space-after
     * 声明冒号后需要空格（单行时）
     * ✅ color: red;
     * ❌ color:red;
     */
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    
    /**
     * @stylistic/declaration-colon-space-before
     * 声明冒号前禁止空格
     * ✅ color: red;
     * ❌ color : red;
     */
    '@stylistic/declaration-colon-space-before': 'never',
    
    /**
     * @stylistic/function-comma-space-after
     * 函数逗号后需要空格（单行时）
     * ✅ rgb(0, 0, 0)
     * ❌ rgb(0,0, 0)
     */
    '@stylistic/function-comma-space-after': 'always-single-line',
    
    /**
     * @stylistic/function-comma-space-before
     * 函数逗号前禁止空格
     * ✅ rgb(0, 0, 0)
     * ❌ rgb(0 , 0, 0)
     */
    '@stylistic/function-comma-space-before': 'never',
    
    /**
     * @stylistic/function-parentheses-space-inside
     * 函数括号内禁止空格（单行时）
     * ✅ calc(100% - 20px)
     * ❌ calc( 100% - 20px )
     */
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    
    /**
     * @stylistic/selector-combinator-space-after
     * 选择器组合器后需要空格（> + ~）
     * ✅ a > b {}
     * ✅ a + b {}
     * ❌ a>b {}
     */
    '@stylistic/selector-combinator-space-after': 'always',
    
    /**
     * @stylistic/selector-combinator-space-before
     * 选择器组合器前需要空格（> + ~）
     * ✅ a > b {}
     * ❌ a> b {}
     */
    '@stylistic/selector-combinator-space-before': 'always',
    
    /**
     * @stylistic/value-list-comma-space-after
     * 值列表逗号后需要空格（单行时）
     * ✅ margin: 10px, 20px, 30px;
     * ❌ margin: 10px,20px, 30px;
     */
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    
    /**
     * @stylistic/value-list-comma-space-before
     * 值列表逗号前禁止空格
     * ✅ margin: 10px, 20px;
     * ❌ margin: 10px , 20px;
     */
    '@stylistic/value-list-comma-space-before': 'never',
    
    // ============================================
    // Stylistic 换行规则
    // ============================================
    
    /**
     * @stylistic/at-rule-semicolon-newline-after
     * @规则分号后需要换行
     * ✅ @import 'a.css';
     *    a {}
     * ❌ @import 'a.css'; a {}
     */
    '@stylistic/at-rule-semicolon-newline-after': 'always',
    
    /**
     * @stylistic/block-closing-brace-newline-after
     * 块闭括号后需要换行
     * ✅ a { color: red; }
     *    b {}
     * ❌ a { color: red; } b {}
     */
    '@stylistic/block-closing-brace-newline-after': 'always',
    
    /**
     * @stylistic/block-closing-brace-newline-before
     * 块闭括号前需要换行（多行块）
     * ✅ a {
     *      color: red;
     *    }
     * ❌ a { color: red; }
     */
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
    
    /**
     * @stylistic/block-opening-brace-newline-after
     * 块开括号后需要换行（多行块）
     * ✅ a {
     *      color: red;
     *    }
     * ❌ a { color: red; }
     */
    '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
    
    /**
     * @stylistic/declaration-block-semicolon-newline-after
     * 声明块分号后需要换行（多行时）
     * ✅ a {
     *      color: red;
     *      background: blue;
     *    }
     * ❌ a { color: red; background: blue; }
     */
    '@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
    
    /**
     * @stylistic/declaration-block-trailing-semicolon
     * 声明块末尾必须有分号
     * ✅ a { color: red; }
     * ❌ a { color: red }
     */
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    
    /**
     * @stylistic/selector-list-comma-newline-after
     * 选择器列表逗号后需要换行
     * ✅ a,
     *    b {}
     * ❌ a, b {}
     */
    '@stylistic/selector-list-comma-newline-after': 'always',
    
    // ============================================
    // Order 规则（stylelint-order）
    // ============================================
    
    /**
     * order/order
     * 指定声明块内容的顺序
     * ✅ 
     * .a {
     *   --custom-prop: value;     (1. 自定义属性)
     *   $sass-var: value;         (2. Sass 变量)
     *   color: red;               (3. 普通声明)
     *   @include mixin;           (4. @规则)
     *   &:hover {}                (5. 嵌套规则)
     * }
     */
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],
    
    /**
     * order/properties-order
     * 指定属性的顺序
     * null: 不限制顺序（可在 strict 模式启用）
     */
    'order/properties-order': null,
    
    /**
     * order/properties-alphabetical-order
     * 要求属性按字母顺序排列
     * null: 不要求
     */
    'order/properties-alphabetical-order': null,
  },
};
