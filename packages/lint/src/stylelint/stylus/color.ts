/**
 * Stylus Color 相关规则
 *
 * 包含颜色相关规则（1条）
 * - hex 颜色大小写规范
 */

import type { Config } from 'stylelint';

const stylusColorRules: Config['rules'] = {
  /**
   * @name stylus/color-hex-case
   * @description 指定 hex 颜色的大小写格式
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - color: #fff;
   *  - color: #ff0000;
   * @example ❌ 错误示例：
   *  - color: #FFF;                              (应为小写)
   *  - color: #FF0000;                           (应为小写)
   */
  'stylus/color-hex-case': 'lower',
};

export default stylusColorRules;
