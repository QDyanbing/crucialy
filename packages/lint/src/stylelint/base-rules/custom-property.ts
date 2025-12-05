/**
 * Custom Property 相关规则
 *
 * 包含 CSS 自定义属性（CSS 变量）相关规则（3条）
 * - 命名模式
 * - 空行要求
 * - 必须用 var() 包裹
 */

import type { Config } from 'stylelint';

export const customPropertyRules: Config['rules'] = {
  /**
   * custom-property-pattern
   * 指定自定义属性（CSS 变量）的命名模式
   *
   * 说明：规范 CSS 自定义属性的命名风格
   * - null：不限制命名
   * - 正则表达式：自定义属性名必须匹配该模式
   *
   * Base 配置不限制，常见使用场景：
   * - kebab-case：--my-color, --font-size-base
   * - 带前缀：--theme-primary, --layout-spacing
   *
   * 配置示例：'^[a-z]+(-[a-z]+)*$' (强制 kebab-case)
   * ✅ 正确示例（null 时）：--myColor: red;
   * ✅ 正确示例（null 时）：--my-color: red;
   * ✅ 正确示例（kebab-case 配置后）：--my-custom-color: red;
   * ❌ 错误示例（kebab-case 配置后）：--myColor: red;
   */
  'custom-property-pattern': null,

  /**
   * custom-property-empty-line-before
   * 要求或禁止自定义属性前有空行
   *
   * 说明：控制自定义属性前的空行，提高可读性
   * - null：不限制
   * - always：总是要求空行
   * - never：禁止空行
   *
   * Base 配置不限制，允许灵活排版
   *
   * ✅ 正确示例（null 时）：
   * :root {
   *   --color: red;
   *   --size: 10px;
   * }
   *
   * ✅ 正确示例（null 时，有空行）：
   * :root {
   *   --color: red;
   *
   *   --size: 10px;
   * }
   */
  'custom-property-empty-line-before': null,

  /**
   * custom-property-no-missing-var-function
   * 禁止直接使用自定义属性，必须用 var() 包裹
   *
   * 说明：CSS 自定义属性的值必须通过 var() 函数访问
   * - --my-color 定义变量
   * - var(--my-color) 使用变量
   * - 直接使用 --my-color 作为值是无效的
   *
   * 这是 CSS 语法错误，必须禁止
   *
   * ✅ 正确示例：
   * :root { --primary: #000; }
   * .button { color: var(--primary); }
   *
   * ✅ 正确示例（带默认值）：
   * .button { color: var(--primary, #000); }
   *
   * ❌ 错误示例：
   * .button { color: --primary; } (缺少 var())
   *
   * ❌ 错误示例：
   * .button { background: --bg-color; } (应使用 var(--bg-color))
   */
  'custom-property-no-missing-var-function': true,
};
