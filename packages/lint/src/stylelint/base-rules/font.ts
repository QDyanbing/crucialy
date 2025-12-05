/**
 * Font 相关规则
 *
 * 包含字体族、字重等规则（4条）
 * - 字体名称引号
 * - 禁止重复字体名
 * - 通用字体族要求
 * - font-weight 表示法
 */

import type { Config } from 'stylelint';

export const fontRules: Config['rules'] = {
  /**
   * font-family-name-quotes
   * 要求字体名称在必要时使用引号
   *
   * 说明：规范字体名称的引号使用
   * - always-where-recommended：有空格或特殊字符时使用引号
   * - always-where-required：只在必须时使用引号
   * - always-unless-keyword：除了关键字外都用引号
   *
   * Base 配置使用 always-where-recommended（推荐做法）
   * - 包含空格的字体名必须加引号
   * - 通用字体族关键字不加引号（serif, sans-serif 等）
   *
   * ✅ 正确示例：
   * font-family: 'Times New Roman', serif;
   *
   * ✅ 正确示例：
   * font-family: Arial, sans-serif;
   *
   * ✅ 正确示例：
   * font-family: '微软雅黑', sans-serif;
   *
   * ❌ 错误示例：
   * font-family: Times New Roman, serif; (缺少引号)
   */
  'font-family-name-quotes': 'always-where-recommended',

  /**
   * font-family-no-duplicate-names
   * 禁止在 font-family 中出现重复的字体名
   *
   * 说明：font-family 列表中不应出现重复的字体
   * - 重复的字体名没有意义
   * - 通常是复制粘贴错误
   * - 会增加代码冗余
   *
   * ✅ 正确示例：
   * font-family: Arial, Helvetica, sans-serif;
   *
   * ✅ 正确示例：
   * font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
   *
   * ❌ 错误示例：
   * font-family: Arial, Arial, sans-serif;
   *
   * ❌ 错误示例：
   * font-family: 'PingFang SC', 'PingFang SC', sans-serif;
   */
  'font-family-no-duplicate-names': true,

  /**
   * font-family-no-missing-generic-family-keyword
   * 要求 font-family 包含通用字体族关键字
   *
   * 说明：font-family 应该以通用字体族结尾作为 fallback
   * - 通用字体族：serif, sans-serif, monospace, cursive, fantasy, system-ui
   * - 当所有指定字体都不可用时，使用通用字体族
   *
   * Base 配置设为 null 的原因：
   * - iconfont 等图标字体不需要通用字体族
   * - 某些特殊用途的字体（如艺术字体）可能不需要
   * - 允许更灵活的使用场景
   *
   * ✅ 正确示例（null 时）：
   * font-family: Arial, Helvetica, sans-serif;
   *
   * ✅ 正确示例（null 时，iconfont）：
   * font-family: 'iconfont';
   *
   * ✅ 正确示例（null 时）：
   * font-family: 'My Custom Font';
   *
   * ❌ 错误示例（如果配置为 true）：
   * font-family: Arial, Helvetica; (缺少通用字体族)
   */
  'font-family-no-missing-generic-family-keyword': null,

  /**
   * font-weight-notation
   * 指定 font-weight 的表示法
   *
   * 说明：font-weight 有两种表示方式：
   * - numeric：数字形式（100, 200, ..., 900）
   * - named：命名形式（normal, bold）
   *
   * Base 配置使用 numeric（数字）：
   * - 数字提供更精确的字重控制（100-900）
   * - 与设计稿中的字重值直接对应
   * - 避免 normal/bold 的歧义（不同字体定义不同）
   *
   * 例外情况：
   * - bolder/lighter（相对值）允许使用
   *
   * ✅ 正确示例：
   * font-weight: 400; (normal)
   *
   * ✅ 正确示例：
   * font-weight: 700; (bold)
   *
   * ✅ 正确示例（相对值例外）：
   * font-weight: bolder;
   *
   * ❌ 错误示例：
   * font-weight: bold; (应使用 700)
   *
   * ❌ 错误示例：
   * font-weight: normal; (应使用 400)
   */
  'font-weight-notation': ['numeric', { ignore: ['relative'] }],
};
