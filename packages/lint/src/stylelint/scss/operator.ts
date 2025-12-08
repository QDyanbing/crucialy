/**
 * SCSS Operator 相关规则
 *
 * 包含运算符相关规则（3条）
 */

import type { Config } from 'stylelint';

const scssOperatorRules: Config['rules'] = {
  /**
   * @name scss/operator-no-newline-after
   * @description 禁止运算符后换行
   * @value true - 启用，禁止运算符后换行（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $result: $a + $b;
   *  - $result: $a +
   *      $b;
   * @example ❌ 错误示例：
   *  - $result: $a +
   *      $b;                                     (运算符后不应换行)
   */
  'scss/operator-no-newline-after': true,

  /**
   * @name scss/operator-no-newline-before
   * @description 禁止运算符前换行
   * @value true - 启用，禁止运算符前换行（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $result: $a + $b;
   *  - $result: $a
   *      + $b;
   * @example ❌ 错误示例：
   *  - $result: $a
   *      + $b;                                   (运算符前不应换行)
   */
  'scss/operator-no-newline-before': true,

  /**
   * @name scss/operator-no-unspaced
   * @description 禁止运算符无空格
   * @value true - 启用，禁止运算符无空格（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $result: $a + $b;
   *  - $result: $a - $b;
   * @example ❌ 错误示例：
   *  - $result: $a+$b;                           (运算符应有空格)
   *  - $result: $a-$b;                           (运算符应有空格)
   */
  'scss/operator-no-unspaced': true,
};

export default scssOperatorRules;
