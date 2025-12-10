/**
 * Stylus Number 相关规则
 *
 * 包含数字相关规则（2条）
 * - 数字前导零
 * - 数字尾随零
 */

import type { Config } from 'stylelint';

const stylusNumberRules: Config['rules'] = {
  /**
   * @name stylus/number-leading-zero
   * @description 指定数字前导零的要求；统一代码风格，要求使用前导零（与 core 规则一致）
   * @value 'always' - 要求使用前导零
   * @value 'never' - 禁止使用前导零
   * @example ✅ 正确示例：
   *  - opacity: 0.5;
   * @example ❌ 错误示例：
   *  - opacity: .5;  (缺少前导零)
   */
  'stylus/number-leading-zero': 'always',

  /**
   * @name stylus/number-no-trailing-zeros
   * @description 禁止数字尾随零
   * @value true - 启用，禁止尾随零
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: 100px;
   * @example ❌ 错误示例：
   *  - width: 100.00px;  (有尾随零)
   */
  'stylus/number-no-trailing-zeros': true,
};

export default stylusNumberRules;
