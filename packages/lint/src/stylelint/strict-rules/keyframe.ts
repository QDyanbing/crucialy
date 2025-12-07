/**
 * Strict Keyframe 相关规则
 *
 * 覆盖 keyframe 相关规则（1条）
 */

import type { Config } from 'stylelint';

export const keyframeRules: Config['rules'] = {
  /**
   * keyframes-name-pattern
   * 动画名称使用 kebab-case
   */
  'keyframes-name-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected keyframe name to be kebab-case',
    },
  ],
};
