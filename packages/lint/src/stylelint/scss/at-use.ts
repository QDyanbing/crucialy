/**
 * SCSS @-use 相关规则
 *
 * 包含 @use 相关规则（2条）
 */

import type { Config } from 'stylelint';

const scssAtUseRules: Config['rules'] = {
  /**
   * @name scss/at-use-no-redundant-alias
   * @description 禁止 @use 冗余别名
   * @value true - 启用，禁止冗余别名（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@use 'variables';
   *  - \@use 'variables' as vars;
   * @example ❌ 错误示例：
   *  - \@use 'variables' as variables;          (别名与模块名相同，冗余)
   */
  'scss/at-use-no-redundant-alias': true,

  /**
   * @name scss/at-use-no-unnamespaced
   * @description 禁止 @use 未命名空间的引用
   * @value true - 启用，禁止未命名空间（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@use 'variables';
   *    $var: variables.$color;
   * @example ❌ 错误示例：
   *  - \@use 'variables';
   *    $var: $color;                            (应使用命名空间)
   */
  'scss/at-use-no-unnamespaced': true,
};

export default scssAtUseRules;
