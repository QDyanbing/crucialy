/**
 * Strict 空行要求规则
 *
 * 包含空行格式化规则（2条）
 * - 声明前空行
 * - 自定义属性前空行
 */

import type { Config } from 'stylelint';

export const spacingRules: Config['rules'] = {
  /**
   * declaration-empty-line-before
   * 声明前需要空行（提高可读性）
   *
   * 说明：在声明之间添加空行，使代码更易读
   * - 适用于多行规则块
   * - 单行规则块忽略
   *
   * 例外情况：
   * - first-nested：第一个声明
   * - after-comment：注释后的声明
   * - after-declaration：连续声明（同一组）
   *
   * ✅ 正确示例：
   * .a {
   *   color: red;
   *
   *   background: blue;
   * }
   *
   * ❌ 错误示例：
   * .a {
   *   color: red;
   *   background: blue;
   * }
   */
  'declaration-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'after-comment', 'after-declaration'],
      ignore: ['inside-single-line-block'],
    },
  ],

  /**
   * custom-property-empty-line-before
   * 自定义属性前需要空行
   *
   * 说明：CSS 变量通常定义在规则块开头，空行分隔更清晰
   *
   * 例外情况：
   * - after-custom-property：连续的自定义属性
   * - first-nested：第一个自定义属性
   *
   * ✅ 正确示例：
   * .a {
   *   --color: red;
   *   --bg: blue;
   *
   *   color: var(--color);
   * }
   *
   * ❌ 错误示例：
   * .a {
   *   color: red;
   *   --bg: blue; (自定义属性前缺少空行)
   * }
   */
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    },
  ],
};

