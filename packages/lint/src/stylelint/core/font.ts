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
   * @name font-family-name-quotes
   * @description 要求字体名称在必要时使用引号；包含空格的字体名必须加引号，通用字体族关键字不加引号
   * @value 'always-where-recommended' - 有空格或特殊字符时使用引号（推荐）
   * @value 'always-where-required' - 只在必须时使用引号（CSS 语法要求）
   * @value 'always-unless-keyword' - 除了通用字体族关键字外，所有字体名都要加引号（包括 Arial 等单词字体）
   * @example ✅ 正确示例（always-where-recommended）：
   *  - font-family: 'Times New Roman', serif;
   *  - font-family: Arial, sans-serif;
   *  - font-family: '微软雅黑', sans-serif;
   * @example ❌ 错误示例：
   *  - font-family: Times New Roman, serif;   (缺少引号)
   *  - font-family: Arial, sans-serif;        (假设配置为 always-unless-keyword 时，Arial 也需要引号)
   */
  'font-family-name-quotes': 'always-where-recommended',

  /**
   * @name font-family-no-duplicate-names
   * @description 禁止在 font-family 中出现重复的字体名；重复的字体名没有意义，通常是复制粘贴错误
   * @value true - 启用，禁止重复字体名
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - font-family: Arial, Helvetica, sans-serif;
   *  - font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
   * @example ❌ 错误示例：
   *  - font-family: Arial, Arial, sans-serif;                      (重复的 Arial)
   *  - font-family: 'PingFang SC', 'PingFang SC', sans-serif;      (重复的 PingFang SC)
   */
  'font-family-no-duplicate-names': true,

  /**
   * @name font-family-no-missing-generic-family-keyword
   * @description 要求 font-family 包含通用字体族关键字；Base 配置不限制，因为 iconfont 等图标字体不需要通用字体族
   * @value null - 不限制
   * @value true - 要求包含通用字体族（serif, sans-serif, monospace 等）
   * @example ✅ 正确示例（null 时）：
   *  - font-family: Arial, Helvetica, sans-serif;
   *  - font-family: 'iconfont';
   *  - font-family: 'My Custom Font';
   * @example ❌ 错误示例（假设配置为 true）：
   *  - font-family: Arial, Helvetica;         (缺少通用字体族 fallback)
   */
  'font-family-no-missing-generic-family-keyword': null,

  /**
   * @name font-weight-notation
   * @description 指定 font-weight 的表示法；数字形式提供更精确的字重控制，与设计稿中的字重值直接对应
   * @value 'numeric' - 数字形式（100, 200, ..., 900）
   * @value 'named' - 命名形式（normal, bold）
   * @secondary ignore: ['relative'] - 允许相对值（bolder, lighter）
   * @example ✅ 正确示例：
   *  - font-weight: 400;
   *  - font-weight: 700;
   *  - font-weight: bolder;
   * @example ❌ 错误示例：
   *  - font-weight: bold;                     (应使用 700)
   *  - font-weight: normal;                   (应使用 400)
   */
  'font-weight-notation': ['numeric', { ignore: ['relative'] }],
};
