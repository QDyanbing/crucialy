/**
 * Number-unit rules
 */

export const numberunitRules = {
  /**
   * number-max-precision
   * 数字最大小数位数
   * ✅ width: 1.2345%;
   * ❌ width: 1.23456%; (超过4位)
   */
  'number-max-precision': 4,
  
  /**
   * unit-no-unknown
   * 禁止未知单位
   * ✅ width: 100px;
   * ❌ width: 100unknown;
   */
  'unit-no-unknown': true,
  
  /**
   * unit-allowed-list
   * 单位白名单
   * null: 允许所有单位
   * 例: ['px', 'em', '%'] - 只允许这些单位
   */
  'unit-allowed-list': null,
  
  /**
   * unit-disallowed-list
   * 单位黑名单
   * null: 不禁止任何单位
   * 例: ['pt'] - 禁止 pt 单位
   */
  'unit-disallowed-list': null,
  
  
  /**
   * string-no-newline
   * 字符串中禁止换行符
   * ✅ content: 'hello';
   * ❌ content: 'hello
   *     world';
   */
  'string-no-newline': true,
  
  
  /**
   * time-min-milliseconds
   * 时间最小毫秒数
   * null: 不限制
   * 例: 100 - 禁止小于 100ms 的时间值
   */
  'time-min-milliseconds': null,
  
};
