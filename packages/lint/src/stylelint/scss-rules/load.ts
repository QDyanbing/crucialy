/**
 * SCSS Load 相关规则
 *
 * 包含加载相关规则（2条）
 */

import type { Config } from 'stylelint';

export const scssLoadRules: Config['rules'] = {
  /**
   * @name scss/load-no-partial-leading-underscore
   * @description 禁止 @import/@use/@forward/@load-css 部分文件前导下划线
   * @value true - 启用，禁止前导下划线（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@import 'variables';
   *  - \@use 'variables';
   * @example ❌ 错误示例：
   *  - \@import '_variables';                    (不应有前导下划线)
   */
  'scss/load-no-partial-leading-underscore': true,

  /**
   * @name scss/load-partial-extension
   * @description @import/@use/@forward/@load-css 部分文件扩展名要求
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是需要扩展名
   * @value 'never' - 不能有扩展名
   * @example ✅ 正确示例（null 时）：
   *  - \@import 'variables';
   *  - \@import 'variables.scss';
   * @example ❌ 错误示例（假设配置为 never）：
   *  - \@import 'variables.scss';                (不应有扩展名)
   */
  'scss/load-partial-extension': null,
};

