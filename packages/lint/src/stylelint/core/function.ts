/**
 * Function 相关规则
 * @module @crucialy/lint/stylelint/core/function
 *
 * 包含 CSS 函数相关规则（11条）
 * - calc() 运算符空格：提高可读性
 * - 线性渐变方向：确保方向值正确
 * - 函数名大小写：统一函数命名
 * - URL 引号和 scheme：确保 URL 格式正确
 * - 函数白名单/黑名单：控制允许使用的函数
 */

import type { Config } from 'stylelint';

const functionRules: Config['rules'] = {
  /**
   * @name function-calc-no-unspaced-operator
   * @description 要求 calc() 函数运算符周围有空格；提高可读性，避免解析歧义，是 CSS 规范要求
   * @value true - 启用，要求运算符周围有空格
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: calc(100% - 20px);
   *  - margin: calc(10px + 5px);
   *  - height: calc(100vh - 50px);
   * @example ❌ 错误示例：
   *  - width: calc(100%-20px);                (运算符周围缺少空格)
   *  - margin: calc(10px+5px);                (运算符周围缺少空格)
   */
  'function-calc-no-unspaced-operator': true,

  /**
   * @name function-linear-gradient-no-nonstandard-direction
   * @description 禁止线性渐变使用非标准方向语法；旧语法（left, top）已废弃，应使用标准语法（to right, to bottom）
   * @value true - 启用，禁止非标准方向语法
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - background: linear-gradient(to right, #fff, #000);
   *  - background: linear-gradient(to bottom, red, blue);
   *  - background: linear-gradient(45deg, #fff, #000);
   * @example ❌ 错误示例：
   *  - background: linear-gradient(left, #fff, #000);     (应使用 to right)
   *  - background: linear-gradient(top, red, blue);       (应使用 to bottom)
   */
  'function-linear-gradient-no-nonstandard-direction': true,

  /**
   * @name function-name-case
   * @description 要求函数名使用小写；保持代码风格一致，符合 CSS 编码规范
   * @value 'lower' - 小写
   * @value 'upper' - 大写
   * @example ✅ 正确示例：
   *  - width: calc(100% - 20px);
   *  - color: rgba(0, 0, 0, 0.5);
   * @example ❌ 错误示例：
   *  - width: CALC(100% - 20px);              (应使用小写 calc)
   *  - color: RGBA(0, 0, 0, 0.5);             (应使用小写 rgba)
   */
  'function-name-case': 'lower',

  /**
   * @name function-no-unknown
   * @description 禁止使用未知的函数；检查 CSS 函数是否为标准函数，拼写错误或不存在的函数会导致样式失效
   * @value true - 启用，禁止未知函数
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: calc(100% - 20px);
   *  - color: rgba(255, 0, 0, 0.5);
   *  - color: var(--primary-color);
   * @example ❌ 错误示例：
   *  - width: unknown-function(100px);        (不存在的函数)
   *  - color: rgbaa(255, 0, 0, 0.5);          (拼写错误，应为 rgba)
   */
  'function-no-unknown': true,

  /**
   * @name function-url-quotes
   * @description 要求 url() 函数中的 URL 使用引号；提高可读性，避免特殊字符问题
   * @value 'always' - 必须使用引号
   * @value 'never' - 禁止使用引号
   * @example ✅ 正确示例：
   *  - background: url('image.png');
   *  - background: url('https://example.com/bg.jpg');
   * @example ❌ 错误示例：
   *  - background: url(image.png);            (缺少引号)
   *  - background: url(https://example.com/bg.jpg);  (缺少引号)
   */
  'function-url-quotes': 'always',

  /**
   * @name function-url-no-scheme-relative
   * @description 禁止使用 scheme-relative（协议相对）URL；Base 配置不限制，配置为 true 可强制使用完整 URL 提高安全性
   * @value null - 不限制
   * @value true - 禁止 scheme-relative URL
   * @example ✅ 正确示例（null 时）：
   *  - background: url('//example.com/image.png');
   *  - background: url('https://example.com/image.png');
   * @example ❌ 错误示例（假设配置为 true）：
   *  - background: url('//example.com/image.png');    (应使用完整 URL)
   */
  'function-url-no-scheme-relative': null,

  /**
   * @name function-url-scheme-allowed-list
   * @description 指定 URL scheme 白名单；限制 url() 中只能使用特定的协议，提高安全性
   * @value null - 不限制，允许所有协议
   * @value array - 字符串数组，只允许列表中的协议（如：['https', 'data']）
   * @example ✅ 正确示例（null 时）：
   *  - background: url('http://example.com/bg.jpg');
   * @example ❌ 错误示例（假设配置为 ['https', 'data']）：
   *  - background: url('http://example.com/bg.jpg');  (http 不在白名单中)
   */
  'function-url-scheme-allowed-list': null,

  /**
   * @name function-url-scheme-disallowed-list
   * @description 指定 URL scheme 黑名单；禁止 url() 中使用特定的协议
   * @value null - 不限制，不禁止任何协议
   * @value array - 字符串数组，禁止列表中的协议（如：['http']）
   * @example ✅ 正确示例（null 时）：
   *  - background: url('http://example.com/bg.jpg');
   * @example ❌ 错误示例（假设配置为 ['http']）：
   *  - background: url('http://example.com/bg.jpg');  (http 在黑名单中)
   */
  'function-url-scheme-disallowed-list': null,

  /**
   * @name function-allowed-list
   * @description 指定允许使用的函数白名单；限制项目中只能使用特定的函数
   * @value null - 不限制，允许所有函数
   * @value array - 字符串数组，只允许列表中的函数（如：['calc', 'var', 'rgb', 'rgba']）
   * @example ✅ 正确示例（null 时）：
   *  - width: min(100%, 500px);
   * @example ❌ 错误示例（假设配置为 ['calc', 'var']）：
   *  - width: min(100%, 500px);               (min 不在白名单中)
   */
  'function-allowed-list': null,

  /**
   * @name function-disallowed-list
   * @description 指定禁止使用的函数黑名单；Strict 模式禁止使用颜色函数（rgb, rgba, hsl, hsla），只允许使用 hex 表示颜色
   * @value array - 字符串数组，禁止列表中的函数（Strict 配置，覆盖 Base 的 null）
   * @example ✅ 正确示例：
   *  - color: #ff0000;
   *  - color: #000;
   *  - background: var(--primary-color);
   * @example ❌ 错误示例：
   *  - color: rgb(255, 0, 0);                 (rgb 在黑名单中，应使用 #ff0000)
   *  - color: rgba(0, 0, 0, 0.5);            (rgba 在黑名单中，应使用 hex + opacity)
   *  - color: hsl(0, 100%, 50%);             (hsl 在黑名单中)
   */
  'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
};

export default functionRules;
