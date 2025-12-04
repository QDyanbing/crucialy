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

export const declarationRules = {
  /**
   * declaration-block-no-duplicate-custom-properties
   * 声明块禁止重复自定义属性
   * ✅ .a { --color: red; }
   * ❌ .a { --color: red; --color: blue; }
   */
  'declaration-block-no-duplicate-custom-properties': true,
  
  /**
   * declaration-block-no-duplicate-properties
   * 声明块禁止重复属性
   * ✅ a { color: red; }
   * ❌ a { color: red; color: blue; }
   * ignore: ['consecutive-duplicates-with-different-values']
   * 允许连续不同值的重复（用于 fallback）
   */
  'declaration-block-no-duplicate-properties': [
    true,
    { ignore: ['consecutive-duplicates-with-different-values'] },
  ],
  
  /**
   * declaration-block-no-redundant-longhand-properties
   * 禁止冗余的 longhand 属性（应该用简写）
   * ✅ margin: 1px 2px;
   * ❌ margin-top: 1px; margin-right: 2px; margin-bottom: 1px; margin-left: 2px;
   */
  'declaration-block-no-redundant-longhand-properties': true,
  
  /**
   * declaration-block-no-shorthand-property-overrides
   * 禁止简写属性覆盖 longhand 属性
   * ✅ margin-left: 10px; margin: 20px;
   * ❌ margin: 20px; margin-left: 10px; (margin 会被覆盖)
   */
  'declaration-block-no-shorthand-property-overrides': true,
  
  /**
   * declaration-block-single-line-max-declarations
   * 单行声明块最大声明数
   * ✅ a { color: red; }
   * ❌ a { color: red; background: blue; } (超过1个)
   */
  'declaration-block-single-line-max-declarations': 1,
  
  /**
   * declaration-empty-line-before
   * 声明前是否需要空行
   * null: 不限制
   */
  'declaration-empty-line-before': null,
  
  /**
   * declaration-no-important
   * 禁止使用 !important
   * null: 允许使用
   * ✅ color: red !important; (null 时允许)
   */
  'declaration-no-important': null,
  
  /**
   * declaration-property-max-values
   * 声明属性最大值数量
   * null: 不限制
   * 例: { '/^border/': 1 } - border 系列属性最多1个值
   */
  'declaration-property-max-values': null,
  
  /**
   * declaration-property-unit-allowed-list
   * 声明属性单位白名单
   * null: 不限制
   * 例: { 'font-size': ['px', 'em'] }
   */
  'declaration-property-unit-allowed-list': null,
  
  /**
   * declaration-property-unit-disallowed-list
   * 声明属性单位黑名单
   * null: 不限制
   * 例: { 'font-size': ['pt'] }
   */
  'declaration-property-unit-disallowed-list': null,
  
  /**
   * declaration-property-value-allowed-list
   * 声明属性值白名单
   * null: 不限制
   */
  'declaration-property-value-allowed-list': null,
  
  /**
   * declaration-property-value-disallowed-list
   * 声明属性值黑名单
   * null: 不限制
   * 例: { '/^border/': ['none'] } - border 系列禁止 none
   */
  'declaration-property-value-disallowed-list': null,
  
  /**
   * declaration-property-value-keyword-no-deprecated
   * 禁止已弃用的属性值关键字
   * ✅ overflow: auto;
   * ❌ overflow: -moz-scrollbars-none; (已弃用)
   */
  'declaration-property-value-keyword-no-deprecated': true,
  
  /**
   * declaration-property-value-no-unknown
   * 禁止未知的属性值
   * ✅ display: block;
   * ❌ display: unknown-value;
   */
  'declaration-property-value-no-unknown': true,
  
};
