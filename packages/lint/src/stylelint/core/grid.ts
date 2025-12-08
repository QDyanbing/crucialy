/**
 * Grid 相关规则
 *
 * 包含 CSS Grid 相关规则（1条）
 * - 禁止无效的命名网格区域
 */

import type { Config } from 'stylelint';

const gridRules: Config['rules'] = {
  /**
   * @name named-grid-areas-no-invalid
   * @description 禁止使用无效的命名网格区域；grid-template-areas 必须形成完整的矩形，每行单元格数量相同，相同名称的单元格必须相邻
   * @value true - 启用，禁止无效的网格区域
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - grid-template-areas:
   *      'header header'
   *      'sidebar content'
   *      'footer footer';
   *  - grid-template-areas:
   *      'header header'
   *      'sidebar .'
   *      'footer footer';
   * @example ❌ 错误示例：
   *  - grid-template-areas:
   *      'header header'
   *      'sidebar';                            (列数不一致)
   *  - grid-template-areas:
   *      'header sidebar header'
   *      'content content content';            (header 区域不连续)
   */
  'named-grid-areas-no-invalid': true,
};

export default gridRules;
