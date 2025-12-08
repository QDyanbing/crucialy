/**
 * SCSS @-else 相关规则
 *
 * 包含 @else 相关规则（4条）
 */

import type { Config } from 'stylelint';

export const scssAtElseRules: Config['rules'] = {
  /**
   * @name scss/at-else-closing-brace-newline-after
   * @description @else 右大括号后是否换行
   * @value 'always-last-in-chain' - 链的最后一个总是换行（Base 配置）
   * @value 'always-intermediate' - 中间的总是换行
   * @example ✅ 正确示例（always-last-in-chain）：
   *  - \@if ($condition) { }
   *    \@else { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { } \@else { }          (缺少换行)
   */
  'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

  /**
   * @name scss/at-else-closing-brace-space-after
   * @description @else 右大括号后是否有空格
   * @value 'always-intermediate' - 中间的有空格（Base 配置）
   * @value 'always-last-in-chain' - 最后一个有空格
   * @example ✅ 正确示例（always-intermediate）：
   *  - \@if ($condition) { } \@else if ($condition) { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { }\@else if ($condition) { }    (缺少空格)
   */
  'scss/at-else-closing-brace-space-after': 'always-intermediate',

  /**
   * @name scss/at-else-empty-line-before
   * @description @else 前是否需要空行
   * @value 'never' - 不需要空行（Base 配置）
   * @value 'always' - 总是需要空行
   * @example ✅ 正确示例（never）：
   *  - \@if ($condition) { }
   *    \@else { }
   * @example ❌ 错误示例：
   *  - \@if ($condition) { }
   *
   *    \@else { }                                (不应有空行)
   */
  'scss/at-else-empty-line-before': 'never',

  /**
   * @name scss/at-else-if-parentheses-space-before
   * @description @else if 括号前是否有空格
   * @value 'always' - 必须有空格（Base 配置）
   * @value 'never' - 不能有空格
   * @example ✅ 正确示例：
   *  - \@else if ($condition) { }
   * @example ❌ 错误示例：
   *  - \@else if($condition) { }                 (括号前缺少空格)
   */
  'scss/at-else-if-parentheses-space-before': 'always',
};

