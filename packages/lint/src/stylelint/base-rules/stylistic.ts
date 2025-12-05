/**
 * Stylistic 格式化规则
 * 
 * 来自 @stylistic/stylelint-plugin 插件（38条）
 * - 基础格式：缩进、换行符、空行、行长度
 * - 大小写：hex、属性、伪类、伪元素、单位
 * - 引号：字符串引号
 * - 空格规则：各种位置的空格要求（11条）
 * - 换行规则：各种位置的换行要求（7条）
 * - 其他：前导零、尾随零、BOM 等
 */

import type { Config } from 'stylelint';

export const stylisticRules: Config['rules'] = {
  // Stylistic 规则（@stylistic/stylelint-plugin）
  
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
  
  // Stylistic 空格规则
  
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
  
  // Stylistic 换行规则
  
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
  
};
