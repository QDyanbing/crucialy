/**
 * Strict Media 相关规则
 *
 * 覆盖 Media 相关规则（1条）
 * - Media feature range 语法统一
 */

import type { Config } from 'stylelint';

export const mediaRules: Config['rules'] = {
  /**
   * @name media-feature-range-notation
   * @description 指定 media feature range 的表示法；Strict 模式统一使用现代范围上下文语法
   * @value 'context' - 使用范围上下文语法（Strict 配置，覆盖 Base 的 null）
   * @value 'prefix' - 使用前缀语法（min-/max-）
   * @example ✅ 正确示例：
   *  - @media (width >= 768px) { }
   *  - @media (width <= 1024px) { }
   *  - @media (width > 600px) and (width < 1200px) { }
   * @example ❌ 错误示例：
   *  - @media (min-width: 768px) { }         (应使用 width >= 768px)
   *  - @media (max-width: 1024px) { }        (应使用 width <= 1024px)
   */
  'media-feature-range-notation': 'context',
};
