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
   * container-name-pattern
   * 指定容器名称的命名模式（CSS Container Queries）
   *
   * 说明：规范 CSS Container Queries 中容器名称的命名风格
   * - null：不限制命名
   * - 正则表达式：容器名称必须匹配该模式
   *
   * Base 配置不限制，常见使用场景：
   * - kebab-case：sidebar-container, card-wrapper
   * - 带前缀：cq-sidebar, container-card
   *
   * 配置示例：'^[a-z]+(-[a-z]+)*$' (强制 kebab-case)
   * ✅ 正确示例（null 时）：
   * @container sidebar (width > 400px) { }
   *
   * ✅ 正确示例（kebab-case 配置后）：
   * @container card-wrapper (width > 300px) { }
   *
   * ❌ 错误示例（kebab-case 配置后）：
   * @container cardWrapper (width > 300px) { }
   */
  'container-name-pattern': null,

  /**
   * custom-media-pattern
   * 指定自定义 media query 的命名模式
   *
   * 说明：规范自定义媒体查询名称的命名风格
   * - null：不限制命名
   * - 正则表达式：自定义 media 名称必须匹配该模式
   *
   * 自定义 media 语法：@custom-media --name (条件);
   *
   * Base 配置不限制，常见使用场景：
   * - 双横线前缀：--small-screen, --mobile
   * - kebab-case：保持连字符命名风格
   *
   * 配置示例：'^--[a-z]+(-[a-z]+)*$' (强制 --kebab-case)
   * ✅ 正确示例（null 时）：
   * @custom-media --small (width < 768px);
   * @media (--small) { }
   *
   * ✅ 正确示例（kebab-case 配置后）：
   * @custom-media --mobile-screen (width < 480px);
   *
   * ❌ 错误示例（kebab-case 配置后）：
   * @custom-media --mobileScreen (width < 480px);
   */
  'custom-media-pattern': null,

  /**
   * layer-name-pattern
   * 指定 CSS layer 的命名模式
   *
   * 说明：规范 CSS @layer 层级名称的命名风格
   * - null：不限制命名
   * - 正则表达式：layer 名称必须匹配该模式
   *
   * CSS layer 用于控制样式的层叠优先级
   *
   * Base 配置不限制，常见使用场景：
   * - kebab-case：reset, base, components
   * - 带命名空间：theme.colors, layout.grid
   *
   * 配置示例：'^[a-z]+(-[a-z]+)*$' (强制 kebab-case)
   * ✅ 正确示例（null 时）：
   * @layer base, components, utilities;
   * @layer components { ... }
   *
   * ✅ 正确示例（kebab-case 配置后）：
   * @layer base-reset, component-styles;
   *
   * ❌ 错误示例（kebab-case 配置后）：
   * @layer baseReset, componentStyles;
   */
  'layer-name-pattern': null,
};
