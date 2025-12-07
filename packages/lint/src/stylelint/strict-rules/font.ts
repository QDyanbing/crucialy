/**
 * Strict 字体相关规则
 *
 * 覆盖字体相关规则（1条）
 * - 要求字体族必须包含通用字体族关键字
 */

import type { Config } from 'stylelint';

export const fontRules: Config['rules'] = {
  /**
   * @name font-family-no-missing-generic-family-keyword
   * @description 要求 font-family 包含通用字体族关键字；Strict 模式强制要求，确保字体有 fallback，提高兼容性
   * @value true - 要求包含通用字体族（serif, sans-serif, monospace 等）（Strict 配置，覆盖 Base 的 null）
   * @value false - 不要求
   * @example ✅ 正确示例：
   *  - font-family: Arial, Helvetica, sans-serif;
   *  - font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
   * @example ❌ 错误示例：
   *  - font-family: Arial, Helvetica;         (缺少通用字体族 fallback)
   *  - font-family: 'My Custom Font';         (缺少通用字体族 fallback)
   */
  'font-family-no-missing-generic-family-keyword': true,
};
