/**
 * Strict 自定义属性相关规则
 *
 * 覆盖自定义属性相关规则（2条）
 * - 更严格的命名规范（kebab-case）
 * - 自定义属性前需要空行
 */

import type { Config } from 'stylelint';

export const customPropertyRules: Config['rules'] = {
  /**
   * @name custom-property-pattern
   * @description 指定自定义属性（CSS 变量）的命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
   * @secondary message: 'Expected custom property to be kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - --my-color: red;
   *  - --primary-color: #000;
   * @example ❌ 错误示例：
   *  - --myColor: red;                        (应为 kebab-case：--my-color)
   *  - --PrimaryColor: #000;                  (应为小写 kebab-case)
   */
  'custom-property-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom property to be kebab-case',
    },
  ],

  /**
   * @name custom-property-empty-line-before
   * @description 要求自定义属性前有空行；Strict 模式总是要求空行，提高可读性
   * @value 'always' - 总是要求空行（Strict 配置，覆盖 Base 的 null）
   * @value 'never' - 禁止空行
   * @secondary except: ['after-custom-property', 'first-nested'] - 连续自定义属性之间或第一个嵌套属性前不需要空行
   * @secondary ignore: ['after-comment', 'inside-single-line-block'] - 注释后或单行块内可以不加空行
   * @example ✅ 正确示例：
   *  - :root {
   *      --color: red;
   *
   *      --size: 10px;
   *    }
   * @example ❌ 错误示例：
   *  - :root {
   *      --color: red;
   *      --size: 10px;
   *    }                                      (缺少空行)
   */
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    },
  ],
};
