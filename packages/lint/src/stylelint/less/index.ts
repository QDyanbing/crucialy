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

    // core 配置中 @stylistic/color-hex-case: 'lower'，但 Less 有专用的 less/color-hex-case 规则
    // core 规则基于标准 CSS，可能无法正确解析 Less 语法中的 hex 颜色（如变量插值、函数调用等）
    // Less 专用规则能理解 Less 的语法特性，检查更准确；同时避免两个规则重复检查同一个 hex 颜色
    '@stylistic/color-hex-case': null,

    // core 配置中 color-no-invalid-hex: true，但 Less 有专用的 less/color-no-invalid-hex 规则
    // core 规则基于标准 CSS，可能无法正确识别 Less 语法中的 hex 颜色格式（如变量插值、函数调用等）
    // Less 专用规则能理解 Less 的语法特性，检查更准确；同时避免两个规则重复检查同一个 hex 颜色
    'color-no-invalid-hex': null,

    // core 配置中 function-no-unknown: true，但会与 Less 预处理器语法冲突
    // Less 包含大量内置函数（如 darken()、lighten()、percentage()、unit()、saturate()、fade() 等）
    // core 规则只认识标准 CSS 函数，会将这些 Less 内置函数误报为未知函数
    // 注意：stylelint-less 没有提供 less/function-no-unknown 规则，所以关闭 core 规则以避免误报
    'function-no-unknown': null,

    // 按照 import 顺序合并所有 Less 规则
    ...lessColorRules,
    ...lessGeneralRules,
  },
};

export default less;
