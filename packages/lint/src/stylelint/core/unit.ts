/**
 * Unit 相关规则
 *
 * 包含单位相关规则（3条）
 * - 禁止未知单位
 * - 单位白名单
 * - 单位黑名单
 */

import type { Config } from 'stylelint';

const unitRules: Config['rules'] = {
  /**
   * @name unit-no-unknown
   * @description 禁止使用未知的单位；检查 CSS 单位是否为标准的有效单位（长度、时间、角度等），无效的单位会导致样式失效
   * @value true - 启用，禁止未知单位
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: 100px;
   *  - animation-duration: 200ms;
   *  - transform: rotate(90deg);
   * @example ❌ 错误示例：
   *  - width: 100unknown;                     (不存在的单位)
   *  - margin: 10pixels;                      (应为 pixels -> px)
   */
  'unit-no-unknown': true,

  /**
   * @name unit-allowed-list
   * @description 指定允许使用的单位白名单；限制项目中只能使用特定的单位，Base 配置不限制
   * @value null - 不限制，允许所有有效单位
   * @value array - 字符串数组，只允许列表中的单位（如：['px', 'em', 'rem', '%']）
   * @example ✅ 正确示例（假设配置为 ['px', 'rem']）：
   *  - width: 100px;
   *  - font-size: 1.5rem;
   * @example ❌ 错误示例（假设配置为 ['px', 'em', 'rem', '%']）：
   *  - width: 100vw;                          (vw 不在白名单中)
   */
  'unit-allowed-list': null,

  /**
   * @name unit-disallowed-list
   * @description 指定禁止使用的单位；Strict 模式禁用印刷单位，这些单位在 Web 开发中基本不会用到
   * @value array - 字符串数组，禁止的单位列表（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - width: 100px;
   *  - font-size: 16px;
   *  - margin: 1em;
   * @example ❌ 错误示例：
   *  - width: 10cm;                           (cm 在禁用列表中)
   *  - font-size: 12pt;                       (pt 在禁用列表中)
   *  - margin: 1in;                           (in 在禁用列表中)
   */
  'unit-disallowed-list': ['cm', 'mm', 'in', 'pt', 'pc'],
};

export default unitRules;
