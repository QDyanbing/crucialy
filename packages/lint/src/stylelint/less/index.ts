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

    // 调整与 Less 语法相关的 core 规则

    // core 配置中 at-rule-no-unknown: true，但 Less 有专用的 @规则（如 @plugin）
    // 需要忽略 Less 专用的 @规则，避免误报
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['plugin'],
      },
    ],

    // core 配置中 at-rule-descriptor-no-unknown: true，但 Less 的 @规则描述符可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-no-unknown': null,

    // core 配置中 at-rule-descriptor-value-no-unknown: true，但 Less 的 @规则描述符值可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-value-no-unknown': null,

    // core 配置中 at-rule-prelude-no-invalid: true，但 Less 的 @规则前导部分可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-prelude-no-invalid': null,

    // core 配置中 declaration-property-value-no-unknown: true，但 Less 的属性值可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'declaration-property-value-no-unknown': null,

    // core 配置中 media-query-no-invalid: true，但 Less 的媒体查询可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-query-no-invalid': null,

    // core 配置中 media-feature-name-value-no-unknown: true，但 Less 的媒体特性值可能无法被 core 规则正确识别
    // Less 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-feature-name-value-no-unknown': null,

    // core 配置中 selector-pseudo-class-no-unknown: true，但 Less 有专用的 :extend() 伪类
    // 需要忽略 Less 专用的伪类，避免误报
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['extend'],
      },
    ],

    // core 配置中 property-no-unknown: true，但 Less 支持属性名插值（如 @{prop}）
    // 需要忽略 Less 的属性插值语法，避免误报
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^@/'],
      },
    ],

    // core 配置中 function-no-unknown: true，但会与 Less 预处理器语法冲突
    // Less 包含大量内置函数（如 darken()、lighten()、percentage()、unit()、saturate()、fade() 等）
    // core 规则只认识标准 CSS 函数，会将这些 Less 内置函数误报为未知函数
    // 注意：stylelint-less 没有提供 less/function-no-unknown 规则，所以关闭 core 规则以避免误报
    'function-no-unknown': null,

    // CSS 颜色规则与 Less 拉齐，保持一致的严格性
    // 同时保留 Less 专用规则，Less 专用规则能理解 Less 的语法特性（如变量插值、函数调用等），检查更准确
    'color-no-invalid-hex': true,
    '@stylistic/color-hex-case': 'lower',

    // 按照 import 顺序合并所有 Less 规则
    ...lessColorRules,
    ...lessGeneralRules,
  },
};

export default less;
