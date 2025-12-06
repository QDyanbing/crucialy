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
   * @name property-no-unknown
   * @description 禁止使用未知的 CSS 属性；检查属性名是否为标准的 CSS 属性，拼写错误或不存在的属性会导致样式失效
   * @value true - 启用，禁止未知属性
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { display: flex; }
   *  - a { transform: rotate(45deg); }
   * @example ❌ 错误示例：
   *  - a { unknown-prop: value; }            (不存在的属性)
   *  - a { dislay: block; }                  (拼写错误，应为 display)
   */
  'property-no-unknown': [true],

  /**
   * @name property-no-deprecated
   * @description 禁止使用已弃用的 CSS 属性；某些属性已被 CSS 规范废弃，在新浏览器中可能不支持，应该使用标准的替代属性
   * @value true - 启用，禁止已弃用的属性
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { overflow: hidden; }
   *  - a { user-select: none; }
   * @example ❌ 错误示例：
   *  - a { overflow-x: -moz-hidden-unscrollable; }  (已弃用)
   *  - a { clip: rect(0, 0, 0, 0); }                (已弃用，推荐使用 clip-path)
   */
  'property-no-deprecated': [true],

  /**
   * @name property-no-vendor-prefix
   * @description 禁止属性使用浏览器厂商前缀；应该使用 Autoprefixer 等工具自动添加，工具会根据 browserslist 配置自动处理兼容性
   * @value true - 启用，禁止厂商前缀
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { transform: scale(1); }
   *  - a { user-select: none; }
   * @example ❌ 错误示例：
   *  - a { -webkit-transform: scale(1); }    (应使用工具自动添加)
   *  - a { -moz-user-select: none; }         (应使用工具自动添加)
   */
  'property-no-vendor-prefix': [true],

  /**
   * @name property-allowed-list
   * @description 指定允许使用的属性白名单；限制项目中只能使用特定的属性
   * @value null - 不限制，允许所有属性
   * @value array - 字符串数组，只允许列表中的属性（如：['display', 'color', 'background']）
   * @example ✅ 正确示例（null 时）：
   *  - a { margin: 10px; }
   * @example ❌ 错误示例（假设配置为 ['display', 'color']）：
   *  - a { margin: 10px; }                   (margin 不在白名单中)
   */
  'property-allowed-list': [null],

  /**
   * @name property-disallowed-list
   * @description 指定禁止使用的属性黑名单；禁止项目中使用特定的属性
   * @value null - 不限制，不禁止任何属性
   * @value array - 字符串数组，禁止列表中的属性（如：['float']）
   * @example ✅ 正确示例（null 时）：
   *  - a { float: left; }
   * @example ❌ 错误示例（假设配置为 ['float']）：
   *  - a { float: left; }                    (float 在黑名单中，推荐使用 Flexbox/Grid)
   */
  'property-disallowed-list': [null],
};
