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
   * @description 指定 @extend 的样式；统一代码风格，要求使用 @extend 而不是 @extends
   * @value '@extend' - 要求使用 @extend
   * @value '@extends' - 要求使用 @extends
   * @example ✅ 正确示例：
   *  - @extend .foo
   * @example ❌ 错误示例：
   *  - @extends .foo  (应使用 @extend)
   */
  'stylus/at-extend-style': '@extend',

  /**
   * @name stylus/at-rule-empty-line-before
   * @description @规则前空行要求；统一代码风格，提高可读性（与 stylelint-stylus/standard 配置一致）
   * @value ['always', { except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment'] }] - 标准配置
   * @value 'always' - 要求 @规则前有空行
   * @value 'never' - 禁止 @规则前有空行
   * @example ✅ 正确示例：
   *  - .class
   *      color: red
   *
   *    @media (min-width: 768px)
   *      .class
   *        color: blue
   * @example ❌ 错误示例：
   *  - .class
   *      color: red
   *    @media (min-width: 768px)  (缺少空行)
   *      .class
   *        color: blue
   */
  'stylus/at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    },
  ],

  /**
   * @name stylus/at-rule-name-space-after
   * @description @规则名称后空格要求；统一代码风格，避免语法歧义（与 stylelint-stylus/standard 配置一致）
   * @value 'always-single-line' - 单行时要求 @规则名称后有空格（标准配置）
   * @value 'always' - 要求 @规则名称后有空格
   * @value 'never' - 禁止 @规则名称后有空格
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px)
   *      .class
   *        color: red
   * @example ❌ 错误示例：
   *  - @media(min-width: 768px)  (缺少空格)
   *      .class
   *        color: red
   */
  'stylus/at-rule-name-space-after': 'always-single-line',

  /**
   * @name stylus/at-rule-no-unknown
   * @description 禁止未知的 @规则
   * @value true - 启用，禁止未知 @规则
   * @value false - 禁用此规则
   * @note secondary 选项：ignoreAtRules: ["<string[]>"] - 忽略指定的 @规则
   * @example ✅ 正确示例：
   *  - @media (min-width: 768px) { }
   * @example ❌ 错误示例：
   *  - @unknown-rule { }  (不存在的 @规则)
   */
  'stylus/at-rule-no-unknown': true,
};

export default stylusAtRuleRules;
