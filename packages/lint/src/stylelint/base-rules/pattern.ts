/**
 * Naming Pattern 命名模式规则
 *
 * 包含各种命名模式规则（3条）
 * - container 名称模式（CSS Container Queries）
 * - 自定义 media 名称模式
 * - CSS layer 名称模式
 */

import type { Config } from 'stylelint';

export const patternRules: Config['rules'] = {
  /**
   * @name container-name-pattern
   * @description 指定容器名称的命名模式（CSS Container Queries）；规范 CSS Container Queries 中容器名称的命名风格
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^[a-z]+(-[a-z]+)*$' 强制 kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - \@container sidebar (width > 400px) { }
   * @example ❌ 错误示例（假设配置为 '^[a-z]+(-[a-z]+)*$'）：
   *  - \@container cardWrapper (width > 300px) { }  (不是 kebab-case，应使用 card-wrapper)
   */
  'container-name-pattern': [null],

  /**
   * @name custom-media-pattern
   * @description 指定自定义 media query 的命名模式；规范自定义媒体查询名称的命名风格
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^--[a-z]+(-[a-z]+)*$' 强制 --kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - \@custom-media --small (width < 768px);
   *    \@media (--small) { }
   * @example ❌ 错误示例（假设配置为 '^--[a-z]+(-[a-z]+)*$'）：
   *  - \@custom-media --mobileScreen (width < 480px);  (不是 kebab-case，应使用 --mobile-screen)
   */
  'custom-media-pattern': [null],

  /**
   * @name layer-name-pattern
   * @description 指定 CSS layer 的命名模式；规范 CSS \@layer 层级名称的命名风格，CSS layer 用于控制样式的层叠优先级
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^[a-z]+(-[a-z]+)*$' 强制 kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - \@layer base, components, utilities;
   *    \@layer components { ... }
   * @example ❌ 错误示例（假设配置为 '^[a-z]+(-[a-z]+)*$'）：
   *  - \@layer baseReset, componentStyles;   (不是 kebab-case，应使用 base-reset, component-styles)
   */
  'layer-name-pattern': [null],
};
