/**
 * Value 相关规则
 *
 * 包含值格式相关规则（2条）
 * - 值关键字大小写
 * - vendor prefix
 */

import type { Config } from 'stylelint';

const valueRules: Config['rules'] = {
  /**
   * @name value-keyword-case
   * @description 要求值关键字使用小写；CSS 值关键字应该使用小写字母，符合 CSS 编码规范
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @secondary camelCaseSvgKeywords: true - SVG 关键字保持驼峰命名（如 viewBox, preserveAspectRatio）
   * @example ✅ 正确示例：
   *  - a { display: block; }
   *  - a { text-transform: uppercase; }
   *  - svg { preserveAspectRatio: xMidYMid; }
   * @example ❌ 错误示例：
   *  - a { display: BLOCK; }                  (应使用小写 block)
   *  - a { text-transform: UPPERCASE; }       (应使用小写 uppercase)
   */
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

  /**
   * @name value-no-vendor-prefix
   * @description 禁止值使用浏览器厂商前缀；应该使用 Autoprefixer 等工具自动添加，工具会根据 browserslist 配置自动处理兼容性
   * @value true - 启用，禁止厂商前缀
   * @value false - 禁用此规则
   * @secondary ignoreValues: ['box', 'inline-box'] - 某些值仍需要手动添加前缀，允许忽略
   * @example ✅ 正确示例：
   *  - a { display: flex; }
   *  - a { display: -webkit-box; }            (ignoreValues 中允许)
   * @example ❌ 错误示例：
   *  - a { background: -webkit-linear-gradient(...); }  (应使用工具自动添加)
   *  - a { appearance: -moz-none; }           (应使用工具自动添加)
   */
  'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
};

export default valueRules;
