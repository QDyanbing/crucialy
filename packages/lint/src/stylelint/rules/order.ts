/**
 * Order rules
 */

export const orderRules = {
  
  /**
   * order/order
   * 指定声明块内容的顺序
   * ✅ 
   * .a {
   *   --custom-prop: value;     (1. 自定义属性)
   *   $sass-var: value;         (2. Sass 变量)
   *   color: red;               (3. 普通声明)
   *   @include mixin;           (4. @规则)
   *   &:hover {}                (5. 嵌套规则)
   * }
   */
  'order/order': [
    'custom-properties',
    'dollar-variables',
    'declarations',
    'at-rules',
    'rules',
  ],
  
  /**
   * order/properties-order
   * 指定属性的顺序
   * null: 不限制顺序（可在 strict 模式启用）
   */
  'order/properties-order': null,
  
  /**
   * order/properties-alphabetical-order
   * 要求属性按字母顺序排列
   * null: 不要求
   */
  'order/properties-alphabetical-order': null,
};
