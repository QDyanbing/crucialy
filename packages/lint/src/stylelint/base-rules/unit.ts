/**
 * Unit 相关规则
 *
 * 包含单位相关规则（3条）
 * - 禁止未知单位
 * - 单位白名单
 * - 单位黑名单
 */

import type { Config } from 'stylelint';

export const unitRules: Config['rules'] = {
  /**
   * unit-no-unknown
   * 禁止使用未知的单位
   *
   * 说明：检查 CSS 单位是否为标准的有效单位
   * - 长度单位：px, em, rem, %, vw, vh, vmin, vmax 等
   * - 时间单位：s, ms
   * - 角度单位：deg, rad, grad, turn
   * - 其他：fr（grid）, dpi, dpcm, dppx（分辨率）等
   *
   * 无效的单位会导致样式失效，必须禁止
   *
   * ✅ 正确示例：width: 100px;
   * ✅ 正确示例：animation-duration: 200ms;
   * ✅ 正确示例：transform: rotate(90deg);
   * ❌ 错误示例：width: 100unknown;
   * ❌ 错误示例：margin: 10pixels;
   */
  'unit-no-unknown': true,

  /**
   * unit-allowed-list
   * 指定允许使用的单位白名单
   *
   * 说明：限制项目中只能使用特定的单位
   * - null：允许所有有效单位
   * - 数组：只允许列表中的单位
   *
   * Base 配置不限制，如需限制可在项目中自定义
   *
   * 配置示例：['px', 'em', 'rem', '%']
   * ✅ 正确示例（配置后）：width: 100px;
   * ✅ 正确示例（配置后）：font-size: 1.5rem;
   * ❌ 错误示例（配置后）：width: 100vw; (不在白名单中)
   */
  'unit-allowed-list': null,

  /**
   * unit-disallowed-list
   * 指定禁止使用的单位黑名单
   *
   * 说明：禁止项目中使用特定的单位
   * - null：不禁止任何单位
   * - 数组：禁止列表中的单位
   *
   * Base 配置不限制，常见禁用场景：
   * - 禁用 pt（印刷单位，在 Web 开发中不推荐）
   * - 禁用 cm/mm（物理单位，在屏幕上不精确）
   *
   * 配置示例：['pt', 'cm', 'mm']
   * ✅ 正确示例（null 时）：font-size: 12pt;
   * ❌ 错误示例（配置后）：font-size: 12pt; (在黑名单中)
   */
  'unit-disallowed-list': null,
};

