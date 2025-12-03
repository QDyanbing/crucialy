module.exports = {
  customSyntax: 'postcss-html',
  plugins: ['stylelint-order'],
  rules: {
    // ========================================
    // 颜色（Color）
    // ========================================
    
    // 是否要求或禁止 alpha 通道的十六进制颜色表示法
    // 'always' = 始终要求，'never' = 始终禁止，null = 允许两种
    // ✅ #fff ✅ #ffff
    'color-hex-alpha': null,
    
    // 十六进制颜色值大小写
    // 'lower' = 小写，'upper' = 大写
    // ✅ color: #fff ❌ color: #FFF
    'color-hex-case': 'lower',
    
    // 十六进制颜色值长度
    // 'short' = 尽可能缩写，'long' = 完整形式
    // ✅ color: #fff ❌ color: #ffffff
    'color-hex-length': 'short',
    
    // 是否允许命名颜色
    // 'always-where-possible' = 尽可能使用，'never' = 禁止，null = 允许两种
    // ✅ color: red ✅ color: #f00
    'color-named': null,
    
    // 是否禁止使用十六进制颜色
    // true = 禁止，null = 允许
    // ✅ color: rgb(0, 0, 0)
    'color-no-hex': null,
    
    // 禁止无效的十六进制颜色
    // true = 禁止
    // ✅ color: #fff ❌ color: #zzz
    'color-no-invalid-hex': true,
    
    // ========================================
    // 字体家族（Font family）
    // ========================================
    
    // 字体名称是否使用引号 [deprecated]
    // 'always-where-required' = 仅在必需时，'always-where-recommended' = 推荐时，'always-unless-keyword' = 除关键字外
    // ✅ font-family: "Times New Roman", sans-serif ❌ font-family: Times New Roman
    'font-family-name-quotes': 'always-where-recommended',
    
    // 禁止重复的字体名称
    // true = 禁止
    // ✅ font-family: Arial, sans-serif ❌ font-family: Arial, Arial, sans-serif
    'font-family-no-duplicate-names': true,
    
    // 禁止缺少通用字体族关键字
    // true = 禁止
    // ✅ font-family: Arial, sans-serif ❌ font-family: Arial
    'font-family-no-missing-generic-family-keyword': true,
    
    // ========================================
    // 函数（Function）
    // ========================================
    
    // 允许的函数白名单
    // ['函数名1', '函数名2'] = 仅允许列表中的函数，null = 不限制
    // ✅ color: rgb(0, 0, 0)
    'function-allowed-list': null,
    
    // 禁止 calc() 函数中的无效表达式
    // true = 禁止
    // ✅ width: calc(100% - 10px) ❌ width: calc(100% - )
    'function-calc-no-invalid': true,
    
    // calc() 函数中的运算符前后必须有空格 [deprecated]
    // true = 必须有空格
    // ✅ width: calc(100% - 10px) ❌ width: calc(100%-10px)
    'function-calc-no-unspaced-operator': true,
    
    // 禁止的函数黑名单
    // ['函数名1', '函数名2'] = 禁止列表中的函数，null = 不限制
    // ❌ color: rgb(0, 0, 0)
    'function-disallowed-list': null,
    
    // 禁止 linear-gradient() 使用非标准方向值
    // true = 禁止
    // ✅ linear-gradient(to top, #fff, #000) ❌ linear-gradient(top, #fff, #000)
    'function-linear-gradient-no-nonstandard-direction': true,
    
    // 函数名称大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ color: rgb(0, 0, 0) ❌ color: RGB(0, 0, 0)
    'function-name-case': 'lower',
    
    // 禁止未知的函数
    // true = 禁止，ignoreFunctions = 忽略的函数列表
    // ✅ color: rgb(0, 0, 0) ❌ color: unknown-fn(0, 0, 0)
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'screen'], // Tailwind CSS 函数
      },
    ],
    
    // 禁止 url() 使用协议相对地址
    // true = 禁止
    // ✅ url("https://example.com") ❌ url("//example.com")
    'function-url-no-scheme-relative': true,
    
    // url() 函数中的地址必须使用引号
    // 'always' = 始终使用，'never' = 不使用
    // ✅ url("image.png") ❌ url(image.png)
    'function-url-quotes': 'always',
    
    // url() 函数允许的协议白名单
    // ['https', 'data'] = 仅允许列表中的协议，null = 不限制
    // ✅ url("https://example.com")
    'function-url-scheme-allowed-list': null,
    
    // url() 函数禁止的协议黑名单
    // ['http', 'ftp'] = 禁止列表中的协议，null = 不限制
    // ❌ url("ftp://example.com")
    'function-url-scheme-disallowed-list': null,
    
    // ========================================
    // 关键帧（Keyframes）
    // ========================================
    
    // 关键帧名称命名模式
    // '正则表达式' = 强制匹配模式，null = 不限制
    // ✅ @keyframes slide-in {}
    'keyframes-name-pattern': null,
    
    // 关键帧选择器表示法
    // 'percentage' = 百分比，'percentage-unless-within-keyword-only-block' = 混合
    // ✅ from {} to {} ✅ 0% {} 100% {}
    'keyframe-selector-notation': null,
    
    // ========================================
    // 数字（Number）
    // ========================================
    
    // 小于 1 的数字必须有前导 0
    // 'always' = 始终有，'never' = 不能有
    // ✅ opacity: 0.5 ❌ opacity: .5
    'number-leading-zero': 'always',
    
    // 数字最大小数位数
    // 数字 = 最多几位小数
    // ✅ font-size: 1.5px ❌ font-size: 1.500000px
    'number-max-precision': 6,
    
    // 禁止数字尾随 0
    // true = 禁止
    // ✅ opacity: 0.5 ❌ opacity: 0.50
    'number-no-trailing-zeros': true,
    
    // ========================================
    // 字符串（String）
    // ========================================
    
    // 禁止字符串中的换行
    // true = 禁止
    // ❌ content: "first\nsecond"
    'string-no-newline': true,
    
    // 字符串引号类型 [deprecated]
    // 'single' = 单引号，'double' = 双引号
    // ✅ content: 'x' ❌ content: "x"
    'string-quotes': 'single',
    
    // ========================================
    // 长度（Length）
    // ========================================
    
    // 0 值不需要单位
    // true = 不需要单位
    // ✅ margin: 0 ❌ margin: 0px
    'length-zero-no-unit': true,
    
    // ========================================
    // 时间（Time）
    // ========================================
    
    // 时间值最小毫秒数
    // 数字 = 最小值，null = 不限制
    // ✅ transition: 100ms
    'time-min-milliseconds': null,
    
    // ========================================
    // 单位（Unit）
    // ========================================
    
    // 允许的单位白名单
    // ['px', 'em', 'rem'] = 仅允许列表中的单位，null = 不限制
    // ✅ width: 100px
    'unit-allowed-list': null,
    
    // 单位大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ width: 100px ❌ width: 100PX
    'unit-case': 'lower',
    
    // 禁止的单位黑名单
    // ['pt', 'cm'] = 禁止列表中的单位，null = 不限制
    // ❌ width: 100pt
    'unit-disallowed-list': null,
    
    // 禁止未知的单位
    // true = 禁止
    // ✅ width: 100px ❌ width: 100unknownunit
    'unit-no-unknown': true,
    
    // ========================================
    // 值（Value）
    // ========================================
    
    // 关键字值大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ display: block ❌ display: BLOCK
    'value-keyword-case': 'lower',
    
    // 禁止值使用浏览器前缀
    // true = 禁止
    // ✅ display: flex ❌ display: -webkit-box
    'value-no-vendor-prefix': true,
    
    // ========================================
    // 自定义属性（Custom property）
    // ========================================
    
    // 自定义属性前是否需要空行 [deprecated]
    // 'always' = 始终需要，'never' = 不需要，null = 不限制
    // ✅ --custom: value;
    'custom-property-empty-line-before': null,
    
    // 禁止自定义属性缺少 var 函数
    // true = 禁止
    // ✅ color: var(--main-color) ❌ color: --main-color
    'custom-property-no-missing-var-function': true,
    
    // 自定义属性命名模式
    // '正则表达式' = 强制匹配模式
    // ✅ --main-color: #fff ❌ --mainColor: #fff
    'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    
    // ========================================
    // 简写属性（Shorthand property）
    // ========================================
    
    // 禁止简写属性的冗余值
    // true = 禁止
    // ✅ margin: 10px ❌ margin: 10px 10px 10px 10px
    'shorthand-property-no-redundant-values': true,
    
    // ========================================
    // 属性（Property）
    // ========================================
    
    // 允许的属性白名单
    // ['display', 'color'] = 仅允许列表中的属性，null = 不限制
    // ✅ display: block
    'property-allowed-list': null,
    
    // 属性名称大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ display: block ❌ DISPLAY: block
    'property-case': 'lower',
    
    // 禁止的属性黑名单
    // ['float', 'text-align'] = 禁止列表中的属性，null = 不限制
    // ❌ float: left
    'property-disallowed-list': null,
    
    // 禁止未知的属性
    // true = 禁止，ignoreProperties = 忽略的属性，ignoreSelectors = 忽略的选择器
    // ✅ display: block ❌ unknown-property: value
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'], // CSS Modules
        ignoreSelectors: [':global', ':local', ':export'], // CSS Modules
      },
    ],
    
    // 禁止属性使用浏览器前缀
    // true = 禁止
    // ✅ appearance: none ❌ -webkit-appearance: none
    'property-no-vendor-prefix': true,
    
    // ========================================
    // 声明（Declaration）
    // ========================================
    
    // ! 后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ color: red !important ❌ color: red ! important
    'declaration-bang-space-after': 'never',
    
    // ! 前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ color: red !important ❌ color: red!important
    'declaration-bang-space-before': 'always',
    
    // 禁止冗余的详细属性
    // true = 禁止
    // ✅ margin: 10px ❌ margin-top: 10px; margin-right: 10px; margin-bottom: 10px; margin-left: 10px
    'declaration-block-no-redundant-longhand-properties': true,
    
    // 禁止简写属性覆盖详细属性
    // true = 禁止
    // ❌ padding-left: 10px; padding: 20px
    'declaration-block-no-shorthand-property-overrides': true,
    
    // 单行声明块中最多声明数 [deprecated]
    // 数字 = 最多几个
    // ✅ a { color: red; } ❌ a { color: red; background: blue; }
    'declaration-block-single-line-max-declarations': 1,
    
    // 冒号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ color: red
    'declaration-colon-newline-after': null,
    
    // 冒号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ color: red ❌ color:red
    'declaration-colon-space-after': 'always-single-line',
    
    // 冒号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ color: red ❌ color : red
    'declaration-colon-space-before': 'never',
    
    // 声明前是否需要空行 [deprecated]
    // 'always' = 始终需要，'never' = 不需要，null = 不限制
    // ✅ a { color: red; background: blue; }
    'declaration-empty-line-before': null,
    
    // 是否禁止 !important
    // true = 禁止，null = 允许
    // ❌ color: red !important
    'declaration-no-important': null,
    
    // 属性值的最大个数
    // 数字 = 最多几个，null = 不限制
    // ✅ margin: 10px 20px
    'declaration-property-max-values': null,
    
    // 属性允许的单位白名单
    // { 'font-size': ['px', 'em'] } = 指定属性允许的单位，null = 不限制
    // ✅ font-size: 16px
    'declaration-property-unit-allowed-list': null,
    
    // 属性禁止的单位黑名单
    // { 'font-size': ['pt'] } = 指定属性禁止的单位，null = 不限制
    // ❌ font-size: 16pt
    'declaration-property-unit-disallowed-list': null,
    
    // 属性允许的值白名单
    // { 'display': ['block', 'flex'] } = 指定属性允许的值，null = 不限制
    // ✅ display: block
    'declaration-property-value-allowed-list': null,
    
    // 属性禁止的值黑名单
    // { 'display': ['table'] } = 指定属性禁止的值，null = 不限制
    // ❌ display: table
    'declaration-property-value-disallowed-list': null,
    
    // 禁止未知的属性值组合
    // true = 禁止
    // ✅ display: block ❌ display: unknown
    'declaration-property-value-no-unknown': true,
    
    // ========================================
    // 声明块（Declaration block）
    // ========================================
    
    // 禁止重复的自定义属性
    // true = 禁止
    // ❌ a { --color: red; --color: blue; }
    'declaration-block-no-duplicate-custom-properties': true,
    
    // 禁止重复的属性
    // true = 禁止，ignore = 忽略的情况
    // ✅ a { color: red; } ❌ a { color: red; color: blue; }
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'], // 允许连续的不同值（用于 fallback）
      },
    ],
    
    // 分号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ a { color: red; background: blue; }
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    
    // 分号前是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行，null = 不限制
    // ✅ a { color: red; }
    'declaration-block-semicolon-newline-before': null,
    
    // 分号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ a { color: red; background: blue; }
    'declaration-block-semicolon-space-after': 'always-single-line',
    
    // 分号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a { color: red; } ❌ a { color: red ; }
    'declaration-block-semicolon-space-before': 'never',
    
    // 声明块是否以分号结尾 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a { color: red; } ❌ a { color: red }
    'declaration-block-trailing-semicolon': 'always',
    
    // ========================================
    // 块（Block）
    // ========================================
    
    // 右大括号前是否有空行 [deprecated]
    // 'always' = 始终有，'never' = 不能有
    // ✅ a { color: red; } ❌ a { color: red;\n\n}
    'block-closing-brace-empty-line-before': 'never',
    
    // 右大括号后是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行
    // ✅ a { color: red; }\nb { }
    'block-closing-brace-newline-after': 'always',
    
    // 右大括号前是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ a {\n  color: red;\n}
    'block-closing-brace-newline-before': 'always-multi-line',
    
    // 右大括号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，null = 不限制
    // ✅ a { color: red; }
    'block-closing-brace-space-after': null,
    
    // 右大括号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ a { color: red; }
    'block-closing-brace-space-before': 'always-single-line',
    
    // 禁止空块
    // true = 禁止
    // ✅ a { color: red; } ❌ a { }
    'block-no-empty': true,
    
    // 左大括号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ a {\n  color: red;\n}
    'block-opening-brace-newline-after': 'always-multi-line',
    
    // 左大括号前是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行，null = 不限制
    // ✅ a {
    'block-opening-brace-newline-before': null,
    
    // 左大括号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ a { color: red; }
    'block-opening-brace-space-after': 'always-single-line',
    
    // 左大括号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a { color: red; } ❌ a{ color: red; }
    'block-opening-brace-space-before': 'always',
    
    // ========================================
    // 选择器（Selector）
    // ========================================
    
    // 属性选择器括号内是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ [type="text"] ❌ [ type="text" ]
    'selector-attribute-brackets-space-inside': 'never',
    
    // 禁止的属性名称黑名单
    // ['id', 'class'] = 禁止列表中的属性名，null = 不限制
    // ❌ [id]
    'selector-attribute-name-disallowed-list': null,
    
    // 允许的属性操作符白名单
    // ['=', '~='] = 仅允许列表中的操作符，null = 不限制
    // ✅ [type="text"]
    'selector-attribute-operator-allowed-list': null,
    
    // 禁止的属性操作符黑名单
    // ['*='] = 禁止列表中的操作符，null = 不限制
    // ❌ [class*="test"]
    'selector-attribute-operator-disallowed-list': null,
    
    // 属性操作符后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ [type="text"] ❌ [type= "text"]
    'selector-attribute-operator-space-after': 'never',
    
    // 属性操作符前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ [type="text"] ❌ [type ="text"]
    'selector-attribute-operator-space-before': 'never',
    
    // 属性选择器的值是否使用引号 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ [type="text"] ❌ [type=text]
    'selector-attribute-quotes': 'always',
    
    // 类选择器命名模式
    // '正则表达式' = 强制匹配模式
    // ✅ .my-class ❌ .myClass
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$',
      {
        message: '类名统一使用 kebab-case 格式',
      },
    ],
    
    // 允许的选择器组合符白名单
    // ['>', '+'] = 仅允许列表中的组合符，null = 不限制
    // ✅ a > b
    'selector-combinator-allowed-list': null,
    
    // 禁止的选择器组合符黑名单
    // ['~'] = 禁止列表中的组合符，null = 不限制
    // ❌ a ~ b
    'selector-combinator-disallowed-list': null,
    
    // 组合符后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a > b ❌ a >b
    'selector-combinator-space-after': 'always',
    
    // 组合符前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a > b ❌ a> b
    'selector-combinator-space-before': 'always',
    
    // 禁止后代选择器使用非空格组合符 [deprecated]
    // true = 禁止
    // ✅ a b ❌ a  b
    'selector-descendant-combinator-no-non-space': true,
    
    // 禁止的选择器黑名单
    // ['a', '.class'] = 禁止列表中的选择器，null = 不限制
    // ❌ a
    'selector-disallowed-list': null,
    
    // ID 选择器命名模式
    // '正则表达式' = 强制匹配模式
    // ✅ #my-id ❌ #myId
    'selector-id-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message: 'ID 选择器统一使用 kebab-case 格式',
      },
    ],
    
    // 选择器中最多属性选择器数量
    // 数字 = 最多几个，null = 不限制
    // ✅ [type="text"][required]
    'selector-max-attribute': null,
    
    // 选择器中最多类选择器数量
    // 数字 = 最多几个，null = 不限制
    // ✅ .class1.class2
    'selector-max-class': null,
    
    // 选择器中最多组合符数量
    // 数字 = 最多几个，null = 不限制
    // ✅ a > b + c
    'selector-max-combinators': null,
    
    // 选择器最大复合选择器数量（避免过深嵌套）
    // 数字 = 最多几个
    // ✅ a b c d ❌ a b c d e
    'selector-max-compound-selectors': 4,
    
    // 选择器中最多 ID 选择器数量（建议为 0）
    // 数字 = 最多几个
    // ❌ #id
    'selector-max-id': 0,
    
    // 选择器中最多伪类数量
    // 数字 = 最多几个，null = 不限制
    // ✅ a:hover:focus
    'selector-max-pseudo-class': null,
    
    // 选择器最大特异性
    // 'id,class,type' = 最大特异性值
    // ✅ .a.b.c.d (0,4,0) ❌ .a.b.c.d.e (0,5,0)
    'selector-max-specificity': '0,4,0',
    
    // 选择器中最多类型选择器数量
    // 数字 = 最多几个，null = 不限制
    // ✅ div p span
    'selector-max-type': null,
    
    // 选择器中最多通配符选择器数量
    // 数字 = 最多几个
    // ✅ * ❌ * *
    'selector-max-universal': 1,
    
    // 嵌套选择器命名模式
    // '正则表达式' = 强制匹配模式，null = 不限制
    // ✅ &.class
    'selector-nested-pattern': null,
    
    // 是否禁止限定类型选择器
    // true = 禁止，null = 允许
    // ❌ div.class
    'selector-no-qualifying-type': null,
    
    // 禁止选择器使用浏览器前缀
    // true = 禁止
    // ✅ ::placeholder ❌ ::-webkit-input-placeholder
    'selector-no-vendor-prefix': true,
    
    // :not() 伪类表示法
    // 'simple' = 简单，'complex' = 复杂
    // ✅ :not(.class)
    'selector-not-notation': null,
    
    // 允许的伪类白名单
    // ['hover', 'focus'] = 仅允许列表中的伪类，null = 不限制
    // ✅ a:hover
    'selector-pseudo-class-allowed-list': null,
    
    // 伪类大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ a:hover ❌ a:HOVER
    'selector-pseudo-class-case': 'lower',
    
    // 禁止的伪类黑名单
    // ['hover'] = 禁止列表中的伪类，null = 不限制
    // ❌ a:hover
    'selector-pseudo-class-disallowed-list': null,
    
    // 禁止未知的伪类选择器
    // true = 禁止，ignorePseudoClasses = 忽略的伪类
    // ✅ a:hover ❌ a:unknown
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export', 'deep'], // CSS Modules、Vue
      },
    ],
    
    // 允许的伪元素白名单
    // ['before', 'after'] = 仅允许列表中的伪元素，null = 不限制
    // ✅ ::before
    'selector-pseudo-element-allowed-list': null,
    
    // 伪元素大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ ::before ❌ ::BEFORE
    'selector-pseudo-element-case': 'lower',
    
    // 伪元素使用单冒号还是双冒号 [deprecated]
    // 'single' = 单冒号，'double' = 双冒号
    // ✅ ::before ❌ :before
    'selector-pseudo-element-colon-notation': 'double',
    
    // 禁止的伪元素黑名单
    // ['before'] = 禁止列表中的伪元素，null = 不限制
    // ❌ ::before
    'selector-pseudo-element-disallowed-list': null,
    
    // 禁止未知的伪元素选择器
    // true = 禁止，ignorePseudoElements = 忽略的伪元素
    // ✅ ::before ❌ ::unknown
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-slotted', 'v-global'], // Vue deep selectors
      },
    ],
    
    // 类型选择器大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ div ❌ DIV
    'selector-type-case': 'lower',
    
    // 禁止未知的类型选择器
    // true = 禁止，ignoreTypes = 忽略的类型
    // ✅ div ❌ unknown-element
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page', 'view'], // 小程序标签
      },
    ],
    
    // ========================================
    // 选择器列表（Selector list）
    // ========================================
    
    // 选择器列表逗号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ a,\nb { }
    'selector-list-comma-newline-after': 'always',
    
    // 选择器列表逗号前是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行，null = 不限制
    // ✅ a, b { }
    'selector-list-comma-newline-before': null,
    
    // 选择器列表逗号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ a, b { } ❌ a,b { }
    'selector-list-comma-space-after': 'always-single-line',
    
    // 选择器列表逗号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ a, b { } ❌ a , b { }
    'selector-list-comma-space-before': 'never',
    
    // ========================================
    // 媒体特性（Media feature）
    // ========================================
    
    // 媒体特性冒号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ @media (min-width: 768px) ❌ @media (min-width:768px)
    'media-feature-colon-space-after': 'always',
    
    // 媒体特性冒号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ @media (min-width: 768px) ❌ @media (min-width : 768px)
    'media-feature-colon-space-before': 'never',
    
    // 允许的媒体特性名称白名单
    // ['width', 'height'] = 仅允许列表中的特性，null = 不限制
    // ✅ @media (min-width: 768px)
    'media-feature-name-allowed-list': null,
    
    // 媒体特性名称大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ @media (min-width: 768px) ❌ @media (MIN-WIDTH: 768px)
    'media-feature-name-case': 'lower',
    
    // 禁止的媒体特性名称黑名单
    // ['max-width'] = 禁止列表中的特性，null = 不限制
    // ❌ @media (max-width: 768px)
    'media-feature-name-disallowed-list': null,
    
    // 禁止未知的媒体特性名称
    // true = 禁止
    // ✅ @media (min-width: 768px) ❌ @media (unknown: value)
    'media-feature-name-no-unknown': true,
    
    // 禁止媒体特性名称使用浏览器前缀
    // true = 禁止
    // ✅ @media (min-width: 768px) ❌ @media (-webkit-min-width: 768px)
    'media-feature-name-no-vendor-prefix': true,
    
    // 媒体特性名称允许的单位白名单
    // { 'width': ['px', 'em'] } = 指定特性允许的单位，null = 不限制
    // ✅ @media (min-width: 768px)
    'media-feature-name-unit-allowed-list': null,
    
    // 媒体特性名称允许的值白名单
    // { 'orientation': ['portrait'] } = 指定特性允许的值，null = 不限制
    // ✅ @media (orientation: portrait)
    'media-feature-name-value-allowed-list': null,
    
    // 禁止未知的媒体特性名称和值组合
    // true = 禁止
    // ✅ @media (orientation: portrait) ❌ @media (orientation: unknown)
    'media-feature-name-value-no-unknown': true,
    
    // 媒体特性括号内是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ @media (min-width: 768px) ❌ @media ( min-width: 768px )
    'media-feature-parentheses-space-inside': 'never',
    
    // 媒体特性范围表示法
    // 'prefix' = 前缀形式，'context' = 上下文形式，null = 不限制
    // ✅ (min-width: 768px) ✅ (width >= 768px)
    'media-feature-range-notation': null,
    
    // 媒体特性范围操作符后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ (width >= 768px) ❌ (width >=768px)
    'media-feature-range-operator-space-after': 'always',
    
    // 媒体特性范围操作符前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ (width >= 768px) ❌ (width>= 768px)
    'media-feature-range-operator-space-before': 'always',
    
    // ========================================
    // 自定义媒体（Custom media）
    // ========================================
    
    // 自定义媒体查询命名模式
    // '正则表达式' = 强制匹配模式，null = 不限制
    // ✅ @custom-media --small-viewport
    'custom-media-pattern': null,
    
    // ========================================
    // 媒体查询列表（Media query list）
    // ========================================
    
    // 媒体查询列表逗号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行
    // ✅ @media screen,\n  print { }
    'media-query-list-comma-newline-after': 'always-multi-line',
    
    // 媒体查询列表逗号前是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行，null = 不限制
    // ✅ @media screen, print { }
    'media-query-list-comma-newline-before': null,
    
    // 媒体查询列表逗号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ @media screen, print { } ❌ @media screen,print { }
    'media-query-list-comma-space-after': 'always-single-line',
    
    // 媒体查询列表逗号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ @media screen, print { } ❌ @media screen , print { }
    'media-query-list-comma-space-before': 'never',
    
    // ========================================
    // @ 规则（At-rule）
    // ========================================
    
    // 允许的 @ 规则白名单
    // ['import', 'media'] = 仅允许列表中的 @ 规则，null = 不限制
    // ✅ @import "file.css"
    'at-rule-allowed-list': null,
    
    // 禁止的 @ 规则黑名单
    // ['extend'] = 禁止列表中的 @ 规则，null = 不限制
    // ❌ @extend .class
    'at-rule-disallowed-list': null,
    
    // @ 规则前是否需要空行 [deprecated]
    // 'always' = 始终需要，'never' = 不需要，except = 例外情况，ignore = 忽略情况
    // ✅ @import "file.css"
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'elseif'], // SCSS
      },
    ],
    
    // @ 规则名称大小写 [deprecated]
    // 'lower' = 小写，'upper' = 大写
    // ✅ @media ❌ @MEDIA
    'at-rule-name-case': 'lower',
    
    // @ 规则名称后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行，null = 不限制
    // ✅ @import "file.css"
    'at-rule-name-newline-after': null,
    
    // @ 规则名称后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ @media screen { } ❌ @media screen{ }
    'at-rule-name-space-after': 'always-single-line',
    
    // 禁止未知的 @ 规则
    // true = 禁止，ignoreAtRules = 忽略的 @ 规则
    // ✅ @media { } ❌ @unknown { }
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // Tailwind CSS
          'tailwind',
          'apply',
          'layer',
          'config',
          'screen',
          'responsive',
          'variants',
          // SCSS
          'mixin',
          'include',
          'extend',
          'function',
          'return',
          'each',
          'for',
          'if',
          'else',
          'use',
          'forward',
          'import',
          'at-root',
          'content',
          'debug',
          'warn',
          'error',
        ],
      },
    ],
    
    // 禁止 @ 规则使用浏览器前缀
    // true = 禁止
    // ✅ @keyframes ❌ @-webkit-keyframes
    'at-rule-no-vendor-prefix': true,
    
    // @ 规则必需的属性列表
    // { 'font-face': ['font-family', 'src'] } = 指定 @ 规则必需的属性，null = 不限制
    // ✅ @font-face { font-family: "Font"; src: url(); }
    'at-rule-property-required-list': null,
    
    // @ 规则分号后是否换行 [deprecated]
    // 'always' = 始终换行
    // ✅ @import "a.css";\n@import "b.css";
    'at-rule-semicolon-newline-after': 'always',
    
    // @ 规则分号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ @import "file.css"; ❌ @import "file.css" ;
    'at-rule-semicolon-space-before': 'never',
    
    // ========================================
    // 注释（Comment）
    // ========================================
    
    // 注释前是否需要空行 [deprecated]
    // 'always' = 始终需要，'never' = 不需要，null = 不限制
    // ✅ /* comment */
    'comment-empty-line-before': null,
    
    // 禁止空注释
    // true = 禁止
    // ✅ /* comment */ ❌ /*  */
    'comment-no-empty': true,
    
    // 注释内容模式
    // '正则表达式' = 强制匹配模式，null = 不限制
    // ✅ /* TODO: fix */
    'comment-pattern': null,
    
    // 注释内部是否需要空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ /* comment */ ❌ /*comment*/
    'comment-whitespace-inside': 'always',
    
    // 禁止的注释词黑名单
    // ['todo', 'fixme'] = 禁止列表中的词，null = 不限制
    // ❌ /* TODO */
    'comment-word-disallowed-list': null,
    
    // ========================================
    // 通用规则（General / Sheet）
    // ========================================
    
    // Alpha 值表示法
    // 'number' = 数字形式，'percentage' = 百分比形式
    // ✅ rgba(0, 0, 0, 0.5) ❌ rgba(0, 0, 0, 50%)
    'alpha-value-notation': 'number',
    
    // 色相角度表示法
    // 'number' = 数字形式，'angle' = 角度单位形式
    // ✅ hsl(180, 50%, 50%) ❌ hsl(180deg, 50%, 50%)
    'hue-degree-notation': 'number',
    
    // 颜色函数表示法
    // 'modern' = 现代语法，'legacy' = 传统语法
    // ✅ rgb(0 0 0) ❌ rgb(0, 0, 0)
    'color-function-notation': 'modern',
    
    // 字重值表示法
    // 'numeric' = 数字形式，'named-where-possible' = 尽可能使用名称，null = 不限制
    // ✅ font-weight: 700 ✅ font-weight: bold
    'font-weight-notation': null,
    
    // @import 表示法
    // 'string' = 字符串形式，'url' = url() 形式，null = 不限制
    // ✅ @import "file.css" ✅ @import url("file.css")
    'import-notation': null,
    
    // 禁止关键帧块中重复的选择器
    // true = 禁止
    // ❌ @keyframes { 0% {} 0% {} }
    'keyframe-block-no-duplicate-selectors': true,
    
    // 禁止关键帧声明中使用 !important
    // true = 禁止
    // ❌ @keyframes { 0% { color: red !important; } }
    'keyframe-declaration-no-important': true,
    
    // 禁止无效的命名网格区域
    // true = 禁止
    // ✅ grid-template-areas: "header header"
    'named-grid-areas-no-invalid': true,
    
    // 禁止降序的特异性选择器
    // true = 禁止，null = 允许（可能有意为之）
    // ❌ .a .b {} .a {}
    'no-descending-specificity': null,
    
    // 禁止重复的 @import 规则
    // true = 禁止
    // ✅ @import "a.css" ❌ @import "a.css"; @import "a.css"
    'no-duplicate-at-import-rules': true,
    
    // 禁止重复的选择器
    // true = 禁止
    // ✅ a {} b {} ❌ a {} a {}
    'no-duplicate-selectors': true,
    
    // 禁止空源代码
    // true = 禁止
    // ❌ 空文件
    'no-empty-source': true,
    
    // 禁止无效的双斜杠注释
    // true = 禁止（CSS 中应使用 /* */ 注释）
    // ✅ /* comment */ ❌ // comment
    'no-invalid-double-slash-comments': true,
    
    // 禁止无效位置的 @import 规则
    // true = 禁止（@import 必须在最前面）
    // ❌ a {} @import "file.css"
    'no-invalid-position-at-import-rule': true,
    
    // 禁止不规则的空白
    // true = 禁止
    // ✅ color: red ❌ color:　red (全角空格)
    'no-irregular-whitespace': true,
    
    // 禁止未知的动画名称
    // true = 禁止
    // ✅ animation: slide-in ❌ animation: unknown-animation
    'no-unknown-animations': true,
    
    // 禁止未知的自定义属性
    // true = 禁止，null = 允许
    // ✅ color: var(--main-color)
    'no-unknown-custom-properties': null,
    
    // ========================================
    // 样式格式（已废弃但仍可用）
    // ========================================
    
    // 最多连续空行数 [deprecated]
    // 数字 = 最多几行
    // ✅ a {}\n\nb {} ❌ a {}\n\n\nb {}
    'max-empty-lines': 1,
    
    // 每行最大字符数 [deprecated]
    // 数字 = 最多几个字符，null = 不限制
    // ✅ color: red
    'max-line-length': null,
    
    // 最大嵌套深度
    // 数字 = 最多几层，null = 不限制
    // ✅ a { b { c {} } }
    'max-nesting-depth': null,
    
    // 禁止第一行为空行 [deprecated]
    // true = 禁止，null = 允许
    // ❌ 文件首行为空
    'no-empty-first-line': null,
    
    // 禁止行尾空白 [deprecated]
    // true = 禁止
    // ✅ color: red ❌ color: red  (行尾有空格)
    'no-eol-whitespace': true,
    
    // 禁止多余的分号 [deprecated]
    // true = 禁止
    // ✅ color: red; ❌ color: red;;
    'no-extra-semicolons': true,
    
    // 禁止缺少文件末尾换行符 [deprecated]
    // true = 禁止
    // ✅ color: red\n ❌ color: red(EOF)
    'no-missing-end-of-source-newline': true,
    
    // 禁止使用制表符 [deprecated]
    // true = 禁止
    // ✅ color: red(空格缩进) ❌ color: red(Tab缩进)
    'no-tabs': true,
    
    // Unicode BOM [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ 无 BOM ❌ 有 BOM
    'unicode-bom': 'never',
    
    // 缩进 [deprecated]
    // 数字 = 空格数，'tab' = 制表符
    // ✅ a {\n  color: red\n} (2空格缩进)
    indentation: 2,
    
    // 换行符类型 [deprecated]
    // 'unix' = LF，'windows' = CRLF，null = 不限制
    // ✅ \n
    linebreaks: null,
    
    // ========================================
    // 规则级别限制
    // ========================================
    
    // 规则前是否需要空行 [deprecated]
    // 'always' = 始终需要，'always-multi-line' = 多行时需要，except = 例外情况
    // ✅ a {}\n\nb {}
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    
    // 规则选择器和属性的禁止组合
    // { 'a': ['color'] } = 指定选择器禁止的属性，null = 不限制
    // ❌ a { color: red }
    'rule-selector-property-disallowed-list': null,
    
    // ========================================
    // 值列表（Value list）
    // ========================================
    
    // 值列表逗号后是否换行 [deprecated]
    // 'always' = 始终换行，'always-multi-line' = 多行时换行，null = 不限制
    // ✅ color: rgb(0, 0, 0)
    'value-list-comma-newline-after': null,
    
    // 值列表逗号前是否换行 [deprecated]
    // 'always' = 始终换行，'never' = 不换行，null = 不限制
    // ✅ color: rgb(0, 0, 0)
    'value-list-comma-newline-before': null,
    
    // 值列表逗号后是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有，'always-single-line' = 单行时必须有
    // ✅ color: rgb(0, 0, 0) ❌ color: rgb(0,0,0)
    'value-list-comma-space-after': 'always-single-line',
    
    // 值列表逗号前是否有空格 [deprecated]
    // 'always' = 必须有，'never' = 不能有
    // ✅ color: rgb(0, 0, 0) ❌ color: rgb(0 , 0 , 0)
    'value-list-comma-space-before': 'never',
    
    // 值列表最多连续空行数 [deprecated]
    // 数字 = 最多几行
    // ✅ color: rgb(0, 0, 0)
    'value-list-max-empty-lines': 0,
    
    // ========================================
    // CSS 属性排序
    // ========================================
    
    // 指定 CSS 属性的排序顺序
    // 按照逻辑分组：定位 → 布局 → 盒模型 → 边框 → 背景 → 文字 → 列表 → 表格 → 视觉效果 → 变换动画 → 交互 → 打印 → 其他
    // 这样的排序有助于代码的可读性和维护性
    'order/properties-order': [
      // 定位
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'inset',
      'inset-block',
      'inset-block-start',
      'inset-block-end',
      'inset-inline',
      'inset-inline-start',
      'inset-inline-end',
      
      // 布局
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'align-items',
      'align-content',
      'align-self',
      'justify-items',
      'justify-self',
      'place-content',
      'place-items',
      'place-self',
      'order',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'grid',
      'grid-template',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-area',
      'gap',
      'row-gap',
      'column-gap',
      'columns',
      'column-width',
      'column-count',
      'column-gap',
      'column-rule',
      'column-fill',
      'column-span',
      'float',
      'clear',
      'isolation',
      
      // 盒模型
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'block-size',
      'min-block-size',
      'max-block-size',
      'inline-size',
      'min-inline-size',
      'max-inline-size',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-block',
      'margin-block-start',
      'margin-block-end',
      'margin-inline',
      'margin-inline-start',
      'margin-inline-end',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'padding-block',
      'padding-block-start',
      'padding-block-end',
      'padding-inline',
      'padding-inline-start',
      'padding-inline-end',
      
      // 边框
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-block',
      'border-block-width',
      'border-block-style',
      'border-block-color',
      'border-block-start',
      'border-block-start-width',
      'border-block-start-style',
      'border-block-start-color',
      'border-block-end',
      'border-block-end-width',
      'border-block-end-style',
      'border-block-end-color',
      'border-inline',
      'border-inline-width',
      'border-inline-style',
      'border-inline-color',
      'border-inline-start',
      'border-inline-start-width',
      'border-inline-start-style',
      'border-inline-start-color',
      'border-inline-end',
      'border-inline-end-width',
      'border-inline-end-style',
      'border-inline-end-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      
      // 背景
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-size',
      'background-clip',
      'background-origin',
      'background-attachment',
      'background-blend-mode',
      
      // 文字
      'color',
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-variant-caps',
      'font-variant-numeric',
      'font-variant-ligatures',
      'font-feature-settings',
      'font-optical-sizing',
      'font-kerning',
      'font-stretch',
      'font-synthesis',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'text-align',
      'text-align-last',
      'text-decoration',
      'text-decoration-line',
      'text-decoration-style',
      'text-decoration-color',
      'text-decoration-thickness',
      'text-underline-position',
      'text-underline-offset',
      'text-transform',
      'text-indent',
      'text-overflow',
      'text-shadow',
      'text-emphasis',
      'text-emphasis-style',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-rendering',
      'text-wrap',
      'white-space',
      'word-wrap',
      'word-break',
      'overflow-wrap',
      'hyphens',
      'tab-size',
      'vertical-align',
      'direction',
      'unicode-bidi',
      'writing-mode',
      'text-orientation',
      
      // 列表
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'marker',
      
      // 表格
      'table-layout',
      'border-collapse',
      'border-spacing',
      'caption-side',
      'empty-cells',
      
      // 其他视觉效果
      'opacity',
      'visibility',
      'overflow',
      'overflow-x',
      'overflow-y',
      'overflow-anchor',
      'overflow-block',
      'overflow-inline',
      'overscroll-behavior',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'clip',
      'clip-path',
      'clip-rule',
      'mask',
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-mode',
      'mask-origin',
      'mask-position',
      'mask-repeat',
      'mask-size',
      'mask-type',
      'filter',
      'backdrop-filter',
      'mix-blend-mode',
      'object-fit',
      'object-position',
      'aspect-ratio',
      
      // 变换和动画
      'transform',
      'transform-origin',
      'transform-style',
      'transform-box',
      'rotate',
      'scale',
      'translate',
      'perspective',
      'perspective-origin',
      'backface-visibility',
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
      'animation-timeline',
      'animation-range',
      'animation-range-start',
      'animation-range-end',
      
      // 交互
      'cursor',
      'pointer-events',
      'user-select',
      'touch-action',
      'resize',
      'scroll-behavior',
      'scroll-margin',
      'scroll-margin-top',
      'scroll-margin-right',
      'scroll-margin-bottom',
      'scroll-margin-left',
      'scroll-margin-block',
      'scroll-margin-block-start',
      'scroll-margin-block-end',
      'scroll-margin-inline',
      'scroll-margin-inline-start',
      'scroll-margin-inline-end',
      'scroll-padding',
      'scroll-padding-top',
      'scroll-padding-right',
      'scroll-padding-bottom',
      'scroll-padding-left',
      'scroll-padding-block',
      'scroll-padding-block-start',
      'scroll-padding-block-end',
      'scroll-padding-inline',
      'scroll-padding-inline-start',
      'scroll-padding-inline-end',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scrollbar-color',
      'scrollbar-gutter',
      'scrollbar-width',
      
      // 打印
      'break-before',
      'break-after',
      'break-inside',
      'page-break-before',
      'page-break-after',
      'page-break-inside',
      'orphans',
      'widows',
      
      // 其他
      'content',
      'content-visibility',
      'quotes',
      'counter-reset',
      'counter-increment',
      'counter-set',
      'will-change',
      'contain',
      'contain-intrinsic-size',
      'contain-intrinsic-width',
      'contain-intrinsic-height',
      'contain-intrinsic-block-size',
      'contain-intrinsic-inline-size',
      'appearance',
      'caret-color',
      'accent-color',
      'forced-color-adjust',
      'color-scheme',
    ],
  },
};
