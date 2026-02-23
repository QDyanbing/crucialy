/**
 * Comment 相关规则
 * @module @crucialy/lint/stylelint/core/comment
 *
 * 包含注释格式相关规则（5条）
 * - 注释前空行：改善代码结构
 * - 禁止空注释：避免无用注释
 * - 注释内容模式：统一注释格式
 * - 注释内部空格：规范注释风格
 * - 注释词黑名单：禁止特定词语
 */

import type { Config } from 'stylelint';

const commentRules: Config['rules'] = {
  /**
   * @name comment-empty-line-before
   * @description 要求注释前有空行，提高代码可读性，将注释与代码逻辑分隔开
   * @value 'always' - 总是要求空行
   * @value 'never' - 不要求空行
   * @secondary except: ['first-nested'] - 作为块中第一个嵌套元素的注释不需要空行
   * @secondary ignore: ['stylelint-commands'] - 忽略 Stylelint 指令注释（如 stylelint-disable）
   * @example ✅ 正确示例：
   *  - a { color: red; }
   *
   *    /* 这是一个注释 *\/
   *    b { color: blue; }
   *  - a {
   *      /* 第一个嵌套元素 *\/
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - a { color: red; }
   *    /* 缺少空行 *\/
   *    b { color: blue; }                     (注释前缺少空行)
   */
  'comment-empty-line-before': [
    'always',
    { except: ['first-nested'], ignore: ['stylelint-commands'] },
  ],

  /**
   * @name comment-no-empty
   * @description 禁止空注释；空注释没有任何意义，应该删除
   * @value true - 启用，禁止空注释
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - /* 这是有内容的注释 *\/
   * @example ❌ 错误示例：
   *  - /* *\/                                  (完全空白)
   *  - /*  *\/                                 (只有空格)
   */
  'comment-no-empty': true,

  /**
   * @name comment-pattern
   * @description 指定注释内容必须匹配的模式（正则表达式）；可以用来强制注释格式或内容规范
   * @value null - 不限制注释内容
   * @value regex - 正则表达式字符串，注释必须匹配该模式（如：'^[A-Z]'）
   * @example ✅ 正确示例（null 时）：
   *  - /* 任何内容 *\/
   * @example ❌ 错误示例（假设配置为 '^[A-Z]'）：
   *  - /* this is wrong *\/                   (应以大写字母开头)
   */
  'comment-pattern': null,

  /**
   * @name comment-whitespace-inside
   * @description 要求注释内部开头和结尾处有空格；注释星号后加空格，提高可读性
   * @value 'always' - 要求空格（如：/* 空格content空格 *\/）
   * @value 'never' - 不要求空格（如：/*content*\/）
   * @example ✅ 正确示例：
   *  - /* comment *\/
   *  - /* multi line
   *       comment *\/
   * @example ❌ 错误示例：
   *  - /*comment*\/                           (缺少空格)
   *  - /*comment *\/                          (缺少开头空格)
   */
  'comment-whitespace-inside': 'always',

  /**
   * @name comment-word-disallowed-list
   * @description 指定注释中禁止使用的词语列表；禁止某些词语出现在注释中
   * @value null - 不限制
   * @value array - 字符串数组，禁止的词语列表（支持正则，如：['/^TODO:/']）
   * @example ✅ 正确示例（null 时）：
   *  - /* TODO: fix this *\/
   *  - /* 任何内容 *\/
   * @example ❌ 错误示例（假设配置为 ['/^TODO:/']）：
   *  - /* TODO: fix this *\/                  (禁止使用 TODO:)
   */
  'comment-word-disallowed-list': null,
};

export default commentRules;
