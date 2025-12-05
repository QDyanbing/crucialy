/**
 * Rule 相关规则
 *
 * 包含规则本身相关的规则（3条）
 * - 规则前空行
 * - 规则嵌套要求
 * - 特定选择器禁止特定属性
 */

import type { Config } from 'stylelint';

export const ruleRules: Config['rules'] = {
  /**
   * rule-empty-line-before
   * 要求规则前有空行
   *
   * 说明：在规则前添加空行，提高可读性
   * - always-multi-line：多行规则前需要空行
   * - 单行规则可以不加空行
   *
   * 例外情况：
   * - first-nested：作为第一个嵌套规则时不需要空行
   *
   * 忽略情况：
   * - after-comment：注释后的规则可以不加空行
   *
   * ✅ 正确示例：
   * a { color: red; }
   *
   * b {
   *   color: blue;
   *   background: white;
   * }
   *
   * ✅ 正确示例（first-nested 例外）：
   * .parent {
   *   .child {
   *     color: red;
   *   }
   * }
   *
   * ❌ 错误示例（多行规则缺少空行）：
   * a { color: red; }
   * b {
   *   color: blue;
   *   background: white;
   * }
   */
  'rule-empty-line-before': [
    'always-multi-line',
    { except: ['first-nested'], ignore: ['after-comment'] },
  ],

  /**
   * rule-nesting-at-rule-required-list
   * 指定规则嵌套时必须使用的 @规则列表
   *
   * 说明：要求嵌套规则必须在特定的 @规则内
   * - null：不限制
   * - 数组：必须在列表中的 @规则内嵌套
   *
   * Base 配置不限制，常见使用场景：
   * - 要求嵌套必须在 @nest 内（CSS Nesting 规范）
   * - 限制只在 @media 等特定 @规则中嵌套
   *
   * 配置示例：['nest']
   * ✅ 正确示例（null 时）：
   * .parent {
   *   .child { color: red; }
   * }
   *
   * ✅ 正确示例（配置后）：
   * .parent {
   *   @nest .child { color: red; }
   * }
   *
   * ❌ 错误示例（配置后）：
   * .parent {
   *   .child { color: red; } (缺少 @nest)
   * }
   */
  'rule-nesting-at-rule-required-list': null,

  /**
   * rule-selector-property-disallowed-list
   * 指定特定选择器禁止使用的属性
   *
   * 说明：为不同类型的选择器设置属性限制
   * - null：不限制
   * - 对象：为匹配的选择器指定禁止的属性
   *
   * Base 配置不限制，常见使用场景：
   * - 类选择器禁止 position（强制使用 ID 或标签）
   * - 特定选择器禁止特定布局属性
   *
   * 配置示例：{ '/^\\./'：['position'] }
   * ✅ 正确示例（null 时）：
   * .box { position: absolute; }
   *
   * ❌ 错误示例（配置后）：
   * .box { position: absolute; } (类选择器禁止 position)
   */
  'rule-selector-property-disallowed-list': null,
};
