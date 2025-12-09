/**
 * SCSS Function 相关规则
 *
 * 包含函数相关规则（7条）
 * - 函数使用规范（未知函数、黑名单）
 * - 计算函数和颜色函数使用规范
 * - 字符串函数（quote/unquote）使用规范
 */

import type { Config } from 'stylelint';

const scssFunctionRules: Config['rules'] = {
  /**
   * @name scss/function-calculation-no-interpolation
   * @description 禁止计算函数中使用插值
   * @value true - 启用，禁止插值（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: calc(100% - 20px);
   * @example ❌ 错误示例：
   *  - width: calc(100% - #{$var});              (不应在计算中使用插值)
   */
  'scss/function-calculation-no-interpolation': true,

  /**
   * @name scss/function-color-channel
   * @description 鼓励使用 color.channel 函数替代已弃用的颜色函数
   * @value null - 不限制（Base 配置）
   * @value true - 要求使用 color.channel
   * @example ✅ 正确示例（null 时）：
   *  - color: red($color);
   *  - color: color.channel($color, red);
   * @example ❌ 错误示例（假设配置为 true）：
   *  - color: red($color);                       (应使用 color.channel)
   */
  'scss/function-color-channel': null,

  /**
   * @name scss/function-color-relative
   * @description 强制使用相对颜色函数
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用相对颜色函数
   * @value 'never' - 不使用相对颜色函数
   * @example ✅ 正确示例（null 时）：
   *  - color: darken($base, 10%);
   *  - color: lighten($base, 10%);
   * @example ❌ 错误示例（假设配置为 never）：
   *  - color: darken($base, 10%);                (不应使用相对颜色函数)
   */
  'scss/function-color-relative': null,

  /**
   * @name scss/function-disallowed-list
   * @description 函数黑名单；禁止使用 CSS 颜色函数，强制使用 16 进制颜色表示法（SCSS 颜色函数允许使用）
   * @value array - 禁止的函数名数组
   * @example ✅ 正确示例：
   *  - color: #ff0000;
   *  - color: #000;
   *  - color: darken($base, 10%);               (SCSS 函数允许)
   *  - color: lighten($base, 10%);              (SCSS 函数允许)
   *  - background: var(--primary-color);
   * @example ❌ 错误示例：
   *  - color: rgb(255, 0, 0);                   (rgb 在黑名单中，应使用 #ff0000)
   *  - color: rgba(0, 0, 0, 0.5);               (rgba 在黑名单中，应使用 hex + opacity)
   *  - color: hsl(0, 100%, 50%);                (hsl 在黑名单中)
   *  - color: hsla(0, 100%, 50%, 0.5);         (hsla 在黑名单中)
   */
  'scss/function-disallowed-list': [
    // CSS 颜色函数（禁止）
    'rgb',
    'rgba',
    'hsl',
    'hsla',
  ],

  /**
   * @name scss/function-no-unknown
   * @description 禁止未知的 SCSS 函数
   * @value true - 启用，禁止未知函数（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - width: percentage(0.5);
   *  - color: darken($base, 10%);
   * @example ❌ 错误示例：
   *  - width: unknown-function(0.5);             (不存在的函数)
   */
  'scss/function-no-unknown': true,

  /**
   * @name scss/function-quote-no-quoted-strings-inside
   * @description 禁止 quote() 函数内使用引号字符串
   * @value true - 启用，禁止引号字符串（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - content: quote(hello);
   * @example ❌ 错误示例：
   *  - content: quote('hello');                  (不应使用引号字符串)
   */
  'scss/function-quote-no-quoted-strings-inside': true,

  /**
   * @name scss/function-unquote-no-unquoted-strings-inside
   * @description 禁止 unquote() 函数内使用无引号字符串
   * @value true - 启用，禁止无引号字符串（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - content: unquote('hello');
   * @example ❌ 错误示例：
   *  - content: unquote(hello);                  (应使用引号字符串)
   */
  'scss/function-unquote-no-unquoted-strings-inside': true,
};

export default scssFunctionRules;
