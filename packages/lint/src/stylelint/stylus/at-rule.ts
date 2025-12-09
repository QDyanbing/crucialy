/**
 * Stylus At-rule 相关规则
 *
 * 包含 @规则相关规则（4条）
 * - @extend 样式规范
 * - @规则空行要求
 * - @规则名称后空格
 * - @规则未知检查
 */

import type { Config } from 'stylelint';

const stylusAtRuleRules: Config['rules'] = {
  /**
   * @name stylus/at-extend-style
   * @description 指定 @extend 的样式
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - @extend .base-class;
   * @example ❌ 错误示例：
   *  - @extend .base-class  (缺少分号)
   */
  'stylus/at-extend-style': null,

  /**
   * @name stylus/at-rule-empty-line-before
   * @description @规则前空行要求
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - .class { }
   *    @media { }
   * @example ❌ 错误示例：
   *  - .class { }
   *    @media { }  (缺少空行)
   */
  'stylus/at-rule-empty-line-before': null,

  /**
   * @name stylus/at-rule-name-space-after
   * @description @规则名称后空格要求
   * @value null - 不限制
   * @value true - 启用检查
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px) { }
   * @example ❌ 错误示例：
   *  - @media(min-width: 768px) { }  (缺少空格)
   */
  'stylus/at-rule-name-space-after': null,

  /**
   * @name stylus/at-rule-no-unknown
   * @description 禁止未知的 @规则
   * @value true - 启用，禁止未知 @规则
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px) { }
   * @example ❌ 错误示例：
   *  - @unknown-rule { }  (不存在的 @规则)
   */
  'stylus/at-rule-no-unknown': true,
};

export default stylusAtRuleRules;
