/**
 * Strict 禁止用法规则
 *
 * 包含禁止使用的功能和语法规则（6条）
 * - 禁止颜色函数
 * - 禁止通配符选择器
 * - 禁止特定单位
 * - 动画时长限制
 * - 空行限制
 */

import type { Config } from 'stylelint';

export const strictRestrictionsRules: Config['rules'] = {
  /**
   * function-disallowed-list
   * 禁止颜色函数（只允许 hex 表示颜色）
   *
   * 说明：Strict 模式强制使用 hex 颜色
   * - 统一颜色表示方式
   * - hex 更直观、简洁
   * - 避免颜色函数的浏览器兼容性问题
   *
   * ✅ 正确示例：color: #000;
   * ✅ 正确示例：color: #00000080; (带透明度的 hex)
   * ❌ 错误示例：color: rgb(0 0 0);
   * ❌ 错误示例：color: rgba(0, 0, 0, 0.5);
   * ❌ 错误示例：color: hsl(0, 0%, 0%);
   * ❌ 错误示例：color: hsla(0, 0%, 0%, 0.5);
   */
  'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],

  /**
   * selector-disallowed-list
   * 禁止通配符选择器
   *
   * 说明：通配符 (*) 性能差，影响所有元素
   * - 应使用具体的选择器
   * - 禁止以 * 开头的选择器
   *
   * ❌ 错误示例：* {}
   * ❌ 错误示例：*:hover {}
   */
  'selector-disallowed-list': ['/^\\*/'],

  /**
   * declaration-property-unit-disallowed-list
   * 禁止某些属性使用某些单位
   *
   * 说明：特定属性推荐使用特定单位
   * - font-size 禁止 px，推荐 rem/em（响应式）
   * - animation 禁止 ms，推荐 s（可读性更好）
   *
   * ✅ 正确示例：font-size: 1.5rem;
   * ✅ 正确示例：animation: slide 0.3s;
   * ❌ 错误示例：font-size: 16px;
   * ❌ 错误示例：animation: slide 300ms;
   */
  'declaration-property-unit-disallowed-list': {
    'font-size': ['px'],
    '/^animation/': ['ms'],
  },

  /**
   * time-min-milliseconds
   * 动画最小时长 100ms
   *
   * 说明：过快的动画会导致用户体验不佳
   * - 小于 100ms 的动画难以被察觉
   * - 可能导致闪烁效果
   *
   * ✅ 正确示例：transition: 0.1s;
   * ✅ 正确示例：animation: slide 0.3s;
   * ❌ 错误示例：transition: 50ms;
   * ❌ 错误示例：animation: fade 0.05s;
   */
  'time-min-milliseconds': 100,

  /**
   * @stylistic/selector-max-empty-lines
   * 选择器中禁止空行
   *
   * 说明：选择器列表中不应有空行，保持紧凑
   *
   * ✅ 正确示例：.a, .b {}
   * ❌ 错误示例：
   * .a,
   *
   * .b {}
   */
  '@stylistic/selector-max-empty-lines': 0,

  /**
   * @stylistic/value-list-max-empty-lines
   * 值列表中禁止空行
   *
   * 说明：多个值之间不应有空行
   *
   * ✅ 正确示例：font-family: Arial, sans-serif;
   * ❌ 错误示例：
   * font-family: Arial,
   *
   * sans-serif;
   */
  '@stylistic/value-list-max-empty-lines': 0,

  /**
   * @stylistic/function-max-empty-lines
   * 函数中禁止空行
   *
   * 说明：函数参数之间不应有空行
   *
   * ✅ 正确示例：calc(100% - 20px)
   * ❌ 错误示例：
   * calc(100%
   *
   * - 20px)
   */
  '@stylistic/function-max-empty-lines': 0,

  /**
   * @stylistic/max-line-length
   * 限制行长度 120 字符
   *
   * 说明：过长的行不利于阅读和代码审查
   * - 120 字符是业界常见标准
   * - 适配多数编辑器和显示器
   *
   * ✅ 正确示例：短行代码
   * ❌ 错误示例：超过 120 字符的长行
   */
  '@stylistic/max-line-length': 120,
};

