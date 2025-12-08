/**
 * SCSS %-placeholder 相关规则
 *
 * 包含占位符相关规则（1条）
 */

import type { Config } from 'stylelint';

export const scssPercentPlaceholderRules: Config['rules'] = {
  /**
   * @name scss/percent-placeholder-pattern
   * @description 占位符命名模式；强制使用 kebab-case
   * @value regex - 正则表达式字符串（Base 配置为 kebab-case）
   * @example ✅ 正确示例：
   *  - %button-style { }
   *  - %clearfix { }
   * @example ❌ 错误示例：
   *  - %buttonStyle { }                          (应为 kebab-case)
   *  - %ButtonStyle { }                          (应为小写)
   */
  'scss/percent-placeholder-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
};

