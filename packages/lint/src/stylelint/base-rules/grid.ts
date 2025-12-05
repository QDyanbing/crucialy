/**
 * Grid 相关规则
 *
 * 包含 CSS Grid 相关规则（1条）
 * - 禁止无效的命名网格区域
 */

import type { Config } from 'stylelint';

export const gridRules: Config['rules'] = {
  /**
   * named-grid-areas-no-invalid
   * 禁止使用无效的命名网格区域
   *
   * 说明：CSS Grid 的 grid-template-areas 属性必须形成完整的矩形
   * - 每一行必须有相同数量的单元格
   * - 命名区域必须形成矩形（不能是 L 形或其他形状）
   * - 相同名称的单元格必须相邻
   *
   * 无效的网格区域定义会导致布局失效
   *
   * ✅ 正确示例：
   * grid-template-areas:
   *   'header header'
   *   'sidebar content'
   *   'footer footer';
   *
   * ✅ 正确示例（使用点表示空单元格）：
   * grid-template-areas:
   *   'header header'
   *   'sidebar .'
   *   'footer footer';
   *
   * ❌ 错误示例（列数不一致）：
   * grid-template-areas:
   *   'header header'
   *   'sidebar';
   *
   * ❌ 错误示例（区域不连续）：
   * grid-template-areas:
   *   'header sidebar header'
   *   'content content content';
   */
  'named-grid-areas-no-invalid': true,
};

