/**
 * SCSS Block 相关规则
 *
 * 包含块相关规则（1条）
 */

import type { Config } from 'stylelint';

const scssBlockRules: Config['rules'] = {
  /**
   * @name scss/block-no-redundant-nesting
   * @description 禁止冗余的块嵌套
   * @value true - 启用，禁止冗余嵌套（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class {
   *      {
   *        color: red;
   *      }
   *    }                                         (外层块嵌套是冗余的)
   */
  'scss/block-no-redundant-nesting': true,
};

export default scssBlockRules;
