/**
 * Naming Pattern 命名模式规则
 *
 * 包含各种命名模式规则（3条）
 * - @layer 名称使用 kebab-case（Strict 模式）
 * - container 名称使用 kebab-case（Strict 模式）
 * - 自定义媒体查询名称使用 kebab-case（Strict 模式）
 */

import type { Config } from 'stylelint';

export const patternRules: Config['rules'] = {
  /**
   * @name layer-name-pattern
   * @description 指定 @layer 的命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
   * @secondary message: '@layer 名称请使用 kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - \@layer base, components, utilities;
   *  - \@layer base-reset { }
   *  - \@layer component-styles { }
   * @example ❌ 错误示例：
   *  - \@layer baseReset { }                     (不是 kebab-case，应使用 base-reset)
   *  - \@layer ComponentStyles { }               (不是 kebab-case，应为小写)
   */
  'layer-name-pattern': [
    '^[a-z0-9]+(?:-[a-z0-9]+)*$',
    {
      message: '@layer 名称请使用 kebab-case',
    },
  ],

  /**
   * @name container-name-pattern
   * @description 指定 container 的命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
   * @secondary message: 'container-name 请使用 kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - \@container sidebar (width > 400px) { }
   *  - \@container card-wrapper (width > 300px) { }
   * @example ❌ 错误示例：
   *  - \@container cardWrapper (width > 300px) { }  (不是 kebab-case，应使用 card-wrapper)
   *  - \@container Sidebar (width > 400px) { }      (不是 kebab-case，应为小写)
   */
  'container-name-pattern': [
    '^[a-z0-9]+(?:-[a-z0-9]+)*$',
    {
      message: 'container-name 请使用 kebab-case',
    },
  ],

  /**
   * @name custom-media-pattern
   * @description 指定自定义 media query 的命名模式；Strict 模式强制使用 --kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 --kebab-case，覆盖 Base 的 null）
   * @secondary message: 'Expected custom media query name to be kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - \@custom-media --small-screen (width < 768px);
   *    \@media (--small-screen) { }
   *  - \@custom-media --large-viewport (width > 1200px);
   * @example ❌ 错误示例：
   *  - \@custom-media --mobileScreen (width < 480px);  (不是 kebab-case，应使用 --mobile-screen)
   *  - \@custom-media --LargeViewport (width > 1200px);  (不是 kebab-case，应为小写)
   */
  'custom-media-pattern': [
    '^--[a-z0-9]+(?:-[a-z0-9]+)*$',
    {
      message: 'Expected custom media query name to be kebab-case',
    },
  ],
};
