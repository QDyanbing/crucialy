/**
 * SCSS Declaration 相关规则
 *
 * 包含声明相关规则（3条）
 */

import type { Config } from 'stylelint';

export const scssDeclarationRules: Config['rules'] = {
  /**
   * @name scss/declaration-nested-properties
   * @description 嵌套属性格式要求
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是使用嵌套属性
   * @value 'never' - 不使用嵌套属性
   * @example ✅ 正确示例（null 时）：
   *  - border: 1px solid red;
   *  - border: {
   *      width: 1px;
   *      style: solid;
   *      color: red;
   *    }
   * @example ❌ 错误示例（假设配置为 never）：
   *  - border: {
   *      width: 1px;
   *    }                                         (不应使用嵌套属性)
   */
  'scss/declaration-nested-properties': null,

  /**
   * @name scss/declaration-nested-properties-no-divided-groups
   * @description 禁止嵌套属性分组分离
   * @value true - 启用，禁止分组分离（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - border: {
   *      width: 1px;
   *      style: solid;
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - border: {
   *      width: 1px;
   *    }
   *    border: {
   *      style: solid;
   *    }                                         (嵌套属性不应分离)
   */
  'scss/declaration-nested-properties-no-divided-groups': true,

  /**
   * @name scss/declaration-property-value-no-unknown
   * @description 禁止声明中使用未知的属性值
   * @value true - 启用，禁止未知属性值（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - display: block;
   *  - color: red;
   * @example ❌ 错误示例：
   *  - display: unknown-value;                  (不存在的属性值)
   */
  'scss/declaration-property-value-no-unknown': true,
};
