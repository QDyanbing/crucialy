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
   * 容器名称模式（CSS Container Queries）
   * null: 不限制
   */
  'container-name-pattern': null,
  
  /**
   * custom-media-pattern
   * 自定义 media 名称模式
   * null: 不限制
   */
  'custom-media-pattern': null,
  
  /**
   * layer-name-pattern
   * CSS layer 名称模式
   * null: 不限制
   */
  'layer-name-pattern': null,
  
};
