/**
 * SCSS $-variable 相关规则
 *
 * 包含 $变量相关规则（10条）
 */

import type { Config } from 'stylelint';

export const scssDollarVariableRules: Config['rules'] = {
  /**
   * @name scss/dollar-variable-colon-newline-after
   * @description $变量冒号后是否换行
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是换行
   * @value 'always-multi-line' - 多行时总是换行
   * @example ✅ 正确示例（null 时）：
   *  - $var: value;
   *  - $var:
   *      value;
   * @example ❌ 错误示例（假设配置为 always-multi-line）：
   *  - $var:
   *      value;                                  (多行时冒号后应换行)
   */
  'scss/dollar-variable-colon-newline-after': null,

  /**
   * @name scss/dollar-variable-colon-space-after
   * @description $变量冒号后是否有空格
   * @value 'always' - 总是有空格（Base 配置）
   * @value 'never' - 不能有空格
   * @example ✅ 正确示例：
   *  - $var: value;
   * @example ❌ 错误示例：
   *  - $var:value;                               (冒号后缺少空格)
   */
  'scss/dollar-variable-colon-space-after': 'always',

  /**
   * @name scss/dollar-variable-colon-space-before
   * @description $变量冒号前是否有空格
   * @value 'never' - 不能有空格（Base 配置）
   * @value 'always' - 必须有空格
   * @example ✅ 正确示例：
   *  - $var: value;
   * @example ❌ 错误示例：
   *  - $var : value;                             (冒号前不应有空格)
   */
  'scss/dollar-variable-colon-space-before': 'never',

  /**
   * @name scss/dollar-variable-default
   * @description $变量是否有默认值（!default）
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是有默认值
   * @value 'never' - 不能有默认值
   * @example ✅ 正确示例（null 时）：
   *  - $var: value;
   *  - $var: value !default;
   * @example ❌ 错误示例（假设配置为 always）：
   *  - $var: value;                              (应使用 !default)
   */
  'scss/dollar-variable-default': null,

  /**
   * @name scss/dollar-variable-empty-line-after
   * @description $变量后是否需要空行
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是需要空行
   * @value 'never' - 不需要空行
   * @example ✅ 正确示例（null 时）：
   *  - $var: value;
   *    .class { }
   *  - $var: value;
   *
   *    .class { }
   * @example ❌ 错误示例（假设配置为 always）：
   *  - $var: value;
   *    .class { }                                (变量后应有空行)
   */
  'scss/dollar-variable-empty-line-after': null,

  /**
   * @name scss/dollar-variable-empty-line-before
   * @description $变量前是否需要空行
   * @value null - 不限制（Base 配置）
   * @value 'always' - 总是需要空行
   * @value 'never' - 不需要空行
   * @example ✅ 正确示例（null 时）：
   *  - .class { }
   *    $var: value;
   *  - .class { }
   *
   *    $var: value;
   * @example ❌ 错误示例（假设配置为 always）：
   *  - .class { }
   *    $var: value;                              (变量前应有空行)
   */
  'scss/dollar-variable-empty-line-before': null,

  /**
   * @name scss/dollar-variable-first-in-block
   * @description $变量是否必须在块的首部
   * @value null - 不限制（Base 配置）
   * @value true - 必须在块的首部
   * @example ✅ 正确示例（null 时）：
   *  - .class {
   *      $var: value;
   *      color: red;
   *    }
   * @example ❌ 错误示例（假设配置为 true）：
   *  - .class {
   *      color: red;
   *      $var: value;                            (变量应在块的首部)
   *    }
   */
  'scss/dollar-variable-first-in-block': null,

  /**
   * @name scss/dollar-variable-no-missing-interpolation
   * @description 禁止 $变量缺少插值
   * @value true - 启用，禁止缺少插值（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - .class {
   *      content: "#{$var}";
   *    }
   * @example ❌ 错误示例：
   *  - .class {
   *      content: "$var";                        (应使用插值 #{$var})
   *    }
   */
  'scss/dollar-variable-no-missing-interpolation': true,

  /**
   * @name scss/dollar-variable-no-namespaced-assignment
   * @description 禁止 $变量命名空间赋值
   * @value true - 启用，禁止命名空间赋值（Base 配置）
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - $var: value;
   * @example ❌ 错误示例：
   *  - namespace.$var: value;                    (不应使用命名空间赋值)
   */
  'scss/dollar-variable-no-namespaced-assignment': true,

  /**
   * @name scss/dollar-variable-pattern
   * @description $变量命名模式；强制使用 kebab-case
   * @value regex - 正则表达式字符串（Base 配置为 kebab-case）
   * @example ✅ 正确示例：
   *  - $primary-color: #ff0000;
   *  - $font-size-base: 16px;
   * @example ❌ 错误示例：
   *  - $primaryColor: #ff0000;                   (应为 kebab-case)
   *  - $PRIMARY_COLOR: #ff0000;                  (应为小写 kebab-case)
   */
  'scss/dollar-variable-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
};
