/**
 * SCSS @-import 相关规则
 *
 * 包含 @import 相关规则（6条，含已弃用）
 */

import type { Config } from 'stylelint';

export const scssAtImportRules: Config['rules'] = {
  /**
   * @name scss/at-import-no-partial-leading-underscore
   * @description @import 禁止部分文件前导下划线（已弃用，使用 load-no-partial-leading-underscore）
   * @value true - 启用，禁止前导下划线（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@import 'variables';
   * @example ❌ 错误示例：
   *  - \@import '_variables';                   (不应有前导下划线)
   */
  'scss/at-import-no-partial-leading-underscore': true,

  /**
   * @name scss/at-import-partial-extension
   * @description @import 部分文件扩展名要求（已弃用，使用 load-partial-extension）
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是需要扩展名
   * @value 'never' - 不能有扩展名
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables';
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 never）：
   *  - \@import 'variables.scss';               (不应有扩展名)
   */
  'scss/at-import-partial-extension': null,

  /**
   * @name scss/at-import-partial-extension-allowed-list
   * @description @import 部分文件扩展名白名单（新版本，替代 whitelist）
   * @value null - 无白名单（Base 配置）
   * @value array - 允许的扩展名数组
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 ['css']）：
   *  - \@import 'variables.scss';               (扩展名不在白名单中)
   */
  'scss/at-import-partial-extension-allowed-list': null,

  /**
   * @name scss/at-import-partial-extension-blacklist
   * @description @import 部分文件扩展名黑名单（已弃用，使用 disallowed-list）
   * @value null - 无黑名单（Base 配置）
   * @value array - 禁止的扩展名数组
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 ['scss']）：
   *  - \@import 'variables.scss';               (扩展名在黑名单中)
   */
  'scss/at-import-partial-extension-blacklist': null,

  /**
   * @name scss/at-import-partial-extension-disallowed-list
   * @description @import 部分文件扩展名黑名单（新版本，替代 blacklist）
   * @value null - 无黑名单（Base 配置）
   * @value array - 禁止的扩展名数组
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 ['scss']）：
   *  - \@import 'variables.scss';               (扩展名在黑名单中)
   */
  'scss/at-import-partial-extension-disallowed-list': null,

  /**
   * @name scss/at-import-partial-extension-whitelist
   * @description @import 部分文件扩展名白名单（已弃用，使用 allowed-list）
   * @value null - 无白名单（Base 配置）
   * @value array - 允许的扩展名数组
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 ['css']）：
   *  - \@import 'variables.scss';               (扩展名不在白名单中)
   */
  'scss/at-import-partial-extension-whitelist': null,
};
