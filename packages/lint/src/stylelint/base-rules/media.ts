/**
 * Media 相关规则
 * 
 * 包含媒体查询相关规则（10条）
 * - media feature 验证
 * - media feature 白名单/黑名单
 * - media feature range 表示法
 * - media type 验证
 */

import type { Config } from 'stylelint';

export const mediaRules: Config['rules'] = {
  /**
   * media-feature-name-no-unknown
   * 禁止未知的 media feature 名称
   * ✅ @media (width > 600px) {}
   * ❌ @media (unknown-feature: value) {}
   */
  'media-feature-name-no-unknown': true,
  
  /**
   * media-feature-name-no-vendor-prefix
   * 禁止 media feature 使用 vendor prefix
   * ✅ @media (min-width: 600px) {}
   * ❌ @media (-webkit-min-device-pixel-ratio: 2) {}
   */
  'media-feature-name-no-vendor-prefix': true,
  
  /**
   * media-feature-name-allowed-list
   * media feature 白名单
   * null: 允许所有
   */
  'media-feature-name-allowed-list': null,
  
  /**
   * media-feature-name-disallowed-list
   * media feature 黑名单
   * null: 不禁止任何
   */
  'media-feature-name-disallowed-list': null,
  
  /**
   * media-feature-name-unit-allowed-list
   * media feature 单位白名单
   * null: 允许所有单位
   */
  'media-feature-name-unit-allowed-list': null,
  
  /**
   * media-feature-name-value-allowed-list
   * media feature 值白名单
   * null: 允许所有值
   */
  'media-feature-name-value-allowed-list': null,
  
  /**
   * media-feature-name-value-no-unknown
   * 禁止未知的 media feature 值
   * ✅ @media (orientation: landscape) {}
   * ❌ @media (orientation: unknown) {}
   */
  'media-feature-name-value-no-unknown': true,
  
  /**
   * media-feature-range-notation
   * media feature range 表示法
   * context: 根据上下文 | prefix: (min-width: 600px)
   * ✅ @media (width >= 600px) {} (context)
   * ✅ @media (min-width: 600px) {} (context)
   */
  'media-feature-range-notation': 'context',
  
  /**
   * media-query-no-invalid
   * 禁止无效的 media query
   * ✅ @media (width > 600px) {}
   * ❌ @media (width >>600px) {}
   */
  'media-query-no-invalid': true,
  
  /**
   * media-type-no-deprecated
   * 禁止已弃用的 media type
   * ✅ @media screen {}
   * ❌ @media aural {} (已弃用)
   */
  'media-type-no-deprecated': true,
  
};
