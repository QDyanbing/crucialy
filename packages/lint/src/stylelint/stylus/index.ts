/**
 * Stylus Stylelint configuration
 * Uses postcss-stylus + stylelint-stylus
 * Extends core configuration and adds Stylus-specific rules
 */

import type { Config } from 'stylelint';
import core from '../core';

import stylusAtRuleRules from './at-rule';
import stylusBlockRules from './block';
import stylusColorRules from './color';
import stylusCommentRules from './comment';
import stylusDeclarationRules from './declaration';
import stylusGeneralRules from './general';
import stylusMediaRules from './media';
import stylusNumberRules from './number';
import stylusPropertyRules from './property';
import stylusSelectorRules from './selector';
import stylusSemicolonRules from './semicolon';

/**
 * Stylus 配置 = Core 配置 + Stylus 规则 + 关闭冲突规则
 */
const stylus: Config = {
  ...core,
  customSyntax: 'postcss-stylus',
  plugins: [...(core.plugins as string[]), 'stylelint-stylus'],
  rules: {
    ...core.rules,

    // 调整与 Stylus 语法相关的 core 规则

    // core 配置中 at-rule-no-unknown: true，但 Stylus 有专用的 @规则
    // 需要关闭 core 规则，改用 stylus/at-rule-no-unknown 来检查
    'at-rule-no-unknown': null,

    // core 配置中 at-rule-prelude-no-invalid: true，但 Stylus 的 @规则前导部分可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-prelude-no-invalid': null,

    // core 配置中 at-rule-descriptor-no-unknown: true，但 Stylus 的 @规则描述符可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-no-unknown': null,

    // core 配置中 at-rule-descriptor-value-no-unknown: true，但 Stylus 的 @规则描述符值可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-value-no-unknown': null,

    // core 配置中 declaration-property-value-no-unknown: true，但 Stylus 的属性值可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'declaration-property-value-no-unknown': null,

    // core 配置中 function-no-unknown: true，但会与 Stylus 预处理器语法冲突
    // Stylus 包含大量内置函数，core 规则会将这些 Stylus 内置函数误报为未知函数
    // 注意：stylelint-stylus 没有提供 stylus/function-no-unknown 规则，所以关闭 core 规则以避免误报
    'function-no-unknown': null,

    // core 配置中 media-query-no-invalid: true，但 Stylus 的媒体查询可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-query-no-invalid': null,

    // core 配置中 media-feature-name-value-no-unknown: true，但 Stylus 的媒体特性值可能无法被 core 规则正确识别
    // Stylus 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-feature-name-value-no-unknown': null,

    // core 配置中 property-no-unknown: true，但 Stylus 有专用的 stylus/property-no-unknown 规则
    // 需要关闭 core 规则，改用 stylus/property-no-unknown 来检查
    'property-no-unknown': null,

    // core 配置中 selector-type-no-unknown: true，但 Stylus 有专用的 stylus/selector-type-no-unknown 规则
    // 需要关闭 core 规则，改用 stylus/selector-type-no-unknown 来检查
    'selector-type-no-unknown': null,

    // core 配置中 no-invalid-double-slash-comments: true，但 Stylus 使用 // 作为单行注释
    // 需要关闭 core 规则，让 Stylus 的 // 注释完全由 stylus/single-line-comment-* 规则管理
    'no-invalid-double-slash-comments': null,

    // CSS 颜色规则与 Stylus 拉齐，保持一致的严格性
    // 同时保留 Stylus 专用规则，Stylus 专用规则能理解 Stylus 的语法特性，检查更准确
    'color-no-invalid-hex': true,
    '@stylistic/color-hex-case': 'lower',

    // 按照 import 顺序合并所有 Stylus 规则
    ...stylusAtRuleRules,
    ...stylusBlockRules,
    ...stylusColorRules,
    ...stylusCommentRules,
    ...stylusDeclarationRules,
    ...stylusGeneralRules,
    ...stylusMediaRules,
    ...stylusNumberRules,
    ...stylusPropertyRules,
    ...stylusSelectorRules,
    ...stylusSemicolonRules,
  },
};

export default stylus;
