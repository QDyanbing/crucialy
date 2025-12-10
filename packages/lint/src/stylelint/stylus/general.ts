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
   * @description Hash 对象属性逗号要求；统一代码风格，要求使用逗号
   * @value 'always' - 要求使用逗号
   * @value 'never' - 禁止使用逗号
   * @secondary trailing: ["always", "never"] - 控制最后一个属性后的逗号
   * @example ✅ 正确示例：
   *  - $hash = {
   *      key1: value1,
   *      key2: value2
   *    }
   * @example ❌ 错误示例：
   *  - $hash = {
   *      key1: value1
   *      key2: value2  (缺少逗号)
   *    }
   */
  'stylus/hash-object-property-comma': 'always',

  /**
   * @name stylus/indentation
   * @description 缩进规范；统一代码风格，使用 2 空格缩进（与项目标准一致）
   * @value <number> - 使用指定数量的空格缩进（如 2, 4）
   * @value 'tab' - 使用 Tab 缩进
   * @value null - 不限制
   * @secondary baseIndentLevel: <number> | "auto" - 基础缩进级别
   * @secondary except: ["block", "value", "param"] - 排除的情况
   * @secondary ignore: ["value", "param", "inside-parens"] - 忽略的情况
   * @secondary indentInsideParens: "twice" | "once-at-root-twice-in-block" - 括号内缩进
   * @secondary indentClosingBrace: <boolean> - 闭合大括号缩进
   * @example ✅ 正确示例：
   *  - .class
   *      color: red
   *      font-size: 14px
   * @example ❌ 错误示例：
   *  - .class
   *    color: red  (缩进不正确，应为 2 空格)
   */
  'stylus/indentation': 2,

  /**
   * @name stylus/pythonic
   * @description Pythonic 风格（使用缩进而非大括号）；统一代码风格，禁止使用 Pythonic 风格，必须使用大括号
   * @value 'never' - 禁止使用 Pythonic 风格（必须使用大括号）
   * @value 'always' - 强制使用 Pythonic 风格（不使用大括号）
   * @value null - 不限制
   * @secondary atblock: ["always", "never"] - 控制 @规则块的 Pythonic 风格
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class
   *      color: red  (应使用大括号，禁止 Pythonic 风格)
   */
  'stylus/pythonic': 'never',

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
   * @secondary ignore: ["empty-lines"] - 忽略空行的行尾空白
   * @example ✅ 正确示例：
   *  - color: red;
   * @example ❌ 错误示例（注意行尾有空格，用 · 表示）：
   *  - color: red;···  ← 行尾不应有空白，应删除末尾空格
   */
  'stylus/no-eol-whitespace': true,

  /**
   * @name stylus/index
   * @description Index 规则（Stylus 特有）；可能用于检查 index() 函数的使用格式
   * @value null - 不限制（当前未启用，规则作用不明确）
   * @value true - 启用检查
   * @note 此规则的具体作用在 stylelint-stylus 文档中未明确说明，可能与 Stylus 的 index() 函数相关
   */
  'stylus/index': null,
};

export default stylusGeneralRules;
