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
   * 注释前需要空行
   * always: 总是需要
   * except: ['first-nested'] - 第一个嵌套时例外
   * ignore: ['stylelint-commands'] - stylelint 命令注释例外
   * ✅ 
   * a {}
   * 
   * /* comment *\/
   * b {}
   */
  'comment-empty-line-before': [
    'always',
    { except: ['first-nested'], ignore: ['stylelint-commands'] },
  ],
  
  /**
   * comment-no-empty
   * 禁止空注释
   * ✅ /* comment *\/
   * ❌ /* *\/
   */
  'comment-no-empty': true,
  
  /**
   * comment-pattern
   * 注释内容模式（正则）
   * null: 不限制
   * 例: '^TODO:' - 注释必须以 TODO: 开头
   */
  'comment-pattern': null,
  
  /**
   * comment-whitespace-inside
   * 注释内部需要空格
   * always: /*空格comment空格*\/
   * ✅ /* comment *\/
   * ❌ /*comment*\/
   */
  'comment-whitespace-inside': 'always',
  
  /**
   * comment-word-disallowed-list
   * 注释词黑名单
   * null: 不限制
   * 例: ['/^TODO:/'] - 禁止 TODO 注释
   */
  'comment-word-disallowed-list': null,
  
};
