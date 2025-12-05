/**
 * String 相关规则
 *
 * 包含字符串格式相关规则（1条）
 * - 禁止字符串中包含换行符
 */

import type { Config } from 'stylelint';

export const stringRules: Config['rules'] = {
  /**
   * string-no-newline
   * 禁止字符串值中包含换行符
   *
   * 说明：CSS 字符串值中不应该包含未转义的换行符
   * - 字符串必须在同一行，或使用转义的换行符（\A 或 \00000A）
   * - 未转义的换行符会导致 CSS 语法错误
   * - 如果需要多行文本，应该使用转义换行符或 white-space 属性
   *
   * 常见使用场景：
   * - content 属性中的文本内容
   * - 自定义属性（CSS 变量）的字符串值
   *
   * ✅ 正确示例：content: 'hello world';
   * ✅ 正确示例：content: 'hello\Aworld'; (使用转义换行符)
   * ✅ 正确示例：--text: 'single line';
   * ❌ 错误示例：content: 'hello
   *     world'; (包含未转义的换行符)
   * ❌ 错误示例：--text: 'multi
   *     line'; (包含未转义的换行符)
   */
  'string-no-newline': true,
};

