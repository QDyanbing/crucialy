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
   * @name rule-empty-line-before
   * @description 要求规则前有空行；在规则前添加空行，提高可读性
   * @value 'always' - 总是要求空行
   * @value 'always-multi-line' - 多行规则前需要空行
   * @value 'never' - 不要求空行
   * @secondary except: ['first-nested'] - 作为第一个嵌套规则时不需要空行
   * @secondary ignore: ['after-comment'] - 注释后的规则可以不加空行
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *
   *    b {
   *      color: blue;
   *      background: white;
   *    }
   *  - .parent {
   *      .child {
   *        color: red;
   *      }
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; }
   *    b {
   *      color: blue;
   *      background: white;
   *    }                                      (多行规则前缺少空行)
   */
  'rule-empty-line-before': [
    'always-multi-line',
    { except: ['first-nested'], ignore: ['after-comment'] },
  ],

  /**
   * @name rule-nesting-at-rule-required-list
   * @description 指定规则嵌套时必须使用的 \@规则列表；要求嵌套规则必须在特定的 \@规则内，Base 配置不限制
   * @value null - 不限制
   * @value array - 字符串数组，必须在列表中的 \@规则内嵌套（如：['nest']）
   * @example ✅ 正确示例（null 时）：
   *  - .parent {
   *      .child { color: red; }
   *    }
   * @example ❌ 错误示例（假设配置为 ['nest']）：
   *  - .parent {
   *      .child { color: red; }
   *    }                                      (缺少 \@nest)
   */
  'rule-nesting-at-rule-required-list': null,

  /**
   * @name rule-selector-property-disallowed-list
   * @description 指定特定选择器禁止使用的属性；为不同类型的选择器设置属性限制，Base 配置不限制
   * @value null - 不限制
   * @value object - 对象，为匹配的选择器指定禁止的属性（如：{ '/^\\./': ['position'] }）
   * @example ✅ 正确示例（null 时）：
   *  - .box { position: absolute; }
   * @example ❌ 错误示例（假设配置为 { '/^\\./': ['position'] }）：
   *  - .box { position: absolute; }          (类选择器禁止 position)
   */
  'rule-selector-property-disallowed-list': null,
};
