/**
 * Function rules
 */

export const functionRules = {
  /**
   * function-calc-no-unspaced-operator
   * calc() 函数运算符周围必须有空格
   * ✅ calc(100% - 20px)
   * ❌ calc(100%-20px)
   */
  'function-calc-no-unspaced-operator': true,
  
  /**
   * function-linear-gradient-no-nonstandard-direction
   * 禁止线性渐变使用非标准方向语法
   * ✅ linear-gradient(to right, #fff, #000)
   * ❌ linear-gradient(left, #fff, #000)
   */
  'function-linear-gradient-no-nonstandard-direction': true,
  
  /**
   * function-name-case
   * 函数名小写
   * ✅ calc(100% - 20px)
   * ❌ CALC(100% - 20px)
   */
  'function-name-case': 'lower',
  
  /**
   * function-no-unknown
   * 禁止未知函数
   * ✅ calc(), rgba(), var()
   * ❌ unknown-function()
   */
  'function-no-unknown': true,
  
  /**
   * function-url-quotes
   * URL 必须使用引号
   * ✅ url('image.png')
   * ❌ url(image.png)
   */
  'function-url-quotes': 'always',
  
  /**
   * function-url-no-scheme-relative
   * 禁止 scheme-relative URL
   * null: 不限制
   * ✅ url('//example.com/image.png') (null 时允许)
   */
  'function-url-no-scheme-relative': null,
  
  /**
   * function-url-scheme-allowed-list
   * URL scheme 白名单
   * null: 不限制
   * 例: ['https', 'data'] - 只允许 https 和 data
   */
  'function-url-scheme-allowed-list': null,
  
  /**
   * function-url-scheme-disallowed-list
   * URL scheme 黑名单
   * null: 不限制
   * 例: ['http'] - 禁止 http
   */
  'function-url-scheme-disallowed-list': null,
  
  /**
   * function-allowed-list
   * 函数白名单
   * null: 允许所有函数
   */
  'function-allowed-list': null,
  
  /**
   * function-disallowed-list
   * 函数黑名单
   * null: 不禁止任何函数
   */
  'function-disallowed-list': null,
  
};
