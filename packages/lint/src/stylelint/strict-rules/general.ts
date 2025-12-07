/**
 * Strict 通用规则
 *
 * 覆盖通用规则（1条）
 * - 禁止降序特异性
 */

import type { Config } from 'stylelint';

export const generalRules: Config['rules'] = {
  /**
   * @name no-descending-specificity
   * @description 禁止低特异性选择器覆盖高特异性选择器；Strict 模式强制检查，防止样式覆盖错误
   * @value true - 检查并报错（Strict 配置，覆盖 Base 的 null）
   * @value null - 不检查
   * @example ✅ 正确示例：
   *  - #id .class { color: red; }
   *    .class { color: blue; }
   *  - .a .b { color: red; }
   *    .a { color: blue; }
   * @example ❌ 错误示例：
   *  - #id .class { color: red; }
   *    .class { color: blue; }                (特异性降低：1-1-0 -> 0-1-0)
   *  - .a.b { color: red; }
   *    .a { color: blue; }                    (特异性降低：0-2-0 -> 0-1-0)
   */
  'no-descending-specificity': [true],
};
