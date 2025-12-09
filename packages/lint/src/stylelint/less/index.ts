/**
 * Less Stylelint configuration
 * Uses postcss-less + stylelint-less
 * Extends core configuration and adds Less-specific rules
 */

import type { Config } from 'stylelint';
import core from '../core';

import lessColorRules from './color';
import lessGeneralRules from './general';

/**
 * Less 配置 = Core 配置 + Less 规则 + 关闭冲突规则
 */
const less: Config = {
  ...core,
  customSyntax: 'postcss-less',
  plugins: [...(core.plugins as string[]), 'stylelint-less'],
  rules: {
    ...core.rules,

    // 关闭与 Less 语法冲突的 core 规则

    // core 配置中 function-disallowed-list: ['rgb', 'rgba', 'hsl', 'hsla']，但会与 Less 预处理器语法冲突
    // Less 包含内置函数（如 darken()、lighten()、percentage() 等），core 规则可能无法正确处理
    // 需要关闭 core 规则，保持与 SCSS 配置一致
    'function-disallowed-list': null,

    // core 配置中 function-no-unknown: true，但会与 Less 预处理器语法冲突
    // Less 包含大量内置函数（如 darken()、lighten()、percentage()、unit()、saturate() 等）
    // core 规则会将这些 Less 内置函数误报为未知函数，需要关闭 core 规则
    // 注意：stylelint-less 没有提供 less/function-no-unknown 规则，所以关闭 core 规则以避免误报
    'function-no-unknown': null,

    // 按照 import 顺序合并所有 Less 规则
    ...lessColorRules,
    ...lessGeneralRules,
  },
};

export default less;
