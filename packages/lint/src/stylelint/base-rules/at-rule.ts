/**
 * At-rule 相关规则
 *
 * 包含 @规则相关规则（10条）
 * - @规则验证（未知、已弃用）
 * - vendor prefix
 * - 空行要求
 * - @规则 descriptor 验证
 * - 白名单/黑名单
 */

import type { Config } from 'stylelint';

export const atRuleRules: Config['rules'] = {
  /**
   * @name at-rule-no-unknown
   * @description 禁止使用未知的 @规则；如果使用 Sass/Less 等预处理器，需要在 ignoreAtRules 中配置允许的 @规则
   * @value true - 启用，禁止未知 @规则
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (min-width: 768px) { ... }
   *  - \@import url('styles.css');
   *  - \@keyframes slideIn { ... }
   * @example ❌ 错误示例：
   *  - \@unknown-rule { ... }                    (不存在的 @规则)
   *  - \@mixin button { ... }                    (预处理器专用，需在 ignoreAtRules 中配置)
   */
  'at-rule-no-unknown': [true],

  /**
   * @name at-rule-no-deprecated
   * @description 禁止使用已弃用的 @规则；建议使用 @supports 进行特性检测
   * @value true - 启用，禁止已弃用的 @规则
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media screen and (min-width: 768px) { ... }
   *  - \@supports (display: grid) { ... }
   * @example ❌ 错误示例：
   *  - \@document url(http://example.com/) { ... }     (已从规范中移除)
   */
  'at-rule-no-deprecated': [true],

  /**
   * @name at-rule-no-vendor-prefix
   * @description 禁止 @规则使用浏览器厂商前缀；建议使用 Autoprefixer 等工具根据 browserslist 配置自动处理兼容性
   * @value true - 启用，禁止厂商前缀
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@keyframes slideIn { ... }
   * @example ❌ 错误示例：
   *  - \@-webkit-keyframes slideIn { ... }        (应使用工具自动添加)
   *  - \@-moz-keyframes slideIn { ... }           (应使用工具自动添加)
   */
  'at-rule-no-vendor-prefix': [true],

  /**
   * @name at-rule-allowed-list
   * @description 指定允许使用的 @规则白名单；限制项目中只能使用特定的 @规则
   * @value null - 不限制，允许所有 @规则
   * @value array - 字符串数组，只允许列表中的 @规则（如：['media', 'import', 'font-face']）
   * @example ✅ 正确示例（假设配置为 ['media', 'import']）：
   *  - \@media (min-width: 768px) { ... }
   *  - \@import url('styles.css');
   * @example ❌ 错误示例（假设配置为 ['media', 'import']）：
   *  - \@keyframes slideIn { ... }               (不在白名单中)
   */
  'at-rule-allowed-list': [null],

  /**
   * @name at-rule-disallowed-list
   * @description 指定禁止使用的 @规则黑名单；禁止项目中使用特定的 @规则
   * @value null - 不限制，不禁止任何 @规则
   * @value array - 字符串数组，禁止列表中的 @规则（如：['extend', 'debug']）
   * @example ✅ 正确示例（假设配置为 ['extend', 'debug']）：
   *  - \@mixin button { ... }
   *  - \@media (min-width: 768px) { ... }
   * @example ❌ 错误示例（假设配置为 ['extend', 'debug']）：
   *  - \@extend .base-class;                     (在黑名单中，推荐使用 mixin)
   *  - \@debug "value: #{$value}";               (在黑名单中，生产环境不应有调试代码)
   */
  'at-rule-disallowed-list': [null],

  /**
   * @name at-rule-empty-line-before
   * @description 要求 @规则前有空行，提高代码可读性
   * @value 'always' - 总是要求空行
   * @value 'never' - 不要求空行
   * @secondary except: ['blockless-after-same-name-blockless', 'first-nested'] - 连续的同名无块 @规则 和 作为第一个嵌套规则时不需要空行
   * @secondary ignore: ['after-comment'] - 忽略注释后的 @规则
   * @example ✅ 正确示例：
   *  - .foo { color: red; }
   *
   *    \@media (min-width: 768px) { ... }
   * @example ❌ 错误示例：
   *  - .foo { color: red; }
   *    \@media (min-width: 768px) { ... }      (缺少空行)
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    },
  ],

  /**
   * @name at-rule-property-required-list
   * @description 要求特定 @规则必须包含指定的属性；某些 @规则需要必填属性才能正常工作
   * @value null - 不限制
   * @value object - 对象，指定每个 @规则的必填属性列表（如：{ 'font-face': ['font-family', 'src'] }）
   * @example ✅ 正确示例（假设配置为 { 'font-face': ['font-family', 'src'] }）：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *      src: url('font.woff2');
   *    }
   * @example ❌ 错误示例（假设配置为 { 'font-face': ['font-family', 'src'] }）：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *    }                                      (缺少必填属性 src)
   */
  'at-rule-property-required-list': [null],

  /**
   * @name at-rule-prelude-no-invalid
   * @description 禁止 @规则的 prelude 部分无效；prelude 是 @ 关键字和花括号之间的部分，检查其语法是否符合规范
   * @value true - 启用，禁止无效的 prelude
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@media (min-width: 768px) { ... }
   *  - \@media (width > 600px) { ... }
   *  - \@keyframes slideIn { ... }
   * @example ❌ 错误示例：
   *  - \@media (width >>> 600px) { ... }         (无效的运算符)
   *  - \@keyframes 123invalid { ... }            (名称不能以数字开头)
   */
  'at-rule-prelude-no-invalid': [true],

  /**
   * @name at-rule-descriptor-no-unknown
   * @description 禁止在 @规则中使用未知的 descriptor；descriptor 是 @规则的专用配置项，不同于 CSS 属性
   * @value true - 启用，禁止未知的 descriptor
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *      src: url('font.woff2');
   *      font-display: swap;
   *    }
   * @example ❌ 错误示例：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *      unknown-descriptor: value;
   *    }                                      (不存在的 descriptor)
   */
  'at-rule-descriptor-no-unknown': [true],

  /**
   * @name at-rule-descriptor-value-no-unknown
   * @description 禁止 @规则 descriptor 使用未知的值；检查 descriptor 的值是否符合规范
   * @value true - 启用，禁止未知的 descriptor 值
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *      font-display: swap;
   *    }
   * @example ❌ 错误示例：
   *  - \@font-face {
   *      font-family: 'MyFont';
   *      font-display: unknown;
   *    }                                      (无效值，有效值：auto/block/swap/fallback/optional)
   */
  'at-rule-descriptor-value-no-unknown': [true],
};
