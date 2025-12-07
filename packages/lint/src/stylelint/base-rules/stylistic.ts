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
  /**
   * @name @stylistic/color-hex-case
   * @description 限制 hex 颜色的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - #fff
   * @example ❌ 错误示例：
   *  - #FFF                                (应使用小写)
   */
  '@stylistic/color-hex-case': ['lower'],

  /**
   * @name @stylistic/indentation
   * @description 限制缩进空格数
   * @value number - 空格数（如：2 表示 2 个空格）
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *    color: red;                          (缩进不正确，应为 2 个空格)
   *    }
   */
  '@stylistic/indentation': [2],

  /**
   * @name @stylistic/linebreaks
   * @description 限制换行符类型
   * @value 'unix' - Unix 换行符（LF，\n）
   * @value 'windows' - Windows 换行符（CRLF，\r\n）
   * @example ✅ 正确示例：使用 LF 换行符
   * @example ❌ 错误示例：使用 CRLF 换行符（应使用 Unix 换行符）
   */
  '@stylistic/linebreaks': ['unix'],

  /**
   * @name @stylistic/max-empty-lines
   * @description 限制最多连续空行数
   * @value number - 最大空行数（如：1 表示最多 1 个空行）
   * @example ✅ 正确示例：
   *  - a {}
   *
   *    b {}
   * @example ❌ 错误示例：
   *  - a {}
   *
   *
   *    b {}                                 (超过最大空行数)
   */
  '@stylistic/max-empty-lines': [1],

  /**
   * @name @stylistic/max-line-length
   * @description 限制最大行长度
   * @value null - 不限制
   * @value number - 最大字符数
   * @example ✅ 正确示例（假设配置为 80）：
   *  - a { color: red; }
   * @example ❌ 错误示例（假设配置为 80）：
   *  - a { color: red; background: blue; border: 1px solid black; } (超过最大行长度)
   */
  '@stylistic/max-line-length': [null],

  /**
   * @name @stylistic/selector-max-empty-lines
   * @description 限制选择器中最多连续空行数
   * @value null - 不限制
   * @value number - 最大空行数
   * @example ✅ 正确示例（假设配置为 0）：
   *  - a.b {}
   * @example ❌ 错误示例（假设配置为 0）：
   *  - a
   *
   *    .b {}                                (选择器中超过最大空行数)
   */
  '@stylistic/selector-max-empty-lines': [null],

  /**
   * @name @stylistic/value-list-max-empty-lines
   * @description 限制值列表中最多连续空行数
   * @value null - 不限制
   * @value number - 最大空行数
   * @example ✅ 正确示例（假设配置为 0）：
   *  - margin: 10px, 20px;
   * @example ❌ 错误示例（假设配置为 0）：
   *  - margin: 10px,
   *
   *    20px;                                (值列表中超过最大空行数)
   */
  '@stylistic/value-list-max-empty-lines': [null],

  /**
   * @name @stylistic/function-max-empty-lines
   * @description 限制函数中最多连续空行数
   * @value null - 不限制
   * @value number - 最大空行数
   * @example ✅ 正确示例（假设配置为 0）：
   *  - rgb(0, 0, 0)
   * @example ❌ 错误示例（假设配置为 0）：
   *  - rgb(0,
   *
   *    0, 0)                                (函数中超过最大空行数)
   */
  '@stylistic/function-max-empty-lines': [null],

  /**
   * @name @stylistic/no-empty-first-line
   * @description 禁止首行为空
   * @value true - 启用，禁止首行为空
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a {}
   * @example ❌ 错误示例：
   *  - (空行)
   *    a {}                                 (首行为空)
   */
  '@stylistic/no-empty-first-line': [true],

  /**
   * @name @stylistic/no-eol-whitespace
   * @description 禁止行尾空格
   * @value true - 启用，禁止行尾空格
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a {}
   * @example ❌ 错误示例：
   *  - a {}                                 (行尾有空格)
   */
  '@stylistic/no-eol-whitespace': [true],

  /**
   * @name @stylistic/no-extra-semicolons
   * @description 禁止多余的分号
   * @value true - 启用，禁止多余分号
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red;; }                  (多余的分号)
   */
  '@stylistic/no-extra-semicolons': [true],

  /**
   * @name @stylistic/no-missing-end-of-source-newline
   * @description 要求文件末尾必须有换行符
   * @value true - 启用，要求文件末尾有换行符
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a {}
   *    (文件末尾有换行符)
   * @example ❌ 错误示例：
   *  - a {}                                  (文件末尾缺少换行符)
   */
  '@stylistic/no-missing-end-of-source-newline': [true],

  /**
   * @name @stylistic/number-leading-zero
   * @description 限制数字前导零格式
   * @value 'always' - 总是要求前导零
   * @value 'never' - 禁止前导零
   * @example ✅ 正确示例：
   *  - 0.5
   * @example ❌ 错误示例：
   *  - .5                                  (缺少前导零)
   */
  '@stylistic/number-leading-zero': ['always'],

  /**
   * @name @stylistic/number-no-trailing-zeros
   * @description 禁止数字尾随零
   * @value true - 启用，禁止尾随零
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - 1.5
   * @example ❌ 错误示例：
   *  - 1.50                                (有尾随零)
   */
  '@stylistic/number-no-trailing-zeros': [true],

  /**
   * @name @stylistic/property-case
   * @description 限制属性名的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - COLOR: red;                         (应使用小写)
   */
  '@stylistic/property-case': ['lower'],

  /**
   * @name @stylistic/selector-pseudo-class-case
   * @description 限制伪类的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - :hover {}
   * @example ❌ 错误示例：
   *  - :HOVER {}                           (应使用小写)
   */
  '@stylistic/selector-pseudo-class-case': ['lower'],

  /**
   * @name @stylistic/selector-pseudo-element-case
   * @description 限制伪元素的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - ::before {}
   * @example ❌ 错误示例：
   *  - ::BEFORE {}                         (应使用小写)
   */
  '@stylistic/selector-pseudo-element-case': ['lower'],

  /**
   * @name @stylistic/string-quotes
   * @description 限制字符串引号类型
   * @value 'single' - 单引号
   * @value 'double' - 双引号
   * @example ✅ 正确示例：
   *  - content: 'x';
   * @example ❌ 错误示例：
   *  - content: "x";                       (应使用单引号)
   */
  '@stylistic/string-quotes': ['single'],

  /**
   * @name @stylistic/unicode-bom
   * @description 限制 Unicode BOM 的使用
   * @value 'never' - 禁止 BOM
   * @value 'always' - 要求 BOM
   * @example ✅ 正确示例：文件开头无 BOM
   * @example ❌ 错误示例：文件开头有 BOM（应移除）
   */
  '@stylistic/unicode-bom': ['never'],

  /**
   * @name @stylistic/unit-case
   * @description 限制单位的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - 10px
   * @example ❌ 错误示例：
   *  - 10PX                               (应使用小写)
   */
  '@stylistic/unit-case': ['lower'],

  // Stylistic 空格规则

  /**
   * @name @stylistic/at-rule-name-space-after
   * @description 限制 \@规则名称后的空格
   * @value 'always' - 总是需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - \@media (width > 600px) {}
   * @example ❌ 错误示例：
   *  - \@media(width > 600px) {}            (缺少空格)
   */
  '@stylistic/at-rule-name-space-after': ['always'],

  /**
   * @name @stylistic/block-opening-brace-space-before
   * @description 限制块开括号前的空格
   * @value 'always' - 总是需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a{ color: red; }                     (缺少空格)
   */
  '@stylistic/block-opening-brace-space-before': ['always'],

  /**
   * @name @stylistic/declaration-colon-space-after
   * @description 限制声明冒号后的空格
   * @value 'always' - 总是需要空格
   * @value 'always-single-line' - 单行时需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - color:red;                           (缺少空格)
   */
  '@stylistic/declaration-colon-space-after': ['always-single-line'],

  /**
   * @name @stylistic/declaration-colon-space-before
   * @description 限制声明冒号前的空格
   * @value 'never' - 禁止空格
   * @value 'always' - 总是需要空格
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - color : red;                         (冒号前不应有空格)
   */
  '@stylistic/declaration-colon-space-before': ['never'],

  /**
   * @name @stylistic/function-comma-space-after
   * @description 限制函数逗号后的空格
   * @value 'always' - 总是需要空格
   * @value 'always-single-line' - 单行时需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - rgb(0, 0, 0)
   * @example ❌ 错误示例：
   *  - rgb(0,0, 0)                          (逗号后缺少空格)
   */
  '@stylistic/function-comma-space-after': ['always-single-line'],

  /**
   * @name @stylistic/function-comma-space-before
   * @description 限制函数逗号前的空格
   * @value 'never' - 禁止空格
   * @value 'always' - 总是需要空格
   * @example ✅ 正确示例：
   *  - rgb(0, 0, 0)
   * @example ❌ 错误示例：
   *  - rgb(0 , 0, 0)                        (逗号前不应有空格)
   */
  '@stylistic/function-comma-space-before': ['never'],

  /**
   * @name @stylistic/function-parentheses-space-inside
   * @description 限制函数括号内的空格
   * @value 'never' - 禁止空格
   * @value 'never-single-line' - 单行时禁止空格
   * @value 'always' - 总是需要空格
   * @example ✅ 正确示例：
   *  - calc(100% - 20px)
   * @example ❌ 错误示例：
   *  - calc( 100% - 20px )                 (括号内不应有空格)
   */
  '@stylistic/function-parentheses-space-inside': ['never-single-line'],

  /**
   * @name @stylistic/selector-combinator-space-after
   * @description 限制选择器组合器后的空格（> + ~）
   * @value 'always' - 总是需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - a > b {}
   *  - a + b {}
   * @example ❌ 错误示例：
   *  - a>b {}                               (组合器后缺少空格)
   */
  '@stylistic/selector-combinator-space-after': ['always'],

  /**
   * @name @stylistic/selector-combinator-space-before
   * @description 限制选择器组合器前的空格（> + ~）
   * @value 'always' - 总是需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - a > b {}
   * @example ❌ 错误示例：
   *  - a> b {}                              (组合器前缺少空格)
   */
  '@stylistic/selector-combinator-space-before': ['always'],

  /**
   * @name @stylistic/value-list-comma-space-after
   * @description 限制值列表逗号后的空格
   * @value 'always' - 总是需要空格
   * @value 'always-single-line' - 单行时需要空格
   * @value 'never' - 禁止空格
   * @example ✅ 正确示例：
   *  - margin: 10px, 20px, 30px;
   * @example ❌ 错误示例：
   *  - margin: 10px,20px, 30px;             (逗号后缺少空格)
   */
  '@stylistic/value-list-comma-space-after': ['always-single-line'],

  /**
   * @name @stylistic/value-list-comma-space-before
   * @description 限制值列表逗号前的空格
   * @value 'never' - 禁止空格
   * @value 'always' - 总是需要空格
   * @example ✅ 正确示例：
   *  - margin: 10px, 20px;
   * @example ❌ 错误示例：
   *  - margin: 10px , 20px;                 (逗号前不应有空格)
   */
  '@stylistic/value-list-comma-space-before': ['never'],

  // Stylistic 换行规则

  /**
   * @name @stylistic/at-rule-semicolon-newline-after
   * @description 限制 \@规则分号后的换行
   * @value 'always' - 总是需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - \@import 'a.css';
   *    a {}
   * @example ❌ 错误示例：
   *  - \@import 'a.css'; a {}              (分号后缺少换行)
   */
  '@stylistic/at-rule-semicolon-newline-after': ['always'],

  /**
   * @name @stylistic/block-closing-brace-newline-after
   * @description 限制块闭括号后的换行
   * @value 'always' - 总是需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *    b {}
   * @example ❌ 错误示例：
   *  - a { color: red; } b {}              (闭括号后缺少换行)
   */
  '@stylistic/block-closing-brace-newline-after': ['always'],

  /**
   * @name @stylistic/block-closing-brace-newline-before
   * @description 限制块闭括号前的换行
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行块时需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; }                   (单行块无需换行)
   */
  '@stylistic/block-closing-brace-newline-before': ['always-multi-line'],

  /**
   * @name @stylistic/block-opening-brace-newline-after
   * @description 限制块开括号后的换行
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行块时需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; }                   (单行块无需换行)
   */
  '@stylistic/block-opening-brace-newline-after': ['always-multi-line'],

  /**
   * @name @stylistic/declaration-block-semicolon-newline-after
   * @description 限制声明块分号后的换行
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行时需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *      background: blue;
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; background: blue; } (单行时无需换行)
   */
  '@stylistic/declaration-block-semicolon-newline-after': ['always-multi-line'],

  /**
   * @name @stylistic/declaration-block-trailing-semicolon
   * @description 限制声明块末尾的分号
   * @value 'always' - 总是需要分号
   * @value 'never' - 禁止分号
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red }                    (缺少末尾分号)
   */
  '@stylistic/declaration-block-trailing-semicolon': ['always'],

  /**
   * @name @stylistic/selector-list-comma-newline-after
   * @description 限制选择器列表逗号后的换行
   * @value 'always' - 总是需要换行
   * @value 'never' - 禁止换行
   * @example ✅ 正确示例：
   *  - a,
   *    b {}
   * @example ❌ 错误示例：
   *  - a, b {}                             (逗号后缺少换行)
   */
  '@stylistic/selector-list-comma-newline-after': ['always'],
};
