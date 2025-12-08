/**
 * Custom Property 相关规则
 *
 * 包含 CSS 自定义属性（CSS 变量）相关规则（3条）
 * - 命名模式（Strict 模式强制 kebab-case）
 * - 空行要求
 * - 必须用 var() 包裹
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

  /**
   * @name custom-property-empty-line-before
   * @description 要求或禁止自定义属性前有空行；控制自定义属性前的空行，提高可读性
   * @value null - 不限制
   * @value 'always' - 总是要求空行
   * @value 'never' - 禁止空行
   * @example ✅ 正确示例（null 时）：
   *  - :root {
   *      --color: red;
   *      --size: 10px;
   *    }
   *  - :root {
   *      --color: red;
   *
   *      --size: 10px;
   *    }
   * @example ❌ 错误示例（假设配置为 'always'）：
   *  - :root {
   *      --color: red;
   *      --size: 10px;
   *    }                                      (缺少空行)
   */
  'custom-property-empty-line-before': null,

  /**
   * @name custom-property-no-missing-var-function
   * @description 禁止直接使用自定义属性，必须用 var() 包裹；CSS 自定义属性的值必须通过 var() 函数访问，直接使用是无效的 CSS 语法
   * @value true - 启用，禁止缺少 var() 函数
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - :root { --primary: #000; }
   *    .button { color: var(--primary); }
   *  - .button { color: var(--primary, #000); }
   * @example ❌ 错误示例：
   *  - .button { color: --primary; }          (缺少 var()，应使用 var(--primary))
   *  - .button { background: --bg-color; }    (应使用 var(--bg-color))
   */
  'custom-property-no-missing-var-function': true,
};
