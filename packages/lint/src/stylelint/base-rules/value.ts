/**
 * Value 相关规则
 *
 * 包含值格式相关规则（2条）
 * - 值关键字大小写
 * - vendor prefix
 */

import type { Config } from 'stylelint';

export const valueRules: Config['rules'] = {
  /**
   * value-keyword-case
   * 要求值关键字使用小写
   *
   * 说明：CSS 值关键字应该使用小写字母
   * - lower：小写
   * - upper：大写
   *
   * Base 配置使用 lower（小写）：
   * - 符合 CSS 编码规范
   * - 保持代码风格一致
   *
   * 例外情况：
   * - camelCaseSvgKeywords：SVG 关键字保持驼峰命名
   *   （如 viewBox, preserveAspectRatio）
   *
   * ✅ 正确示例：
   * a { display: block; }
   *
   * ✅ 正确示例：
   * a { text-transform: uppercase; }
   *
   * ✅ 正确示例（SVG 驼峰命名例外）：
   * svg { preserveAspectRatio: xMidYMid; }
   *
   * ❌ 错误示例：
   * a { display: BLOCK; }
   *
   * ❌ 错误示例：
   * a { text-transform: UPPERCASE; }
   */
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

  /**
   * value-no-vendor-prefix
   * 禁止值使用浏览器厂商前缀
   *
   * 说明：现代开发不应手动添加 vendor prefix
   * - -webkit-, -moz-, -ms-, -o- 等前缀
   * - 应该使用 Autoprefixer 等工具自动添加
   * - 工具会根据 browserslist 配置自动处理兼容性
   *
   * 例外情况：
   * - 某些值仍需要手动添加前缀（box, inline-box）
   *
   * ✅ 正确示例：
   * a { display: flex; }
   *
   * ✅ 正确示例（例外）：
   * a { display: -webkit-box; }
   *
   * ❌ 错误示例：
   * a { background: -webkit-linear-gradient(...); }
   *
   * ❌ 错误示例：
   * a { appearance: -moz-none; }
   */
  'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
};
