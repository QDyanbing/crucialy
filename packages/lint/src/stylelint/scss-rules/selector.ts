/**
 * SCSS Selector 相关规则
 *
 * 包含选择器相关规则（3条）
 */

import type { Config } from 'stylelint';

export const scssSelectorRules: Config['rules'] = {
  /**
   * @name scss/selector-nest-combinators
   * @description 选择器嵌套组合器规范
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用嵌套组合器
   * @value 'never' - 不使用嵌套组合器
   * @example ✅ 正确示例（null 时）：
   *  - .parent {
   *      > .child { }
   *    }
   *  - .parent > .child { }
   * @example ❌ 错误示例（假设配置为 always）：
   *  - .parent > .child { }                      (应使用嵌套组合器)
   */
  'scss/selector-nest-combinators': null,

  /**
   * @name scss/selector-no-redundant-nesting-selector
   * @description 禁止冗余的嵌套选择器
   * @value true - 启用，禁止冗余嵌套选择器（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .parent {
   *      .child { }
   *    }
   * @example ❌ 错误示例：
   *  - .parent {
   *      & .child { }                            (& 是冗余的)
   *    }
   */
  'scss/selector-no-redundant-nesting-selector': true,

  /**
   * @name scss/selector-no-union-class-name
   * @description 禁止并集选择器中的类名
   * @value true - 启用，禁止并集选择器中的类名（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .class1,
   *    .class2 { }
   * @example ❌ 错误示例：
   *  - div,
   *    .class { }                                (并集选择器中不应混用类型和类)
   */
  'scss/selector-no-union-class-name': true,
};
