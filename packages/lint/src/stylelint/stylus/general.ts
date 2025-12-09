/**
 * Stylus General 相关规则
 *
 * 包含通用规则（6条）
 * - Hash 对象属性逗号
 * - 缩进规范
 * - Pythonic 风格
 * - 禁止 @require
 * - 禁止行尾空白
 * - Index 规则
 */

import type { Config } from 'stylelint';

const stylusGeneralRules: Config['rules'] = {
  /**
   * @name stylus/hash-object-property-comma
   * @description Hash 对象属性逗号要求
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/hash-object-property-comma': null,

  /**
   * @name stylus/indentation
   * @description 缩进规范
   * @value null - 不限制
   * @value number - 缩进空格数
   * @example ✅ 正确示例（假设配置为 2）：
   *  - .class
   *      color: red
   * @example ❌ 错误示例（假设配置为 2）：
   *  - .class
   *    color: red  (缩进不正确)
   */
  'stylus/indentation': null,

  /**
   * @name stylus/pythonic
   * @description Pythonic 风格（使用缩进而非大括号）
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/pythonic': null,

  /**
   * @name stylus/no-at-require
   * @description 禁止使用 @require
   * @value true - 启用，禁止 @require
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - @import 'file.styl';
   * @example ❌ 错误示例：
   *  - @require 'file.styl';  (应使用 @import)
   */
  'stylus/no-at-require': true,

  /**
   * @name stylus/no-eol-whitespace
   * @description 禁止行尾空白
   * @value true - 启用，禁止行尾空白
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例：
   *  - color: red;   (行尾有空白)
   */
  'stylus/no-eol-whitespace': true,

  /**
   * @name stylus/index
   * @description Index 规则（Stylus 特有）
   * @value null - 不限制
   * @value true - 启用检查
   */
  'stylus/index': null,
};

export default stylusGeneralRules;
