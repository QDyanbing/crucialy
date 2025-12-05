/**
 * Comment 相关规则
 *
 * 包含注释格式相关规则（5条）
 * - 注释前空行
 * - 禁止空注释
 * - 注释内容模式
 * - 注释内部空格
 * - 注释词黑名单
 */

import type { Config } from 'stylelint';

export const commentRules: Config['rules'] = {
  /**
   * comment-empty-line-before
   * 要求注释前有空行
   *
   * 说明：在注释前添加空行可以提高代码可读性
   * - 将注释与代码逻辑分隔开
   * - 让注释更醒目易读
   *
   * 例外情况：
   * - first-nested：作为块中第一个嵌套元素的注释
   * - stylelint-commands：Stylelint 指令注释（如 stylelint-disable）
   *
   * ✅ 正确示例：
   * a { color: red; }
   *
   * /* 这是一个注释 *\/
   * b { color: blue; }
   *
   * ✅ 正确示例（first-nested 例外）：
   * a {
   *   /* 第一个嵌套元素 *\/
   *   color: red;
   * }
   *
   * ❌ 错误示例：
   * a { color: red; }
   * /* 缺少空行 *\/
   * b { color: blue; }
   */
  'comment-empty-line-before': [
    'always',
    { except: ['first-nested'], ignore: ['stylelint-commands'] },
  ],

  /**
   * comment-no-empty
   * 禁止空注释
   *
   * 说明：空注释没有任何意义，应该删除
   * - 可能是删除注释内容后遗留的
   * - 会增加文件大小，降低可读性
   *
   * ✅ 正确示例：/* 这是有内容的注释 *\/
   * ❌ 错误示例：/* *\/ (完全空白)
   * ❌ 错误示例：/*  *\/ (只有空格)
   */
  'comment-no-empty': true,

  /**
   * comment-pattern
   * 指定注释内容必须匹配的模式（正则表达式）
   *
   * 说明：可以用来强制注释格式或内容规范
   * - null：不限制注释内容
   * - 正则表达式：注释必须匹配该模式
   *
   * Base 配置不限制，常见使用场景：
   * - 要求注释以大写字母开头
   * - 要求 TODO 注释包含负责人信息
   * - 限制注释语言（如只允许英文）
   *
   * 配置示例：'^[A-Z]' (注释必须以大写字母开头)
   * ✅ 正确示例（null 时）：/* 任何内容 *\/
   * ✅ 正确示例（配置后）：/* This is a comment *\/
   * ❌ 错误示例（配置 ^[A-Z] 后）：/* this is wrong *\/
   */
  'comment-pattern': null,

  /**
   * comment-whitespace-inside
   * 要求注释内部开头和结尾处有空格
   *
   * 说明：注释星号后加空格，提高可读性
   * - always：/* 空格content空格 *\/
   * - never：/*content*\/
   *
   * Base 配置使用 always（更易读）
   *
   * ✅ 正确示例：/* comment *\/
   * ✅ 正确示例：/* multi line
   *                   comment *\/
   * ❌ 错误示例：/*comment*\/
   * ❌ 错误示例：/*comment *\/ (缺少开头空格)
   */
  'comment-whitespace-inside': 'always',

  /**
   * comment-word-disallowed-list
   * 指定注释中禁止使用的词语列表
   *
   * 说明：禁止某些词语出现在注释中
   * - null：不限制
   * - 数组：禁止的词语列表（支持正则）
   *
   * Base 配置不限制，常见使用场景：
   * - 禁止 TODO 注释进入生产代码
   * - 禁止不文明用语
   * - 禁止敏感信息关键词
   *
   * 配置示例：['/^TODO:/'] (禁止 TODO: 开头的注释)
   * ✅ 正确示例（null 时）：/* TODO: fix this *\/
   * ❌ 错误示例（配置后）：/* TODO: fix this *\/
   */
  'comment-word-disallowed-list': null,
};
