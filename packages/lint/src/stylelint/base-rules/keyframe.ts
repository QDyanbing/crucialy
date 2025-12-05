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
   * keyframe-selector-notation
   * 指定 @keyframes 中选择器的表示法
   *
   * 说明：keyframe 选择器有两种表示方式：
   * - percentage：百分比（0%, 50%, 100%）
   * - keyword：关键字（from, to）
   *
   * Base 配置：percentage-unless-within-keyword-only-block
   * - 如果整个 keyframes 只用关键字（from/to），允许使用关键字
   * - 否则要求使用百分比
   * - 避免混用两种表示法
   *
   * ✅ 正确示例（全用百分比）：
   * @keyframes slide {
   *   0% { transform: translateX(0); }
   *   100% { transform: translateX(100px); }
   * }
   *
   * ✅ 正确示例（全用关键字）：
   * @keyframes fade {
   *   from { opacity: 0; }
   *   to { opacity: 1; }
   * }
   *
   * ❌ 错误示例（混用）：
   * @keyframes mixed {
   *   from { opacity: 0; }
   *   50% { opacity: 0.5; }
   *   to { opacity: 1; }
   * }
   */
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

  /**
   * keyframe-block-no-duplicate-selectors
   * 禁止 @keyframes 中出现重复的选择器
   *
   * 说明：同一个 keyframes 中不能有重复的百分比或关键字
   * - 后面的会覆盖前面的
   * - 通常是复制粘贴错误
   * - 会导致动画定义混乱
   *
   * ✅ 正确示例：
   * @keyframes slide {
   *   0% { transform: translateX(0); }
   *   50% { transform: translateX(50px); }
   *   100% { transform: translateX(100px); }
   * }
   *
   * ❌ 错误示例：
   * @keyframes slide {
   *   0% { transform: translateX(0); }
   *   50% { transform: translateX(50px); }
   *   50% { transform: translateX(60px); } (重复的 50%)
   * }
   */
  'keyframe-block-no-duplicate-selectors': true,

  /**
   * keyframe-declaration-no-important
   * 禁止在 @keyframes 中使用 !important
   *
   * 说明：keyframe 内的声明不应该使用 !important
   * - !important 在动画中会被忽略
   * - 没有任何效果，属于无效代码
   * - 可能是误用或复制粘贴错误
   *
   * ✅ 正确示例：
   * @keyframes fade {
   *   0% { opacity: 0; }
   *   100% { opacity: 1; }
   * }
   *
   * ❌ 错误示例：
   * @keyframes fade {
   *   0% { opacity: 0 !important; }
   *   100% { opacity: 1 !important; }
   * }
   */
  'keyframe-declaration-no-important': true,

  /**
   * keyframes-name-pattern
   * 指定 @keyframes 动画名称的命名模式
   *
   * 说明：规范 keyframes 名称的命名风格
   * - null：不限制命名
   * - 正则表达式：名称必须匹配该模式
   *
   * Base 配置不限制，常见使用场景：
   * - kebab-case：fade-in, slide-left
   * - camelCase：fadeIn, slideLeft
   *
   * 配置示例：'^[a-z]+(-[a-z]+)*$' (强制 kebab-case)
   * ✅ 正确示例（null 时）：
   * @keyframes fadeIn { }
   *
   * ✅ 正确示例（null 时）：
   * @keyframes slide-left { }
   *
   * ✅ 正确示例（kebab-case 配置后）：
   * @keyframes fade-in { }
   *
   * ❌ 错误示例（kebab-case 配置后）：
   * @keyframes fadeIn { } (不是 kebab-case)
   */
  'keyframes-name-pattern': null,
};
