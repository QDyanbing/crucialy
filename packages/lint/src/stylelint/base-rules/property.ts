/**
 * Property 相关规则
 *
 * 包含 CSS 属性相关规则（5条）
 * - 禁止未知/已弃用属性
 * - vendor prefix
 * - 属性白名单/黑名单
 */

import type { Config } from 'stylelint';

export const propertyRules: Config['rules'] = {
  /**
   * property-no-unknown
   * 禁止使用未知的 CSS 属性
   *
   * 说明：检查属性名是否为标准的 CSS 属性
   * - 标准属性：display, color, margin 等
   * - 拼写错误或不存在的属性会导致样式失效
   * - 帮助发现代码中的错误
   *
   * ✅ 正确示例：
   * a { display: flex; }
   *
   * ✅ 正确示例：
   * a { transform: rotate(45deg); }
   *
   * ❌ 错误示例：
   * a { unknown-prop: value; }
   *
   * ❌ 错误示例：
   * a { dislay: block; } (拼写错误)
   */
  'property-no-unknown': true,

  /**
   * property-no-deprecated
   * 禁止使用已弃用的 CSS 属性
   *
   * 说明：某些属性已被 CSS 规范废弃
   * - 已弃用的属性在新浏览器中可能不支持
   * - 应该使用标准的替代属性
   * - 提高代码的向前兼容性
   *
   * ✅ 正确示例：
   * a { overflow: hidden; }
   *
   * ✅ 正确示例：
   * a { user-select: none; }
   *
   * ❌ 错误示例：
   * a { overflow-x: -moz-hidden-unscrollable; } (已弃用)
   *
   * ❌ 错误示例：
   * a { clip: rect(0, 0, 0, 0); } (推荐使用 clip-path)
   */
  'property-no-deprecated': true,

  /**
   * property-no-vendor-prefix
   * 禁止属性使用浏览器厂商前缀
   *
   * 说明：现代开发不应手动添加 vendor prefix
   * - -webkit-, -moz-, -ms-, -o- 等前缀
   * - 应该使用 Autoprefixer 等工具自动添加
   * - 工具会根据 browserslist 配置自动处理兼容性
   *
   * 手动添加前缀的问题：
   * - 代码冗余
   * - 难以维护
   * - 可能遗漏某些浏览器
   *
   * ✅ 正确示例：
   * a { transform: scale(1); }
   *
   * ✅ 正确示例：
   * a { user-select: none; }
   *
   * ❌ 错误示例：
   * a { -webkit-transform: scale(1); }
   *
   * ❌ 错误示例：
   * a { -moz-user-select: none; }
   */
  'property-no-vendor-prefix': true,

  /**
   * property-allowed-list
   * 指定允许使用的属性白名单
   *
   * 说明：限制项目中只能使用特定的属性
   * - null：允许所有属性
   * - 数组：只允许列表中的属性
   *
   * Base 配置不限制，常见使用场景：
   * - 限制只使用特定的样式属性
   * - 教学项目中限制学生使用的属性
   * - 特定场景下的样式规范
   *
   * 配置示例：['display', 'color', 'background']
   * ✅ 正确示例（null 时）：
   * a { margin: 10px; }
   *
   * ❌ 错误示例（配置后）：
   * a { margin: 10px; } (margin 不在白名单中)
   */
  'property-allowed-list': null,

  /**
   * property-disallowed-list
   * 指定禁止使用的属性黑名单
   *
   * 说明：禁止项目中使用特定的属性
   * - null：不禁止任何属性
   * - 数组：禁止列表中的属性
   *
   * Base 配置不限制，常见使用场景：
   * - 禁止 float（推荐使用 Flexbox/Grid）
   * - 禁止 position: fixed（移动端性能问题）
   * - 禁止某些过时的属性
   *
   * 配置示例：['float']
   * ✅ 正确示例（null 时）：
   * a { float: left; }
   *
   * ❌ 错误示例（配置后）：
   * a { float: left; } (float 在黑名单中)
   */
  'property-disallowed-list': null,
};
