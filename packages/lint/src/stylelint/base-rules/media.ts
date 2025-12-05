/**
 * Media 相关规则
 *
 * 包含媒体查询相关规则（10条）
 * - media feature 验证
 * - media feature 白名单/黑名单
 * - media feature range 表示法
 * - media type 验证
 */

import type { Config } from 'stylelint';

export const mediaRules: Config['rules'] = {
  /**
   * media-feature-name-no-unknown
   * 禁止使用未知的 media feature 名称
   *
   * 说明：检查 media query 中的 feature 是否为标准 feature
   * - 标准 feature：width, height, orientation, color 等
   * - 拼写错误或不存在的 feature 会导致查询失效
   *
   * ✅ 正确示例：
   * @media (width > 600px) { }
   *
   * ✅ 正确示例：
   * @media (orientation: landscape) { }
   *
   * ❌ 错误示例：
   * @media (unknown-feature: value) { }
   *
   * ❌ 错误示例：
   * @media (widht > 600px) { } (拼写错误)
   */
  'media-feature-name-no-unknown': true,

  /**
   * media-feature-name-no-vendor-prefix
   * 禁止 media feature 使用浏览器厂商前缀
   *
   * 说明：现代开发不应手动添加 vendor prefix
   * - -webkit-, -moz-, -ms-, -o- 等前缀
   * - 应该使用 Autoprefixer 等工具自动添加
   * - 标准的 media feature 应该直接使用
   *
   * ✅ 正确示例：
   * @media (min-width: 600px) { }
   *
   * ✅ 正确示例：
   * @media (min-resolution: 2dppx) { }
   *
   * ❌ 错误示例：
   * @media (-webkit-min-device-pixel-ratio: 2) { }
   *
   * ❌ 错误示例：
   * @media (-moz-min-device-pixel-ratio: 2) { }
   */
  'media-feature-name-no-vendor-prefix': true,

  /**
   * media-feature-name-allowed-list
   * 指定允许使用的 media feature 白名单
   *
   * 说明：限制项目中只能使用特定的 media feature
   * - null：允许所有 feature
   * - 数组：只允许列表中的 feature
   *
   * Base 配置不限制，常见使用场景：
   * - 限制只使用宽度相关查询
   * - 统一团队使用的 media feature
   *
   * 配置示例：['width', 'min-width', 'max-width']
   * ✅ 正确示例（null 时）：
   * @media (orientation: portrait) { }
   */
  'media-feature-name-allowed-list': null,

  /**
   * media-feature-name-disallowed-list
   * 指定禁止使用的 media feature 黑名单
   *
   * 说明：禁止项目中使用特定的 media feature
   * - null：不禁止任何 feature
   * - 数组：禁止列表中的 feature
   *
   * Base 配置不限制，常见使用场景：
   * - 禁用已弃用的 feature
   * - 禁用特定的 feature（如 max-width，推荐移动优先）
   *
   * 配置示例：['max-width', 'max-height']
   * ✅ 正确示例（null 时）：
   * @media (max-width: 768px) { }
   */
  'media-feature-name-disallowed-list': null,

  /**
   * media-feature-name-unit-allowed-list
   * 指定 media feature 允许使用的单位白名单
   *
   * 说明：限制特定 media feature 只能使用特定单位
   * - null：允许所有单位
   * - 对象：为不同 feature 指定允许的单位
   *
   * Base 配置不限制，常见使用场景：
   * - width 只允许 px, em
   * - 统一单位使用
   *
   * 配置示例：{ 'width': ['px', 'em'] }
   * ✅ 正确示例（null 时）：
   * @media (width: 768px) { }
   */
  'media-feature-name-unit-allowed-list': null,

  /**
   * media-feature-name-value-allowed-list
   * 指定 media feature 允许使用的值白名单
   *
   * 说明：限制特定 media feature 只能使用特定值
   * - null：允许所有值
   * - 对象：为不同 feature 指定允许的值
   *
   * Base 配置不限制，常见使用场景：
   * - orientation 只允许 portrait, landscape
   * - 限制具体的断点值
   *
   * 配置示例：{ 'orientation': ['portrait', 'landscape'] }
   * ✅ 正确示例（null 时）：
   * @media (orientation: portrait) { }
   */
  'media-feature-name-value-allowed-list': null,

  /**
   * media-feature-name-value-no-unknown
   * 禁止 media feature 使用未知的值
   *
   * 说明：检查 media feature 的值是否为该 feature 的有效值
   * - 每个 feature 都有特定的有效值范围
   * - 无效值会导致媒体查询失效
   *
   * ✅ 正确示例：
   * @media (orientation: landscape) { }
   *
   * ✅ 正确示例：
   * @media (orientation: portrait) { }
   *
   * ❌ 错误示例：
   * @media (orientation: unknown) { }
   *
   * ❌ 错误示例：
   * @media (orientation: vertical) { } (应该是 portrait)
   */
  'media-feature-name-value-no-unknown': true,

  /**
   * media-feature-range-notation
   * 指定 media feature range 的表示法
   *
   * 说明：范围查询有新旧两种语法：
   * - context：根据上下文自动选择
   *   - 支持现代语法：(width >= 600px)
   *   - 也支持传统语法：(min-width: 600px)
   * - prefix：强制使用传统语法 (min-width: 600px)
   *
   * Base 配置使用 context（灵活）：
   * - 允许使用更简洁的现代语法
   * - 也兼容传统语法
   * - 提高可读性
   *
   * ✅ 正确示例（context）：
   * @media (width >= 600px) { }
   *
   * ✅ 正确示例（context）：
   * @media (min-width: 600px) { }
   *
   * ✅ 正确示例（context）：
   * @media (400px <= width <= 800px) { }
   */
  'media-feature-range-notation': 'context',

  /**
   * media-query-no-invalid
   * 禁止无效的 media query
   *
   * 说明：检查 media query 语法是否正确
   * - 括号匹配
   * - 运算符正确
   * - 语法结构有效
   *
   * 无效的 media query 会导致样式失效
   *
   * ✅ 正确示例：
   * @media (width > 600px) { }
   *
   * ✅ 正确示例：
   * @media (width > 600px) and (height > 400px) { }
   *
   * ❌ 错误示例：
   * @media (width >>600px) { } (运算符错误)
   *
   * ❌ 错误示例：
   * @media (width > 600px { } (括号不匹配)
   */
  'media-query-no-invalid': true,

  /**
   * media-type-no-deprecated
   * 禁止使用已弃用的 media type
   *
   * 说明：某些 media type 已被 CSS 规范废弃
   * - 已弃用：aural, braille, embossed, handheld, projection, tty, tv
   * - 应该使用：screen, print, all, speech
   *
   * 已弃用的 media type 在现代浏览器中可能不支持
   *
   * ✅ 正确示例：
   * @media screen { }
   *
   * ✅ 正确示例：
   * @media print { }
   *
   * ❌ 错误示例：
   * @media aural { } (已弃用)
   *
   * ❌ 错误示例：
   * @media handheld { } (已弃用，应使用 screen)
   */
  'media-type-no-deprecated': true,
};
