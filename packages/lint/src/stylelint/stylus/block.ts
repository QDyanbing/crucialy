/**
 * Stylus Block 相关规则
 *
 * 包含块相关规则（9条）
 * - 块闭合大括号空行要求
 * - 块闭合大括号换行要求
 * - 块闭合大括号空格要求
 * - 块开始大括号换行要求
 * - 块开始大括号空格要求
 */

import type { Config } from 'stylelint';

const stylusBlockRules: Config['rules'] = {
  /**
   * @name stylus/block-closing-brace-empty-line-before
   * @description 块闭合大括号前空行要求
   * @value 'always-multi-line' - 多行块时总是需要空行
   * @value 'never' - 禁止空行
   * @value null - 不限制
   * @secondary except: ["after-closing-brace"] - 闭合大括号后例外
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class {
   *      color: red;
   *
   *    }  (如果启用规则，多行块时缺少空行)
   */
  'stylus/block-closing-brace-empty-line-before': null,

  /**
   * @name stylus/block-closing-brace-newline-after
   * @description 块闭合大括号后换行要求；统一代码风格，要求换行（与 core 规则一致）
   * @value 'always' - 总是需要换行
   * @value 'always-single-line' - 单行块时总是需要换行
   * @value 'never-single-line' - 单行块时禁止换行
   * @value 'always-multi-line' - 多行块时总是需要换行
   * @value 'never-multi-line' - 多行块时禁止换行
   * @value null - 不限制
   * @secondary ignoreAtRules: ["<AtRules[]>"] - 忽略指定的 @规则
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   *    .other {}
   * @example ❌ 错误示例：
   *  - .class {
   *      color: red;
   *    } .other {}  (闭括号后缺少换行)
   */
  'stylus/block-closing-brace-newline-after': 'always',

  /**
   * @name stylus/block-closing-brace-newline-before
   * @description 块闭合大括号前换行要求；统一代码风格，多行块时要求换行（与 core 规则一致）
   * @value 'always' - 总是需要换行
   * @value 'always-multi-line' - 多行块时总是需要换行
   * @value 'never-multi-line' - 多行块时禁止换行
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class { color: red; }  (单行块无需换行)
   */
  'stylus/block-closing-brace-newline-before': 'always-multi-line',

  /**
   * @name stylus/block-closing-brace-space-after
   * @description 块闭合大括号后空格要求；统一代码风格，禁止多行块的空格
   * @value 'never-multi-line' - 多行块时禁止空格
   * @value 'always' - 总是需要空格
   * @value 'always-multi-line' - 多行块时总是需要空格
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - .class { color: red; }
   *  - .other { color: blue; }
   * @example ❌ 错误示例：
   *  - .class {
   *      color: red;
   *    } .other {  (闭括号后不应有空格，应换行)
   *      color: blue;
   *    }
   */
  'stylus/block-closing-brace-space-after': 'never-multi-line',

  /**
   * @name stylus/block-closing-brace-space-before
   * @description 块闭合大括号前空格要求；统一代码风格，禁止空格
   * @value 'never' - 禁止空格
   * @value 'always' - 总是需要空格
   * @value 'always-single-line' - 单行块时总是需要空格
   * @value 'never-single-line' - 单行块时禁止空格
   * @value 'always-multi-line' - 多行块时总是需要空格
   * @value 'never-multi-line' - 多行块时禁止空格
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例（注意 } 前有空格）：
   *  - .class {
   *      color: red;
   *     }  ← 这里 } 前有空格，应删除
   */
  'stylus/block-closing-brace-space-before': 'never',

  /**
   * @name stylus/block-opening-brace-newline-after
   * @description 块开始大括号后换行要求；统一代码风格，多行块时要求换行（与 core 规则一致）
   * @value 'always' - 总是需要换行
   * @value 'rules' - 规则块时需要换行
   * @value 'always-multi-line' - 多行块时总是需要换行
   * @value 'never-multi-line' - 多行块时禁止换行
   * @value null - 不限制
   * @secondary ignore: ["rules"] - 忽略规则块
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class { color: red; }  (单行块无需换行)
   */
  'stylus/block-opening-brace-newline-after': 'always-multi-line',

  /**
   * @name stylus/block-opening-brace-space-after
   * @description 块开始大括号后空格要求；统一代码风格，禁止空格
   * @value 'never' - 禁止空格
   * @value 'always' - 总是需要空格
   * @value 'always-single-line' - 单行块时总是需要空格
   * @value 'never-single-line' - 单行块时禁止空格
   * @value 'always-multi-line' - 多行块时总是需要空格
   * @value 'never-multi-line' - 多行块时禁止空格
   * @value null - 不限制
   * @secondary ignore: ["at-rules"] - 忽略 @规则
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例（注意 { 后有空格）：
   *  - .class { color: red; }  ← { 后不应有空格，应直接换行
   */
  'stylus/block-opening-brace-space-after': 'never',

  /**
   * @name stylus/block-opening-brace-space-before
   * @description 块开始大括号前空格要求；统一代码风格，要求空格（与 core 规则一致）
   * @value 'always' - 总是需要空格
   * @value 'never' - 禁止空格
   * @value 'always-single-line' - 单行块时总是需要空格
   * @value 'never-single-line' - 单行块时禁止空格
   * @value 'always-multi-line' - 多行块时总是需要空格
   * @value 'never-multi-line' - 多行块时禁止空格
   * @value null - 不限制
   * @secondary ignoreAtRules: ["<string|RegExp>[]"] - 忽略指定的 @规则
   * @secondary ignoreSelectors: ["<string|RegExp>[]"] - 忽略指定的选择器
   * @example ✅ 正确示例：
   *  - .class {
   *      color: red;
   *    }
   * @example ❌ 错误示例：
   *  - .class{  (缺少空格)
   *      color: red;
   *    }
   */
  'stylus/block-opening-brace-space-before': 'always',
};

export default stylusBlockRules;
