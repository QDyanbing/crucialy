/**
 * Keyframe 相关规则
 *
 * 包含 @keyframes 动画相关规则（4条）
 * - keyframe 选择器表示法（百分比/关键字）
 * - 禁止重复选择器
 * - 禁止 !important
 * - keyframes 命名模式
 */

import type { Config } from 'stylelint';

export const keyframeRules: Config['rules'] = {
  /**
   * @name keyframe-selector-notation
   * @description 指定 \@keyframes 中选择器的表示法；避免混用百分比和关键字两种表示法
   * @value 'percentage' - 使用百分比（0%, 50%, 100%）
   * @value 'keyword' - 使用关键字（from, to）
   * @value 'percentage-unless-within-keyword-only-block' - 如果整个 keyframes 只用关键字，允许使用关键字，否则要求百分比
   * @example ✅ 正确示例：
   *  - \@keyframes slide {
   *      0% { transform: translateX(0); }
   *      100% { transform: translateX(100px); }
   *    }
   *  - \@keyframes fade {
   *      from { opacity: 0; }
   *      to { opacity: 1; }
   *    }
   * @example ❌ 错误示例：
   *  - \@keyframes mixed {
   *      from { opacity: 0; }
   *      50% { opacity: 0.5; }
   *      to { opacity: 1; }
   *    }                                      (混用了关键字和百分比)
   */
  'keyframe-selector-notation': ['percentage-unless-within-keyword-only-block'],

  /**
   * @name keyframe-block-no-duplicate-selectors
   * @description 禁止 \@keyframes 中出现重复的选择器；同一个 keyframes 中不能有重复的百分比或关键字，后面的会覆盖前面的
   * @value true - 启用，禁止重复选择器
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@keyframes slide {
   *      0% { transform: translateX(0); }
   *      50% { transform: translateX(50px); }
   *      100% { transform: translateX(100px); }
   *    }
   * @example ❌ 错误示例：
   *  - \@keyframes slide {
   *      0% { transform: translateX(0); }
   *      50% { transform: translateX(50px); }
   *      50% { transform: translateX(60px); }
   *    }                                      (重复的 50%)
   */
  'keyframe-block-no-duplicate-selectors': [true],

  /**
   * @name keyframe-declaration-no-important
   * @description 禁止在 \@keyframes 中使用 !important；!important 在动画中会被忽略，没有任何效果
   * @value true - 启用，禁止 !important
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - \@keyframes fade {
   *      0% { opacity: 0; }
   *      100% { opacity: 1; }
   *    }
   * @example ❌ 错误示例：
   *  - \@keyframes fade {
   *      0% { opacity: 0 !important; }
   *      100% { opacity: 1 !important; }
   *    }                                      (!important 在动画中无效)
   */
  'keyframe-declaration-no-important': [true],

  /**
   * @name keyframes-name-pattern
   * @description 指定 \@keyframes 动画名称的命名模式；规范 keyframes 名称的命名风格
   * @value null - 不限制命名
   * @value regex - 正则表达式字符串（如：'^[a-z]+(-[a-z]+)*$' 强制 kebab-case）
   * @example ✅ 正确示例（null 时）：
   *  - \@keyframes fadeIn { }
   *  - \@keyframes slide-left { }
   * @example ❌ 错误示例（假设配置为 '^[a-z]+(-[a-z]+)*$'）：
   *  - \@keyframes fadeIn { }                 (不是 kebab-case，应使用 fade-in)
   */
  'keyframes-name-pattern': [null],
};
