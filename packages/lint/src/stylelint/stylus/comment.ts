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
   * @value 'always' - 要求使用单行注释
   * @value 'never' - 禁止使用单行注释
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - // This is a comment
   * @example ❌ 错误示例：
   *  - 应使用双斜杠注释 // 而不是块注释
   */
  'stylus/single-line-comment': null,

  /**
   * @name stylus/single-line-comment-double-slash-space-after
   * @description 单行注释双斜杠后空格要求；统一代码风格，要求双斜杠后有空格
   * @value 'always' - 要求双斜杠后有空格
   * @value 'never' - 禁止双斜杠后有空格
   * @example ✅ 正确示例：
   *  - // This is a comment
   * @example ❌ 错误示例（注意 // 后没有空格）：
   *  - //This is a comment  ← 双斜杠后缺少空格，应为 // This is a comment
   */
  'stylus/single-line-comment-double-slash-space-after': 'always',

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
