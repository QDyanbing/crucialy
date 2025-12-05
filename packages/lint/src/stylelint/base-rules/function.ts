/**
 * Function 相关规则
 *
 * 包含 CSS 函数相关规则（11条）
 * - calc() 运算符空格
 * - 线性渐变方向
 * - 函数名大小写
 * - URL 引号和 scheme
 * - 函数白名单/黑名单
 */

import type { Config } from 'stylelint';

export const functionRules: Config['rules'] = {
  /**
   * function-calc-no-unspaced-operator
   * 要求 calc() 函数运算符周围有空格
   *
   * 说明：calc() 中的运算符（+ - * /）周围必须有空格
   * - 提高可读性
   * - 避免解析歧义
   * - 是 CSS 规范的要求（+ 和 - 必须有空格）
   *
   * ✅ 正确示例：
   * width: calc(100% - 20px);
   *
   * ✅ 正确示例：
   * margin: calc(10px + 5px);
   *
   * ✅ 正确示例：
   * height: calc(100vh - 50px);
   *
   * ❌ 错误示例：
   * width: calc(100%-20px);
   *
   * ❌ 错误示例：
   * margin: calc(10px+5px);
   */
  'function-calc-no-unspaced-operator': true,

  /**
   * function-linear-gradient-no-nonstandard-direction
   * 禁止线性渐变使用非标准方向语法
   *
   * 说明：linear-gradient 的方向有新旧两种语法
   * - 标准语法：to right, to bottom, to top left
   * - 旧语法：left, top（已废弃）
   *
   * 旧语法在某些浏览器中可能不支持或表现不一致
   *
   * ✅ 正确示例：
   * background: linear-gradient(to right, #fff, #000);
   *
   * ✅ 正确示例：
   * background: linear-gradient(to bottom, red, blue);
   *
   * ✅ 正确示例（角度）：
   * background: linear-gradient(45deg, #fff, #000);
   *
   * ❌ 错误示例：
   * background: linear-gradient(left, #fff, #000);
   *
   * ❌ 错误示例：
   * background: linear-gradient(top, red, blue);
   */
  'function-linear-gradient-no-nonstandard-direction': true,

  /**
   * function-name-case
   * 要求函数名使用小写
   *
   * 说明：CSS 函数名应该使用小写字母
   * - 保持代码风格一致
   * - 符合 CSS 编码规范
   *
   * ✅ 正确示例：
   * width: calc(100% - 20px);
   *
   * ✅ 正确示例：
   * color: rgba(0, 0, 0, 0.5);
   *
   * ❌ 错误示例：
   * width: CALC(100% - 20px);
   *
   * ❌ 错误示例：
   * color: RGBA(0, 0, 0, 0.5);
   */
  'function-name-case': 'lower',

  /**
   * function-no-unknown
   * 禁止使用未知的函数
   *
   * 说明：检查 CSS 函数是否为标准函数
   * - 标准函数：calc(), var(), rgb(), url() 等
   * - 拼写错误或不存在的函数会导致样式失效
   *
   * ✅ 正确示例：
   * width: calc(100% - 20px);
   *
   * ✅ 正确示例：
   * color: rgba(255, 0, 0, 0.5);
   *
   * ✅ 正确示例：
   * color: var(--primary-color);
   *
   * ❌ 错误示例：
   * width: unknown-function(100px);
   *
   * ❌ 错误示例：
   * color: rgbaa(255, 0, 0, 0.5); (拼写错误)
   */
  'function-no-unknown': true,

  /**
   * function-url-quotes
   * 要求 url() 函数中的 URL 使用引号
   *
   * 说明：url() 中的路径应该使用引号包裹
   * - always：必须使用引号
   * - never：禁止使用引号
   *
   * Base 配置使用 always：
   * - 提高可读性
   * - 避免特殊字符问题
   * - 与其他字符串值保持一致
   *
   * ✅ 正确示例：
   * background: url('image.png');
   *
   * ✅ 正确示例：
   * background: url('https://example.com/bg.jpg');
   *
   * ❌ 错误示例：
   * background: url(image.png);
   *
   * ❌ 错误示例：
   * background: url(https://example.com/bg.jpg);
   */
  'function-url-quotes': 'always',

  /**
   * function-url-no-scheme-relative
   * 禁止使用 scheme-relative（协议相对）URL
   *
   * 说明：scheme-relative URL 以 // 开头
   * - //example.com/image.png（继承当前页面的协议）
   * - 在 HTTPS 页面中加载 HTTP 资源可能有安全问题
   *
   * Base 配置不限制（null），常见使用场景：
   * - 配置为 true：强制使用完整 URL（https://）
   * - 提高安全性和明确性
   *
   * ✅ 正确示例（null 时）：
   * background: url('//example.com/image.png');
   *
   * ✅ 正确示例：
   * background: url('https://example.com/image.png');
   *
   * ❌ 错误示例（如果配置为 true）：
   * background: url('//example.com/image.png');
   */
  'function-url-no-scheme-relative': null,

  /**
   * function-url-scheme-allowed-list
   * 指定 URL scheme 白名单
   *
   * 说明：限制 url() 中只能使用特定的协议
   * - null：允许所有协议
   * - 数组：只允许列表中的协议
   *
   * Base 配置不限制，常见使用场景：
   * - ['https', 'data']：只允许 HTTPS 和 Data URL
   * - 提高安全性，禁止 HTTP
   *
   * 配置示例：['https', 'data']
   * ✅ 正确示例（null 时）：
   * background: url('http://example.com/bg.jpg');
   *
   * ✅ 正确示例（配置后）：
   * background: url('https://example.com/bg.jpg');
   *
   * ❌ 错误示例（配置后）：
   * background: url('http://example.com/bg.jpg');
   */
  'function-url-scheme-allowed-list': null,

  /**
   * function-url-scheme-disallowed-list
   * 指定 URL scheme 黑名单
   *
   * 说明：禁止 url() 中使用特定的协议
   * - null：不禁止任何协议
   * - 数组：禁止列表中的协议
   *
   * Base 配置不限制，常见使用场景：
   * - ['http']：禁止 HTTP，强制使用 HTTPS
   * - ['ftp']：禁止 FTP 协议
   *
   * 配置示例：['http']
   * ✅ 正确示例（null 时）：
   * background: url('http://example.com/bg.jpg');
   *
   * ❌ 错误示例（配置 ['http'] 后）：
   * background: url('http://example.com/bg.jpg');
   */
  'function-url-scheme-disallowed-list': null,

  /**
   * function-allowed-list
   * 指定允许使用的函数白名单
   *
   * 说明：限制项目中只能使用特定的函数
   * - null：允许所有函数
   * - 数组：只允许列表中的函数
   *
   * Base 配置不限制，常见使用场景：
   * - 限制只使用现代 CSS 函数
   * - 禁止使用某些不常用的函数
   *
   * 配置示例：['calc', 'var', 'rgb', 'rgba']
   * ✅ 正确示例（null 时）：
   * width: min(100%, 500px);
   *
   * ❌ 错误示例（配置后）：
   * width: min(100%, 500px); (min 不在白名单中)
   */
  'function-allowed-list': null,

  /**
   * function-disallowed-list
   * 指定禁止使用的函数黑名单
   *
   * 说明：禁止项目中使用特定的函数
   * - null：不禁止任何函数
   * - 数组：禁止列表中的函数
   *
   * Base 配置不限制，Strict 模式可能会：
   * - 禁止颜色函数（只允许 hex）
   * - 禁止过时的函数
   *
   * 配置示例：['rgb', 'rgba', 'hsl', 'hsla']
   * ✅ 正确示例（null 时）：
   * color: rgb(255, 0, 0);
   *
   * ❌ 错误示例（配置后）：
   * color: rgb(255, 0, 0); (rgb 在黑名单中)
   */
  'function-disallowed-list': null,
};
