/**
 * Less General 相关规则
 *
 * 包含通用规则（1条）
 * - 变量重复定义检查
 */

import type { Config } from 'stylelint';

const lessGeneralRules: Config['rules'] = {
  /**
   * @name less/no-duplicate-variables
   * @description 禁止重复的 Less 变量
   * @value true - 启用，禁止重复变量（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - @var: value1;
   * @example ❌ 错误示例：
   *  - @var: value1;
   *    @var: value2;                             (重复定义变量)
   */
  'less/no-duplicate-variables': true,
};

export default lessGeneralRules;
