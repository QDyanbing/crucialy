/**
 * General 通用规则
 *
 * 包含通用验证和检查规则（10条）
 * - 空源文件
 * - 注释格式
 * - 空白字符
 * - 特异性检查
 * - 重复检查
 * - 未知定义检查（动画、自定义属性等）
 */

import type { Config } from 'stylelint';

const generalRules: Config['rules'] = {
  /**
   * @name no-empty-source
   * @description 允许或禁止空源文件；Base 配置允许空文件，某些构建场景可能生成空文件或开发中的占位文件
   * @value null - 允许空文件
   * @value true - 禁止空文件
   * @example ✅ 正确示例（null 时）：
   *  - (空文件)
   *  - a { color: red; }
   * @example ❌ 错误示例（假设配置为 true）：
   *  - (空文件)                               (不允许空文件)
   */
  'no-empty-source': true,

  /**
   * @name no-invalid-double-slash-comments
   * @description 禁止使用无效的双斜杠注释；CSS 不支持双斜杠注释语法，只支持块注释
   * @value true - 启用，禁止双斜杠注释
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - /* 这是注释 *\/
   *    a { color: red; }
   * @example ❌ 错误示例：
   *  - // 这是注释
   *    a { color: red; }                      (CSS 中无效，应使用 /* *\/)
   */
  'no-invalid-double-slash-comments': true,

  /**
   * @name no-irregular-whitespace
   * @description 禁止不规则的空白字符；禁止使用不可见的特殊空白字符（零宽空格、不间断空格等），这些字符不可见且可能导致解析错误
   * @value true - 启用，禁止不规则空白字符
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color:​red; }                       (包含零宽字符)
   */
  'no-irregular-whitespace': true,

  /**
   * @name no-descending-specificity
   * @description 禁止低特异性选择器覆盖高特异性选择器；Strict 模式强制检查，防止样式覆盖错误
   * @value true - 检查并报错（Strict 配置，覆盖 Base 的 null）
   * @value null - 不检查
   * @example ✅ 正确示例：
   *  - #id .class { color: red; }
   *    .class { color: blue; }
   *  - .a .b { color: red; }
   *    .a { color: blue; }
   * @example ❌ 错误示例：
   *  - #id .class { color: red; }
   *    .class { color: blue; }                (特异性降低：1-1-0 -> 0-1-0)
   *  - .a.b { color: red; }
   *    .a { color: blue; }                    (特异性降低：0-2-0 -> 0-1-0)
   */
  'no-descending-specificity': true,

  /**
   * @name no-duplicate-at-import-rules
   * @description 禁止重复的 \@import 规则；同一个文件不应该被 \@import 多次，重复导入会增加文件大小
   * @value true - 启用，禁止重复 \@import
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@import 'reset.css';
   *    \@import 'base.css';
   * @example ❌ 错误示例：
   *  - \@import 'reset.css';
   *    \@import 'base.css';
   *    \@import 'reset.css';                  (重复导入)
   */
  'no-duplicate-at-import-rules': true,

  /**
   * @name no-duplicate-selectors
   * @description 禁止重复的选择器；同一个文件中不应该有重复的选择器，后面的规则会覆盖前面的
   * @value true - 启用，禁止重复选择器
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *    b { color: blue; }
   * @example ❌ 错误示例：
   *  - a { color: red; }
   *    b { color: blue; }
   *    a { background: white; }               (重复的选择器 a)
   */
  'no-duplicate-selectors': true,

  /**
   * @name no-unknown-animations
   * @description 禁止使用未定义的动画名称；animation 引用的动画名必须有对应的 \@keyframes 定义，帮助发现拼写错误
   * @value true - 启用，禁止未定义的动画
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@keyframes slide { }
   *    a { animation: slide 1s; }
   * @example ❌ 错误示例：
   *  - a { animation: slideIn 1s; }           (没有定义 slideIn)
   */
  'no-unknown-animations': true,

  /**
   * @name no-unknown-custom-media
   * @description 禁止使用未定义的自定义 media query；\@media 引用的自定义 media 必须先用 \@custom-media 定义
   * @value true - 启用，禁止未定义的自定义 media
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@custom-media --small (width < 768px);
   *    \@media (--small) { }
   * @example ❌ 错误示例：
   *  - \@media (--unknown) { }                (没有定义 --unknown)
   */
  'no-unknown-custom-media': true,

  /**
   * @name no-unknown-custom-properties
   * @description 检查是否使用了未定义的自定义属性（CSS 变量）；Strict 模式强制检查，避免拼写错误和运行时问题
   * @value true - 检查并报错（Strict 配置，覆盖 Base 的 null）
   * @value null - 不检查
   * @example ✅ 正确示例：
   *  - :root { --primary-color: #ff0000; }
   *    .button { color: var(--primary-color); }
   * @example ❌ 错误示例：
   *  - .button { color: var(--primary-colour); }  (拼写错误：colour 应该是 color)
   *  - .button { color: var(--undefined-var); }   (未定义的变量)
   */
  'no-unknown-custom-properties': true,

  /**
   * @name no-invalid-position-at-import-rule
   * @description 要求 \@import 规则在文件开头；CSS 规范要求 \@import 在最前面，否则会被忽略
   * @value true - 启用，检查 \@import 位置
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@import 'reset.css';
   *    \@import 'base.css';
   *    a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red; }
   *    \@import 'base.css';                   (位置错误，会被忽略)
   */
  'no-invalid-position-at-import-rule': true,

  /**
   * @name no-invalid-position-declaration
   * @description 禁止声明出现在无效位置；CSS 声明必须在规则块或 \@规则块内，这是 CSS 语法要求
   * @value true - 启用，禁止无效位置的声明
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *  - \@media (width > 600px) {
   *      a { color: red; }
   *    }
   * @example ❌ 错误示例：
   *  - \@import { color: red; }               (声明不能在 \@import 中)
   *  - color: red;                            (顶层不能直接写声明)
   */
  'no-invalid-position-declaration': true,
};

export default generalRules;
