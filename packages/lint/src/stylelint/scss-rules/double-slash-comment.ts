/**
 * SCSS //-comment 相关规则
 *
 * 包含双斜杠注释相关规则（3条）
 */

import type { Config } from 'stylelint';

export const scssDoubleSlashCommentRules: Config['rules'] = {
  /**
   * @name scss/double-slash-comment-empty-line-before
   * @description 双斜杠注释前是否需要空行
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是需要空行
   * @value 'never' - 不需要空行
   * @example ✅ 正确示例（null 时）：
   *  - .class { }
   *    // 注释
   *  - .class { }
   *
   *    // 注释
   * @example ❌ 错误示例（假设配置为 always）：
   *  - .class { }
   *    // 注释                                   (注释前应有空行)
   */
  'scss/double-slash-comment-empty-line-before': null,

  /**
   * @name scss/double-slash-comment-inline
   * @description 是否允许行内双斜杠注释
   * @value null - 不限制（Base 配置）
   * @value 'never' - 不允许行内注释
   * @value 'always' - 允许行内注释
   * @example ✅ 正确示例（null 时）：
   *  - color: red; // 注释
   *  - // 注释
   *    color: red;
   * @example ❌ 错误示例（假设配置为 never）：
   *  - color: red; // 注释                       (不应使用行内注释)
   */
  'scss/double-slash-comment-inline': null,

  /**
   * @name scss/double-slash-comment-whitespace-inside
   * @description 双斜杠注释内部空格要求
   * @value 'always' - 总是有空格（Base 配置）
   * @value 'never' - 不能有空格
   * @example ✅ 正确示例：
   *  - // 这是一个注释
   * @example ❌ 错误示例：
   *  - //这是一个注释                            (注释后应有空格)
   */
  'scss/double-slash-comment-whitespace-inside': 'always',
};
