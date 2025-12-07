/**
 * Block 相关规则
 *
 * 包含代码块相关规则（2条）
 * - 禁止空块
 * - 禁止冗余嵌套
 */

import type { Config } from 'stylelint';

export const blockRules: Config['rules'] = {
  /**
   * @name block-no-empty
   * @description 禁止空的代码块；空块会增加 CSS 文件大小，且没有任何作用
   * @value true - 启用，禁止空块
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *  - a { display: block; padding: 10px; }
   * @example ❌ 错误示例：
   *  - a { }                                  (空块，应删除或填写样式)
   *  - .empty-class { }                       (空块，应删除或填写样式)
   */
  'block-no-empty': [true],

  /**
   * @name block-no-redundant-nested-style-rules
   * @description 禁止冗余的嵌套样式规则；在 CSS 嵌套中，单独的 & { } 嵌套不会改变选择器，纯属多余
   * @value true - 启用，禁止冗余嵌套
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - a {
   *      color: red;
   *    }
   *  - a {
   *      color: red;
   *      &:hover { color: blue; }
   *    }
   * @example ❌ 错误示例：
   *  - a {
   *      & {
   *        color: red;
   *      }
   *    }                                      (冗余嵌套，应直接写在父级)
   */
  'block-no-redundant-nested-style-rules': [true],
};
