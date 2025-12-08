/**
 * String 相关规则
 *
 * 包含字符串格式相关规则（1条）
 * - 禁止字符串中包含换行符
 */

import type { Config } from 'stylelint';

const stringRules: Config['rules'] = {
  /**
   * @name string-no-newline
   * @description 禁止字符串值中包含换行符；CSS 字符串值中不应该包含未转义的换行符，如果需要多行文本应使用转义换行符（\A 或 \00000A）或 white-space 属性
   * @value true - 启用，禁止未转义的换行符
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - content: 'hello world';
   *  - content: 'hello\Aworld';
   *  - --text: 'single line';
   * @example ❌ 错误示例：
   *  - content: 'hello\nworld';               (包含未转义的换行符)
   *  - --text: 'multi\nline';                 (包含未转义的换行符)
   */
  'string-no-newline': true,
};

export default stringRules;
