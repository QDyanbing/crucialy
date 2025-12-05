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

export const generalRules: Config['rules'] = {
  /**
   * no-empty-source
   * 允许或禁止空源文件
   *
   * 说明：检查 CSS 文件是否为空
   * - null：允许空文件
   * - true：禁止空文件
   *
   * Base 配置允许空文件（null），因为：
   * - 某些构建场景可能生成空文件
   * - 开发中的占位文件
   * - 不影响实际功能
   *
   * ✅ 正确示例（null 时）：
   * (空文件)
   *
   * ✅ 正确示例（null 时）：
   * a { color: red; }
   */
  'no-empty-source': null,

  /**
   * no-invalid-double-slash-comments
   * 禁止使用无效的双斜杠注释
   *
   * 说明：CSS 不支持 // 注释语法
   * - CSS 只支持块注释 (星号注释)
   * - // 注释在 CSS 中无效（会被解析为属性）
   * - Sass/Less 支持 //，但纯 CSS 不支持
   *
   * ✅ 正确示例：
   * (使用块注释)
   * a { color: red; }
   *
   * ❌ 错误示例：
   * // 这是注释 (CSS 中无效)
   * a { color: red; }
   */
  'no-invalid-double-slash-comments': true,

  /**
   * no-irregular-whitespace
   * 禁止不规则的空白字符
   *
   * 说明：禁止使用不可见的特殊空白字符
   * - 零宽空格（Zero-width space）
   * - 不间断空格（Non-breaking space）
   * - 全角空格等
   *
   * 这些字符：
   * - 不可见，难以发现
   * - 可能导致解析错误
   * - 通常是复制粘贴引入的
   *
   * ✅ 正确示例：
   * a { color: red; }
   *
   * ❌ 错误示例：
   * a { color:​red; } (包含零宽字符)
   */
  'no-irregular-whitespace': true,

  /**
   * no-descending-specificity
   * 禁止低特异性选择器覆盖高特异性选择器
   *
   * 说明：检查选择器特异性是否降低
   * - 后面的选择器特异性低于前面的
   * - 可能导致样式无法生效
   * - 通常是代码组织问题
   *
   * Base 配置不检查（null），因为：
   * - 在大型项目中可能产生大量警告
   * - 某些场景下是有意为之
   * - 可以通过代码组织规范解决
   *
   * ✅ 正确示例（null 时）：
   * #id { color: red; }
   * .class { color: blue; }
   *
   * ❌ 错误示例（如果配置为 true）：
   * #id .class { color: red; }  (特异性 1-1-0)
   * .class { color: blue; }     (特异性 0-1-0，降低了)
   */
  'no-descending-specificity': null,

  /**
   * no-duplicate-at-import-rules
   * 禁止重复的 @import 规则
   *
   * 说明：同一个文件不应该被 @import 多次
   * - 重复导入会增加文件大小
   * - 可能导致样式重复
   * - 通常是疏忽或复制粘贴错误
   *
   * ✅ 正确示例：
   * @import 'reset.css';
   * @import 'base.css';
   *
   * ❌ 错误示例：
   * @import 'reset.css';
   * @import 'base.css';
   * @import 'reset.css'; (重复导入)
   */
  'no-duplicate-at-import-rules': true,

  /**
   * no-duplicate-selectors
   * 禁止重复的选择器
   *
   * 说明：同一个文件中不应该有重复的选择器
   * - 后面的规则会覆盖前面的
   * - 通常是维护过程中的遗留代码
   * - 应该合并或删除重复的规则
   *
   * ✅ 正确示例：
   * a { color: red; }
   * b { color: blue; }
   *
   * ❌ 错误示例：
   * a { color: red; }
   * b { color: blue; }
   * a { background: white; } (重复的 a)
   */
  'no-duplicate-selectors': true,

  /**
   * no-unknown-animations
   * 禁止使用未定义的动画名称
   *
   * 说明：animation 引用的动画名必须已定义
   * - 必须有对应的 @keyframes 定义
   * - 未定义的动画不会生效
   * - 帮助发现拼写错误
   *
   * ✅ 正确示例：
   * @keyframes slide { }
   * a { animation: slide 1s; }
   *
   * ❌ 错误示例：
   * a { animation: slideIn 1s; } (没有定义 slideIn)
   */
  'no-unknown-animations': true,

  /**
   * no-unknown-custom-media
   * 禁止使用未定义的自定义 media query
   *
   * 说明：@media 引用的自定义 media 必须已定义
   * - 自定义 media：@custom-media --name (条件);
   * - 必须先定义才能使用
   * - 帮助发现拼写错误
   *
   * ✅ 正确示例：
   * @custom-media --small (width < 768px);
   * @media (--small) { }
   *
   * ❌ 错误示例：
   * @media (--unknown) { } (没有定义 --unknown)
   */
  'no-unknown-custom-media': true,

  /**
   * no-unknown-custom-properties
   * 检查是否使用了未定义的自定义属性（CSS 变量）
   *
   * 说明：检查 var() 引用的 CSS 变量是否已定义
   * - null：不检查
   * - true：检查并报错
   *
   * Base 配置不检查（null），因为：
   * - CSS 变量可能在其他文件中定义
   * - 可能来自父元素继承
   * - 可能在 JavaScript 中动态设置
   * - 检查会产生大量误报
   *
   * ✅ 正确示例（null 时）：
   * a { color: var(--primary); } (即使未定义也不报错)
   */
  'no-unknown-custom-properties': null,

  /**
   * no-invalid-position-at-import-rule
   * 要求 @import 规则在文件开头
   *
   * 说明：@import 必须在所有其他规则之前
   * - CSS 规范要求 @import 在最前面
   * - @import 后面如果有其他规则，@import 会被忽略
   * - 这是 CSS 语法错误
   *
   * ✅ 正确示例：
   * @import 'reset.css';
   * @import 'base.css';
   * a { color: red; }
   *
   * ❌ 错误示例：
   * a { color: red; }
   * @import 'base.css'; (位置错误，会被忽略)
   */
  'no-invalid-position-at-import-rule': true,

  /**
   * no-invalid-position-declaration
   * 禁止声明出现在无效位置
   *
   * 说明：CSS 声明必须在规则块或 @规则块内
   * - 不能在 @import 等规则内出现声明
   * - 不能在文件顶层直接写声明
   * - 这是 CSS 语法错误
   *
   * ✅ 正确示例：
   * a { color: red; }
   *
   * ✅ 正确示例：
   * @media (width > 600px) {
   *   a { color: red; }
   * }
   *
   * ❌ 错误示例：
   * @import { color: red; } (声明不能在 @import 中)
   *
   * ❌ 错误示例：
   * color: red; (顶层不能直接写声明)
   */
  'no-invalid-position-declaration': true,
};
