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

const mediaRules: Config['rules'] = {
  /**
   * @name media-feature-name-no-unknown
   * @description 禁止使用未知的 media feature 名称；检查 media query 中的 feature 是否为标准 feature，拼写错误会导致查询失效
   * @value true - 启用，禁止未知 media feature
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (width > 600px) { }
   *  - \@media (orientation: landscape) { }
   * @example ❌ 错误示例：
   *  - \@media (unknown-feature: value) { }   (不存在的 feature)
   *  - \@media (widht > 600px) { }            (拼写错误，应为 width)
   */
  'media-feature-name-no-unknown': true,

  /**
   * @name media-feature-name-no-vendor-prefix
   * @description 禁止 media feature 使用浏览器厂商前缀；应该使用 Autoprefixer 等工具自动添加，标准的 media feature 应该直接使用
   * @value true - 启用，禁止厂商前缀
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (min-width: 600px) { }
   *  - \@media (min-resolution: 2dppx) { }
   * @example ❌ 错误示例：
   *  - \@media (-webkit-min-device-pixel-ratio: 2) { }  (应使用标准语法)
   *  - \@media (-moz-min-device-pixel-ratio: 2) { }     (应使用标准语法)
   */
  'media-feature-name-no-vendor-prefix': true,

  /**
   * @name media-feature-name-allowed-list
   * @description 指定允许使用的 media feature 白名单；限制项目中只能使用特定的 media feature
   * @value null - 不限制，允许所有 feature
   * @value array - 字符串数组，只允许列表中的 feature（如：['width', 'min-width', 'max-width']）
   * @example ✅ 正确示例（null 时）：
   *  - \@media (orientation: portrait) { }
   * @example ❌ 错误示例（假设配置为 ['width', 'min-width']）：
   *  - \@media (orientation: portrait) { }    (orientation 不在白名单中)
   */
  'media-feature-name-allowed-list': null,

  /**
   * @name media-feature-name-disallowed-list
   * @description 指定禁止使用的 media feature 黑名单；禁止项目中使用特定的 media feature
   * @value null - 不限制，不禁止任何 feature
   * @value array - 字符串数组，禁止列表中的 feature（如：['max-width', 'max-height']）
   * @example ✅ 正确示例（null 时）：
   *  - \@media (max-width: 768px) { }
   * @example ❌ 错误示例（假设配置为 ['max-width']）：
   *  - \@media (max-width: 768px) { }         (max-width 在黑名单中)
   */
  'media-feature-name-disallowed-list': null,

  /**
   * @name media-feature-name-unit-allowed-list
   * @description 指定 media feature 允许使用的单位白名单；限制特定 media feature 只能使用特定单位
   * @value null - 不限制，允许所有单位
   * @value object - 对象，为不同 feature 指定允许的单位（如：{ 'width': ['px', 'em'] }）
   * @example ✅ 正确示例（null 时）：
   *  - \@media (width: 768px) { }
   * @example ❌ 错误示例（假设配置为 { 'width': ['px', 'em'] }）：
   *  - \@media (width: 48rem) { }             (rem 不在白名单中)
   */
  'media-feature-name-unit-allowed-list': null,

  /**
   * @name media-feature-name-value-allowed-list
   * @description 指定 media feature 允许使用的值白名单；限制特定 media feature 只能使用特定值
   * @value null - 不限制，允许所有值
   * @value object - 对象，为不同 feature 指定允许的值（如：{ 'orientation': ['portrait', 'landscape'] }）
   * @example ✅ 正确示例（null 时）：
   *  - \@media (orientation: portrait) { }
   * @example ❌ 错误示例（假设配置为 { 'orientation': ['portrait'] }）：
   *  - \@media (orientation: landscape) { }   (landscape 不在白名单中)
   */
  'media-feature-name-value-allowed-list': null,

  /**
   * @name media-feature-name-value-no-unknown
   * @description 禁止 media feature 使用未知的值；检查 media feature 的值是否为该 feature 的有效值，无效值会导致媒体查询失效
   * @value true - 启用，禁止未知值
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (orientation: landscape) { }
   *  - \@media (orientation: portrait) { }
   * @example ❌ 错误示例：
   *  - \@media (orientation: unknown) { }     (不存在的值)
   *  - \@media (orientation: vertical) { }    (应该是 portrait)
   */
  'media-feature-name-value-no-unknown': true,

  /**
   * @name media-feature-range-notation
   * @description 指定 media feature range 的表示法；Strict 模式统一使用现代范围上下文语法
   * @value 'context' - 使用范围上下文语法（Strict 配置，覆盖 Base 的 null）
   * @value 'prefix' - 使用前缀语法（min-/max-）
   * @example ✅ 正确示例：
   *  - @media (width >= 768px) { }
   *  - @media (width <= 1024px) { }
   *  - @media (width > 600px) and (width < 1200px) { }
   * @example ❌ 错误示例：
   *  - @media (min-width: 768px) { }         (应使用 width >= 768px)
   *  - @media (max-width: 1024px) { }        (应使用 width <= 1024px)
   */
  'media-feature-range-notation': 'context',

  /**
   * @name media-query-no-invalid
   * @description 禁止无效的 media query；检查 media query 语法是否正确，无效的查询会导致样式失效
   * @value true - 启用，禁止无效 media query
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (width > 600px) { }
   *  - \@media (width > 600px) and (height > 400px) { }
   * @example ❌ 错误示例：
   *  - \@media (width >>600px) { }            (运算符错误)
   *  - \@media (width > 600px { }             (括号不匹配)
   */
  'media-query-no-invalid': true,

  /**
   * @name media-type-no-deprecated
   * @description 禁止使用已弃用的 media type；某些 media type（aural, braille, handheld 等）已被 CSS 规范废弃，在现代浏览器中可能不支持
   * @value true - 启用，禁止已弃用的 media type
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media screen { }
   *  - \@media print { }
   * @example ❌ 错误示例：
   *  - \@media aural { }                      (已弃用)
   *  - \@media handheld { }                   (已弃用，应使用 screen)
   */
  'media-type-no-deprecated': true,
};

export default mediaRules;
