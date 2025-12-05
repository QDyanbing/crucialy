/**
 * Strict Pattern 命名模式规则
 *
 * 覆盖命名模式规则（1条）
 */

import type { Config } from 'stylelint';

export const patternRules: Config['rules'] = {
  /**
   * custom-media-pattern
   * 自定义媒体查询名称使用 kebab-case
   */
  'custom-media-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom media query name to be kebab-case',
    },
  ],
};

