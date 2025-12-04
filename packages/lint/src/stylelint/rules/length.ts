/**
 * Length rules
 */

export const lengthRules = {
  /**
   * length-zero-no-unit
   * 禁止零值长度带单位
   * ✅ margin: 0;
   * ❌ margin: 0px;
   * ignore: ['custom-properties'] - 自定义属性例外
   */
  'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
  
};
