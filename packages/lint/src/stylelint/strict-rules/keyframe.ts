/**
 * Strict Keyframe 相关规则
 *
 * 覆盖 keyframe 相关规则（1条）
 * - 动画名称使用 kebab-case 命名规范
 */

import type { Config } from 'stylelint';

export const keyframeRules: Config['rules'] = {
  /**
   * @name keyframes-name-pattern
   * @description 指定 \@keyframes 动画名称的命名模式；Strict 模式强制使用 kebab-case 命名规范
   * @value regex - 正则表达式字符串（Strict 配置为 kebab-case，覆盖 Base 的 null）
   * @secondary message: 'Expected keyframe name to be kebab-case' - 自定义错误提示信息
   * @example ✅ 正确示例：
   *  - \@keyframes fade-in { }
   *  - \@keyframes slide-left { }
   *  - \@keyframes rotate-animation { }
   * @example ❌ 错误示例：
   *  - \@keyframes fadeIn { }                  (不是 kebab-case，应使用 fade-in)
   *  - \@keyframes SlideLeft { }               (不是 kebab-case，应使用 slide-left)
   */
  'keyframes-name-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected keyframe name to be kebab-case',
    },
  ],
};
