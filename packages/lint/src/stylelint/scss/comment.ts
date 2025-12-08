/**
 * SCSS Comment 相关规则
 *
 * 包含注释相关规则（2条）
 */

import type { Config } from 'stylelint';

const scssCommentRules: Config['rules'] = {
  /**
   * @name scss/comment-no-empty
   * @description 禁止空注释
   * @value true - 启用，禁止空注释（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - // 这是一个注释
   *  - /* 这是一个注释 *\/
   * @example ❌ 错误示例：
   *  - //                                     (空注释)
   *  - /* *\/                                  (空注释)
   */
  'scss/comment-no-empty': true,

  /**
   * @name scss/comment-no-loud
   * @description 禁止使用大声注释（CSS 注释）
   * @value null - 不限制（Base 配置）
   * @value true - 禁止使用 CSS 注释，只允许 // 注释
   * @example ✅ 正确示例（null 时）：
   *  - // 单行注释
   *  - /* 多行注释 *\/
   * @example ❌ 错误示例（假设配置为 true）：
   *  - /* 多行注释 *\/                         (应使用 // 注释)
   */
  'scss/comment-no-loud': null,
};

export default scssCommentRules;
