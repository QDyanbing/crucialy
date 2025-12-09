/**
 * Less Color 相关规则
 *
 * 包含颜色相关规则（3条）
 * - hex 颜色大小写规范
 * - hex 颜色使用限制
 * - hex 颜色有效性验证
 */

import type { Config } from 'stylelint';

const lessColorRules: Config['rules'] = {
  /**
   * @name less/color-hex-case
   * @description 指定 hex 颜色的大小写格式
   * @value 'lower' - 小写（Base 配置）
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - color: #fff;
   *  - color: #ff0000;
   * @example ❌ 错误示例：
   *  - color: #FFF;                              (应为小写)
   *  - color: #FF0000;                           (应为小写)
   */
  'less/color-hex-case': 'lower',

  /**
   * @name less/color-no-hex
   * @description 禁止使用 hex 颜色
   * @value null - 不限制，允许使用 hex（Base 配置）
   * @value true - 禁止使用 hex，要求使用颜色函数（rgb/hsl）
   * @example ✅ 正确示例（null 时）：
   *  - color: #fff;
   *  - color: rgb(255, 255, 255);
   * @example ❌ 错误示例（假设配置为 true）：
   *  - color: #fff;                              (应使用 rgb(255, 255, 255))
   */
  'less/color-no-hex': null,

  /**
   * @name less/color-no-invalid-hex
   * @description 禁止无效的 hex 颜色；检查 hex 颜色格式是否正确，无效的 hex 颜色会导致样式失效
   * @value true - 启用，禁止无效 hex（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: #fff;
   *  - color: #f5f5f5;
   *  - color: #fff8;
   * @example ❌ 错误示例：
   *  - color: #fffffffff;                        (位数错误，hex 只能是 3/4/6/8 位)
   *  - color: #gggggg;                           (包含非法字符 g)
   */
  'less/color-no-invalid-hex': true,
};

export default lessColorRules;
