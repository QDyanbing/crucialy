/**
 * At-rule 相关规则
 * 
 * 包含 @规则相关规则（10条）
 * - @规则验证（未知、已弃用）
 * - vendor prefix
 * - 空行要求
 * - @规则 descriptor 验证
 * - 白名单/黑名单
 */

import type { Config } from 'stylelint';

export const atRuleRules: Config['rules'] = {
  /**
   * at-rule-no-unknown
   * 禁止未知的 @规则
   * ✅ @media {}
   * ✅ @import ''
   * ❌ @unknown-rule {}
   */
  'at-rule-no-unknown': true,
  
  /**
   * at-rule-no-deprecated
   * 禁止已弃用的 @规则
   * ✅ @media {}
   * ❌ @document {} (已弃用)
   */
  'at-rule-no-deprecated': true,
  
  /**
   * at-rule-no-vendor-prefix
   * 禁止 @规则使用 vendor prefix
   * ✅ @keyframes {}
   * ❌ @-webkit-keyframes {}
   */
  'at-rule-no-vendor-prefix': true,
  
  /**
   * at-rule-allowed-list
   * @规则白名单
   * null: 允许所有
   * 例: ['media', 'import'] - 只允许这些
   */
  'at-rule-allowed-list': null,
  
  /**
   * at-rule-disallowed-list
   * @规则黑名单
   * null: 不禁止任何
   * 例: ['extend'] - 禁止 @extend
   */
  'at-rule-disallowed-list': null,
  
  /**
   * at-rule-empty-line-before
   * @规则前需要空行
   * always: 总是需要
   * except: 例外情况
   * - blockless-after-same-name-blockless: 同名无块 @规则后
   * - first-nested: 第一个嵌套时
   * ignore: ['after-comment'] - 注释后忽略
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    },
  ],
  
  /**
   * at-rule-property-required-list
   * @规则必需的属性列表
   * null: 不限制
   * 例: { 'font-face': ['font-family', 'src'] }
   */
  'at-rule-property-required-list': null,
  
  /**
   * at-rule-prelude-no-invalid
   * 禁止无效的 @规则 prelude
   * ✅ @media (width > 600px) {}
   * ❌ @media (width >>> 600px) {}
   */
  'at-rule-prelude-no-invalid': true,
  
  /**
   * at-rule-descriptor-no-unknown
   * 禁止未知的 @规则 descriptor（如 @font-face 中的属性）
   * ✅ @font-face { font-family: ''; }
   * ❌ @font-face { unknown-descriptor: ''; }
   */
  'at-rule-descriptor-no-unknown': true,
  
  /**
   * at-rule-descriptor-value-no-unknown
   * 禁止未知的 @规则 descriptor 值
   * ✅ @font-face { font-display: swap; }
   * ❌ @font-face { font-display: unknown; }
   */
  'at-rule-descriptor-value-no-unknown': true,
  
};
