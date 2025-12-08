/**
 * SCSS Map 相关规则
 *
 * 包含 Map 相关规则（1条）
 */

import type { Config } from 'stylelint';

export const scssMapRules: Config['rules'] = {
  /**
   * @name scss/map-keys-quotes
   * @description Map 键是否使用引号
   * @value 'always' - 总是使用引号（Base 配置）
   * @value 'never' - 不使用引号
   * @example ✅ 正确示例：
   *  - $map: ('key': value);
   * @example ❌ 错误示例：
   *  - $map: (key: value);                       (键应使用引号)
   */
  'scss/map-keys-quotes': 'always',
};

