/**
 * Strict Pattern 命名模式规则
 *
 * 覆盖命名模式规则（1条）
 * - 自定义媒体查询名称使用 kebab-case
 */

import type { Config } from 'stylelint';

export const patternRules: Config['rules'] = {
  /**
   * @name custom-media-pattern
   * @description 指定自定义 media query 的命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
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
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom media query name to be kebab-case',
    },
  ],
};
