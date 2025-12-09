/**
 * SCSS Property 相关规则
 *
 * 包含 SCSS 属性验证相关规则（1条）
 * - 禁止未知的 SCSS 属性
 */

import type { Config } from 'stylelint';

const scssPropertyRules: Config['rules'] = {
  /**
   * @name scss/property-no-unknown
   * @description 禁止未知的 SCSS 属性
   * @value true - 启用，禁止未知属性（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: red;
   *  - width: 100px;
   * @example ❌ 错误示例：
   *  - unknown-property: value;                  (不存在的属性)
   */
  'scss/property-no-unknown': true,
};

export default scssPropertyRules;
