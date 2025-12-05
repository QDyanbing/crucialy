/**
 * Declaration 相关规则
 *
 * 包含声明块和属性声明相关规则（13条）
 * - 禁止重复声明
 * - 禁止简写属性冲突
 * - 单行声明限制
 * - 声明空行
 * - 属性值验证
 * - 属性单位和值的限制
 */

import type { Config } from 'stylelint';

export const declarationRules: Config['rules'] = {
  /**
   * declaration-block-no-duplicate-custom-properties
   * 禁止声明块中出现重复的自定义属性
   *
   * 说明：同一个规则块中不能定义相同的 CSS 变量两次
   * - 后面的定义会覆盖前面的
   * - 通常是复制粘贴错误或疏忽
   * - 会导致代码混乱，难以维护
   *
   * ✅ 正确示例：
   * .a { --color: red; --size: 10px; }
   *
   * ❌ 错误示例：
   * .a {
   *   --color: red;
   *   --color: blue; (重复定义)
   * }
   */
  'declaration-block-no-duplicate-custom-properties': true,

  /**
   * declaration-block-no-duplicate-properties
   * 禁止声明块中出现重复的属性
   *
   * 说明：同一个规则块中不能定义相同的属性两次
   * - 后面的声明会覆盖前面的
   * - 通常是维护过程中的遗留代码
   *
   * 例外情况：
   * - consecutive-duplicates-with-different-values
   *   允许连续的重复属性有不同值（用于 fallback）
   *
   * ✅ 正确示例：
   * a { color: red; background: blue; }
   *
   * ✅ 正确示例（fallback）：
   * a {
   *   display: -webkit-box;
   *   display: flex; (浏览器兼容性 fallback)
   * }
   *
   * ❌ 错误示例：
   * a {
   *   color: red;
   *   background: blue;
   *   color: green; (非连续重复)
   * }
   */
  'declaration-block-no-duplicate-properties': [
    true,
    { ignore: ['consecutive-duplicates-with-different-values'] },
  ],

  /**
   * declaration-block-no-redundant-longhand-properties
   * 禁止使用冗余的 longhand 属性（应该用简写）
   *
   * 说明：当多个 longhand 属性可以合并为简写时，应该使用简写
   * - margin-top, margin-right, margin-bottom, margin-left → margin
   * - padding、border、background 等同理
   * - 简写更简洁，代码量更少
   *
   * ✅ 正确示例：
   * a { margin: 10px 20px; }
   *
   * ✅ 正确示例：
   * a { padding: 5px; }
   *
   * ❌ 错误示例：
   * a {
   *   margin-top: 10px;
   *   margin-right: 20px;
   *   margin-bottom: 10px;
   *   margin-left: 20px;
   * }
   *
   * ❌ 错误示例：
   * a {
   *   padding-top: 5px;
   *   padding-right: 5px;
   *   padding-bottom: 5px;
   *   padding-left: 5px;
   * }
   */
  'declaration-block-no-redundant-longhand-properties': true,

  /**
   * declaration-block-no-shorthand-property-overrides
   * 禁止简写属性覆盖相关的 longhand 属性
   *
   * 说明：当 longhand 属性后面跟着简写属性时，longhand 会被覆盖
   * - 这通常是书写顺序错误
   * - 会导致前面的 longhand 属性失效
   * - 应该调整顺序或只使用简写
   *
   * ✅ 正确示例：
   * a {
   *   margin: 10px;
   *   margin-left: 20px; (后面的覆盖前面的)
   * }
   *
   * ❌ 错误示例：
   * a {
   *   margin-left: 20px;
   *   margin: 10px; (简写覆盖了 margin-left)
   * }
   *
   * ❌ 错误示例：
   * a {
   *   padding-top: 5px;
   *   padding: 10px; (padding-top 被覆盖)
   * }
   */
  'declaration-block-no-shorthand-property-overrides': true,

  /**
   * declaration-block-single-line-max-declarations
   * 限制单行声明块中的最大声明数
   *
   * 说明：单行写法时限制属性数量，提高可读性
   * - 单行多个属性会降低可读性
   * - Base 配置限制为 1 个
   * - 多个属性应该换行书写
   *
   * ✅ 正确示例：
   * a { color: red; }
   *
   * ✅ 正确示例（多个属性应换行）：
   * a {
   *   color: red;
   *   background: blue;
   * }
   *
   * ❌ 错误示例：
   * a { color: red; background: blue; }
   */
  'declaration-block-single-line-max-declarations': 1,

  /**
   * declaration-empty-line-before
   * 要求或禁止声明前有空行
   *
   * 说明：控制声明前的空行，提高可读性
   * - null：不限制
   * - always：总是要求空行
   * - never：禁止空行
   *
   * Base 配置不限制，允许灵活排版
   *
   * ✅ 正确示例（null 时）：
   * a {
   *   color: red;
   *   background: blue;
   * }
   */
  'declaration-empty-line-before': null,

  /**
   * declaration-no-important
   * 禁止使用 !important
   *
   * 说明：!important 会破坏 CSS 的层叠规则
   * - 使样式难以覆盖和维护
   * - 通常表示架构设计有问题
   * - 应该通过提高选择器特异性来解决
   *
   * Base 配置不限制（null），但严格模式可能会禁用
   *
   * ✅ 正确示例（null 时）：
   * a { color: red !important; }
   *
   * ✅ 正确示例（推荐写法）：
   * .page .button { color: red; }
   *
   * ❌ 错误示例（如果配置为 true）：
   * a { color: red !important; }
   */
  'declaration-no-important': null,

  /**
   * declaration-property-max-values
   * 限制属性值的最大数量
   *
   * 说明：限制特定属性可以有多少个值
   * - null：不限制
   * - 对象：为不同属性设置不同的限制
   *
   * Base 配置不限制，常见使用场景：
   * - 限制 border 只能有 1 个值（统一边框）
   * - 限制 box-shadow 数量
   *
   * 配置示例：{ '/^border/': 1 }
   * ✅ 正确示例（null 时）：
   * a { margin: 10px 20px 30px 40px; }
   *
   * ❌ 错误示例（配置 { '/^border/': 1 } 后）：
   * a { border: 1px solid red; } (3个值，超过限制)
   */
  'declaration-property-max-values': null,

  /**
   * declaration-property-unit-allowed-list
   * 指定属性允许使用的单位白名单
   *
   * 说明：限制特定属性只能使用特定单位
   * - null：不限制
   * - 对象：为不同属性指定允许的单位
   *
   * Base 配置不限制，常见使用场景：
   * - font-size 只允许 px, em, rem
   * - line-height 只允许无单位数字
   *
   * 配置示例：{ 'font-size': ['px', 'em', 'rem'] }
   * ✅ 正确示例（null 时）：
   * a { font-size: 12pt; }
   *
   * ❌ 错误示例（配置后）：
   * a { font-size: 12pt; } (pt 不在白名单中)
   */
  'declaration-property-unit-allowed-list': null,

  /**
   * declaration-property-unit-disallowed-list
   * 指定属性禁止使用的单位黑名单
   *
   * 说明：禁止特定属性使用特定单位
   * - null：不限制
   * - 对象：为不同属性指定禁止的单位
   *
   * Base 配置不限制，常见使用场景：
   * - font-size 禁止 pt（Web 开发不推荐）
   * - width/height 禁止 px（响应式设计）
   *
   * 配置示例：{ 'font-size': ['pt'] }
   * ✅ 正确示例（null 时）：
   * a { font-size: 12pt; }
   *
   * ❌ 错误示例（配置后）：
   * a { font-size: 12pt; } (pt 在黑名单中)
   */
  'declaration-property-unit-disallowed-list': null,

  /**
   * declaration-property-value-allowed-list
   * 指定属性允许使用的值白名单
   *
   * 说明：限制特定属性只能使用特定值
   * - null：不限制
   * - 对象：为不同属性指定允许的值
   *
   * Base 配置不限制，常见使用场景：
   * - display 只允许特定值
   * - 统一团队使用的属性值
   *
   * 配置示例：{ 'display': ['block', 'flex', 'none'] }
   * ✅ 正确示例（null 时）：
   * a { display: inline-block; }
   */
  'declaration-property-value-allowed-list': null,

  /**
   * declaration-property-value-disallowed-list
   * 指定属性禁止使用的值黑名单
   *
   * 说明：禁止特定属性使用特定值
   * - null：不限制
   * - 对象：为不同属性指定禁止的值
   *
   * Base 配置不限制，常见使用场景：
   * - border 系列禁止 none（统一使用 0）
   * - 禁止特定的过时值
   *
   * 配置示例：{ '/^border/': ['none'] }
   * ✅ 正确示例（null 时）：
   * a { border: none; }
   *
   * ❌ 错误示例（配置后）：
   * a { border: none; } (none 在黑名单中)
   */
  'declaration-property-value-disallowed-list': null,

  /**
   * declaration-property-value-keyword-no-deprecated
   * 禁止使用已弃用的属性值关键字
   *
   * 说明：某些属性值已被 CSS 规范废弃
   * - 已弃用的值在新浏览器中可能不支持
   * - 应该使用标准的替代值
   *
   * ✅ 正确示例：
   * a { overflow: auto; }
   *
   * ✅ 正确示例：
   * a { text-decoration: underline; }
   *
   * ❌ 错误示例：
   * a { overflow: -moz-scrollbars-none; } (已弃用)
   *
   * ❌ 错误示例：
   * a { display: -webkit-box; } (已弃用，应使用 flex)
   */
  'declaration-property-value-keyword-no-deprecated': true,

  /**
   * declaration-property-value-no-unknown
   * 禁止使用未知的属性值
   *
   * 说明：检查属性值是否为该属性的有效值
   * - display: blockk（拼写错误）
   * - position: center（不存在的值）
   * - 无效值会导致样式失效
   *
   * ✅ 正确示例：
   * a { display: block; }
   *
   * ✅ 正确示例：
   * a { position: absolute; }
   *
   * ❌ 错误示例：
   * a { display: unknown-value; }
   *
   * ❌ 错误示例：
   * a { position: center; } (position 没有 center 值)
   */
  'declaration-property-value-no-unknown': true,
};
