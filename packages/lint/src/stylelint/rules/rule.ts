/**
 * Rule rules
 */

export const ruleRules = {
  /**
   * rule-empty-line-before
   * 规则前需要空行
   * always-multi-line: 多行规则前需要空行
   * except: ['first-nested'] - 第一个嵌套规则例外
   * ignore: ['after-comment'] - 注释后忽略
   */
  'rule-empty-line-before': [
    'always-multi-line',
    { except: ['first-nested'], ignore: ['after-comment'] },
  ],
  
  /**
   * rule-nesting-at-rule-required-list
   * 规则嵌套必需的 @规则列表
   * null: 不限制
   */
  'rule-nesting-at-rule-required-list': null,
  
  /**
   * rule-selector-property-disallowed-list
   * 特定选择器禁止特定属性
   * null: 不限制
   * 例: { '/^\\./': ['position'] } - 类选择器禁止 position
   */
  'rule-selector-property-disallowed-list': null,
  
};
