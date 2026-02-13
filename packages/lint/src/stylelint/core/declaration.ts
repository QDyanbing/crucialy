/**
 * Declaration 相关规则
 *
 * 包含声明块和属性声明相关规则（13条）
 * - 禁止重复声明：避免冗余代码
 * - 禁止简写属性冲突：确保属性优先级正确
 * - 单行声明限制：提高代码可读性
 * - 声明空行：改善代码结构
 * - 属性值验证：确保值格式正确
 * - 属性单位和值的限制：统一单位使用
 */

import type { Config } from 'stylelint';

const declarationRules: Config['rules'] = {
  /**
   * @name declaration-block-no-duplicate-custom-properties
   * @description 禁止声明块中出现重复的自定义属性；同一个规则块中不能定义相同的 CSS 变量两次，会导致代码混乱
   * @value true - 启用，禁止重复自定义属性
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .a { --color: red; --size: 10px; }
   * @example ❌ 错误示例：
   *  - .a {
   *      --color: red;
   *      --color: blue;
   *    }                                      (重复定义，后面的会覆盖前面的)
   */
  'declaration-block-no-duplicate-custom-properties': true,

  /**
   * @name declaration-block-no-duplicate-properties
   * @description 禁止声明块中出现重复的属性；同一个规则块中不能定义相同的属性两次，后面的声明会覆盖前面的
   * @value true - 启用，禁止重复属性
   * @value false - 禁用此规则
   * @secondary ignore: ['consecutive-duplicates-with-different-values'] - 允许连续的重复属性有不同值（用于浏览器兼容性 fallback）
   * @example ✅ 正确示例：
   *  - a { color: red; background: blue; }
   *  - a {
   *      display: -webkit-box;
   *      display: flex;
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *      color: red;
   *      background: blue;
   *      color: green;
   *    }                                      (非连续重复)
   */
  'declaration-block-no-duplicate-properties': [
    true,
    { ignore: ['consecutive-duplicates-with-different-values'] },
  ],

  /**
   * @name declaration-block-no-redundant-longhand-properties
   * @description 禁止使用冗余的 longhand 属性；当多个 longhand 属性可以合并为简写时，应该使用简写，代码更简洁
   * @value true - 启用，禁止冗余 longhand 属性
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { margin: 10px 20px; }
   *  - a { padding: 5px; }
   * @example ❌ 错误示例：
   *  - a {
   *      margin-top: 10px;
   *      margin-right: 20px;
   *      margin-bottom: 10px;
   *      margin-left: 20px;
   *    }                                      (应使用 margin: 10px 20px)
   */
  'declaration-block-no-redundant-longhand-properties': true,

  /**
   * @name declaration-block-no-shorthand-property-overrides
   * @description 禁止简写属性覆盖相关的 longhand 属性；当 longhand 属性后面跟着简写属性时，longhand 会被覆盖，通常是书写顺序错误
   * @value true - 启用，禁止简写属性覆盖
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a {
   *      margin: 10px;
   *      margin-left: 20px;
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *      margin-left: 20px;
   *      margin: 10px;
   *    }                                      (简写覆盖了 margin-left)
   *  - a {
   *      padding-top: 5px;
   *      padding: 10px;
   *    }                                      (padding-top 被覆盖)
   */
  'declaration-block-no-shorthand-property-overrides': true,

  /**
   * @name declaration-block-single-line-max-declarations
   * @description 限制单行声明块中的最大声明数；单行多个属性会降低可读性，多个属性应该换行书写
   * @value number - 最大声明数（Base 配置为 1）
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *  - a {
   *      color: red;
   *      background: blue;
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; background: blue; }    (单行有 2 个声明，超过限制)
   */
  'declaration-block-single-line-max-declarations': 1,

  /**
   * @name declaration-empty-line-before
   * @description 禁止声明前有空行；保持 CSS 声明紧凑，无额外空行
   * @value null - 不限制
   * @value 'always' - 总是要求空行
   * @value 'never' - 禁止空行
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *      background: blue;
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *      color: red;
   *
   *      background: blue;
   *    }                                      (不应有空行)
   */
  'declaration-empty-line-before': 'never',

  /**
   * @name declaration-no-important
   * @description 禁止使用 !important；Strict 模式禁止使用，!important 会破坏 CSS 的层叠规则，使样式难以覆盖和维护
   * @value true - 禁止使用 !important（Strict 配置，覆盖 Base 的 null）
   * @value false - 允许使用
   * @example ✅ 正确示例：
   *  - a { color: red; }
   * @example ❌ 错误示例：
   *  - a { color: red !important; }           (应通过提高选择器特异性来解决)
   */
  'declaration-no-important': true,

  /**
   * @name declaration-property-max-values
   * @description 限制属性值的最大数量；限制特定属性可以有多少个值
   * @value null - 不限制
   * @value object - 对象，为不同属性设置不同的限制（如：{ '/^border/': 1 }）
   * @example ✅ 正确示例（null 时）：
   *  - a { margin: 10px 20px 30px 40px; }
   * @example ❌ 错误示例（假设配置为 { '/^border/': 1 }）：
   *  - a { border: 1px solid red; }           (3个值，超过限制)
   */
  'declaration-property-max-values': null,

  /**
   * @name declaration-property-unit-allowed-list
   * @description 指定属性允许使用的单位白名单；限制特定属性只能使用特定单位
   * @value null - 不限制
   * @value object - 对象，为不同属性指定允许的单位（如：{ 'font-size': ['px', 'em', 'rem'] }）
   * @example ✅ 正确示例（null 时）：
   *  - a { font-size: 12pt; }
   * @example ❌ 错误示例（假设配置为 { 'font-size': ['px', 'em', 'rem'] }）：
   *  - a { font-size: 12pt; }                 (pt 不在白名单中)
   */
  'declaration-property-unit-allowed-list': null,

  /**
   * @name declaration-property-unit-disallowed-list
   * @description 指定属性禁止使用的单位黑名单；禁止特定属性使用特定单位
   * @value null - 不限制
   * @value object - 对象，为不同属性指定禁止的单位（如：{ 'font-size': ['pt'] }）
   * @example ✅ 正确示例（null 时）：
   *  - a { font-size: 12pt; }
   * @example ❌ 错误示例（假设配置为 { 'font-size': ['pt'] }）：
   *  - a { font-size: 12pt; }                 (pt 在黑名单中)
   */
  'declaration-property-unit-disallowed-list': null,

  /**
   * @name declaration-property-value-allowed-list
   * @description 指定属性允许使用的值白名单；限制特定属性只能使用特定值
   * @value null - 不限制
   * @value object - 对象，为不同属性指定允许的值（如：{ 'display': ['block', 'flex', 'none'] }）
   * @example ✅ 正确示例（null 时）：
   *  - a { display: inline-block; }
   * @example ❌ 错误示例（假设配置为 { 'display': ['block', 'flex', 'none'] }）：
   *  - a { display: inline-block; }           (inline-block 不在白名单中)
   */
  'declaration-property-value-allowed-list': null,

  /**
   * @name declaration-property-value-disallowed-list
   * @description 指定属性禁止使用的值黑名单；禁止特定属性使用特定值
   * @value null - 不限制
   * @value object - 对象，为不同属性指定禁止的值（如：{ '/^border/': ['none'] }）
   * @example ✅ 正确示例（null 时）：
   *  - a { border: none; }
   * @example ❌ 错误示例（假设配置为 { '/^border/': ['none'] }）：
   *  - a { border: none; }                    (none 在黑名单中，应使用 0)
   */
  'declaration-property-value-disallowed-list': null,

  /**
   * @name declaration-property-value-keyword-no-deprecated
   * @description 禁止使用已弃用的属性值关键字；某些属性值已被 CSS 规范废弃，在新浏览器中可能不支持
   * @value true - 启用，禁止已弃用的属性值
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { overflow: auto; }
   *  - a { text-decoration: underline; }
   * @example ❌ 错误示例：
   *  - a { overflow: -moz-scrollbars-none; }  (已弃用)
   *  - a { display: -webkit-box; }            (已弃用，应使用 flex)
   */
  'declaration-property-value-keyword-no-deprecated': true,

  /**
   * @name declaration-property-value-no-unknown
   * @description 禁止使用未知的属性值；检查属性值是否为该属性的有效值，无效值会导致样式失效
   * @value true - 启用，禁止未知属性值
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { display: block; }
   *  - a { position: absolute; }
   * @example ❌ 错误示例：
   *  - a { display: unknown-value; }          (拼写错误或不存在的值)
   *  - a { position: center; }                (position 没有 center 值)
   */
  'declaration-property-value-no-unknown': true,
};

export default declarationRules;
