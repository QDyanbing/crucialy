/**
 * Strict 自定义属性相关规则
 *
 * 覆盖自定义属性相关规则（1条）
 * - 更严格的命名规范（kebab-case）
 */

import type { Config } from 'stylelint';

export const customPropertyRules: Config['rules'] = {
  /**
   * @name custom-property-pattern
   * @description 指定自定义属性（CSS 变量）的命名模式；Strict 模式强制使用 --kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 --kebab-case，覆盖 Base 的 null）
   * @secondary message: 'Expected custom property to be kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - --my-color: red;
   *  - --primary-color: #000;
   * @example ❌ 错误示例：
   *  - --myColor: red;                        (应为 kebab-case：--my-color)
   *  - --PrimaryColor: #000;                  (应为小写 kebab-case)
   */
  'custom-property-pattern': [
    '^--[a-z0-9]+(?:-[a-z0-9]+)*$',
    {
      message: 'Expected custom property to be kebab-case',
    },
  ],
};
