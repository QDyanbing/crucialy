/**
 * Font rules
 */

export const fontRules = {
  /**
   * font-family-name-quotes
   * 要求字体名称使用引号
   * always-where-recommended: 有空格或特殊字符时使用引号
   * ✅ font-family: 'Times New Roman', serif;
   * ✅ font-family: Arial, sans-serif;
   * ❌ font-family: Times New Roman, serif;
   */
  'font-family-name-quotes': 'always-where-recommended',
  
  /**
   * font-family-no-duplicate-names
   * 禁止重复的字体名称
   * ✅ font-family: Arial, sans-serif;
   * ❌ font-family: Arial, Arial, sans-serif;
   */
  'font-family-no-duplicate-names': true,
  
  /**
   * font-family-no-missing-generic-family-keyword
   * 禁止缺少通用字体族关键字（serif/sans-serif/monospace 等）
   * null: 不要求（Base 设为 null 以支持 iconfont 等特殊字体）
   * ✅ font-family: Arial, sans-serif; (null 时允许)
   * ✅ font-family: 'iconfont'; (null 时允许)
   */
  'font-family-no-missing-generic-family-keyword': null,
  
  /**
   * font-weight-notation
   * 指定 font-weight 的表示法
   * numeric: 使用数字 | named-where-possible: 尽可能使用命名
   * ✅ font-weight: 700;
   * ❌ font-weight: bold;
   * ignore: ['relative'] - bolder/lighter 例外
   */
  'font-weight-notation': ['numeric', { ignore: ['relative'] }],
  
};
