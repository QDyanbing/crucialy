/**
 * Stylus Block 相关规则
 *
 * 包含块相关规则（9条）
 * - 块闭合大括号空行要求
 * - 块闭合大括号换行要求
 * - 块闭合大括号空格要求
 * - 块开始大括号换行要求
 * - 块开始大括号空格要求
 */

import type { Config } from 'stylelint';

const stylusBlockRules: Config['rules'] = {
  /**
   * @name stylus/block-closing-brace-empty-line-before
   * @description 块闭合大括号前空行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-closing-brace-empty-line-before': null,

  /**
   * @name stylus/block-closing-brace-newline-after
   * @description 块闭合大括号后换行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-closing-brace-newline-after': null,

  /**
   * @name stylus/block-closing-brace-newline-before
   * @description 块闭合大括号前换行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-closing-brace-newline-before': null,

  /**
   * @name stylus/block-closing-brace-space-after
   * @description 块闭合大括号后空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-closing-brace-space-after': null,

  /**
   * @name stylus/block-closing-brace-space-before
   * @description 块闭合大括号前空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-closing-brace-space-before': null,

  /**
   * @name stylus/block-opening-brace-newline-after
   * @description 块开始大括号后换行要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-opening-brace-newline-after': null,

  /**
   * @name stylus/block-opening-brace-space-after
   * @description 块开始大括号后空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-opening-brace-space-after': null,

  /**
   * @name stylus/block-opening-brace-space-before
   * @description 块开始大括号前空格要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/block-opening-brace-space-before': null,
};

export default stylusBlockRules;
