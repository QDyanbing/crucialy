/**
 * Stylus Comment 相关规则
 *
 * 包含注释相关规则（3条）
 * - 单行注释格式
 * - 单行注释双斜杠后空格
 * - 单行注释禁止空注释
 */

import type { Config } from 'stylelint';

const stylusCommentRules: Config['rules'] = {
  /**
   * @name stylus/single-line-comment
   * @description 单行注释格式要求
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - // This is a comment
   * @example ❌ 错误示例：
   *  - 应使用双斜杠注释而不是块注释
   */
  'stylus/single-line-comment': null,

  /**
   * @name stylus/single-line-comment-double-slash-space-after
   * @description 单行注释双斜杠后空格要求
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - // This is a comment
   * @example ❌ 错误示例：
   *  - //This is a comment  (缺少空格)
   */
  'stylus/single-line-comment-double-slash-space-after': null,

  /**
   * @name stylus/single-line-comment-no-empty
   * @description 禁止空注释
   * @value true - 启用，禁止空注释
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - // This is a comment
   * @example ❌ 错误示例：
   *  - //  (空注释)
   */
  'stylus/single-line-comment-no-empty': true,
};

export default stylusCommentRules;
