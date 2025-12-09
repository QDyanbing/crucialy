/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 * Extends base configuration and adds SCSS-specific rules
 * Rules are organized according to official stylelint-scss documentation
 */

import type { Config } from 'stylelint';
import core from '../core';

import scssAtEachRules from './at-each';
import scssAtElseRules from './at-else';
import scssAtExtendRules from './at-extend';
import scssAtFunctionRules from './at-function';
import scssAtIfRules from './at-if';
import scssAtImportRules from './at-import';
import scssAtMixinRules from './at-mixin';
import scssAtRuleRules from './at-rule';
import scssAtUseRules from './at-use';
import scssBlockRules from './block';
import scssCommentRules from './comment';
import scssDeclarationRules from './declaration';
import scssDimensionRules from './dimension';
import scssDollarVariableRules from './dollar-variable';
import scssDoubleSlashCommentRules from './double-slash-comment';
import scssFunctionRules from './function';
import scssGeneralRules from './general';
import scssLoadRules from './load';
import scssMapRules from './map';
import scssMediaFeatureRules from './media-feature';
import scssOperatorRules from './operator';
import scssPartialRules from './partial';
import scssPercentPlaceholderRules from './percent-placeholder';
import scssPropertyRules from './property';
import scssSelectorRules from './selector';

/**
 * SCSS 配置 = Core 配置 + SCSS 规则 + 关闭冲突规则
 */
const scss: Config = {
  ...core,
  customSyntax: 'postcss-scss',
  plugins: [...(core.plugins as string[]), 'stylelint-scss'],
  rules: {
    ...core.rules,

    // 调整与 SCSS 语法相关的 core 规则

    // core 配置中 at-rule-no-unknown: true，但会与 SCSS 预处理器语法冲突
    // SCSS 包含 @mixin、@include、@use、@forward、@function、@if、@else 等专用 @规则
    // core 规则会将这些 SCSS 语法误报为未知规则，需要关闭 core 规则，改用 scss/at-rule-no-unknown 来检查
    'at-rule-no-unknown': null,

    // core 配置中 at-rule-prelude-no-invalid: true，但 SCSS 的 @规则前导部分可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-prelude-no-invalid': null,

    // core 配置中 at-rule-descriptor-no-unknown: true，但 SCSS 的 @规则描述符可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-no-unknown': null,

    // core 配置中 at-rule-descriptor-value-no-unknown: true，但 SCSS 的 @规则描述符值可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'at-rule-descriptor-value-no-unknown': null,

    // core 配置中 annotation-no-unknown: true，但 SCSS 有专用的注解（如 !default、!global）
    // 需要忽略 SCSS 专用的注解，避免误报
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['default', 'global'],
      },
    ],

    // core 配置中 declaration-property-value-no-unknown: true，但 SCSS 的属性值可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'declaration-property-value-no-unknown': null,

    // core 配置中 function-disallowed-list: ['rgb', 'rgba', 'hsl', 'hsla']，但会与 SCSS 预处理器语法冲突
    // SCSS 包含大量内置函数，core 规则可能无法正确处理 SCSS 的函数语法（如 darken()、lighten() 等）
    // 需要关闭 core 规则，改用 scss/function-disallowed-list 来检查（已配置为禁止 CSS 颜色函数，允许 SCSS 颜色函数）
    'function-disallowed-list': null,

    // core 配置中 function-no-unknown: true，但会与 SCSS 预处理器语法冲突
    // SCSS 包含大量内置函数（如 darken()、lighten()、percentage()、unit()、map-get() 等）
    // core 规则会将这些 SCSS 内置函数误报为未知函数，需要关闭 core 规则，改用 scss/function-no-unknown 来检查
    'function-no-unknown': null,

    // core 配置中 media-query-no-invalid: true，但 SCSS 的媒体查询可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-query-no-invalid': null,

    // core 配置中 media-feature-name-value-no-unknown: true，但 SCSS 的媒体特性值可能无法被 core 规则正确识别
    // SCSS 的语法特性（如变量插值、函数调用等）可能导致误报，关闭此规则
    'media-feature-name-value-no-unknown': null,

    // core 配置中 property-no-unknown: true，但会与 SCSS 预处理器语法冲突
    // SCSS 支持嵌套属性（如 border: { width: 1px; }）等 SCSS 特有的属性语法
    // core 规则会将这些 SCSS 语法误报为未知属性，需要关闭 core 规则，改用 scss/property-no-unknown 来检查
    'property-no-unknown': null,

    // 按照 import 顺序合并所有 SCSS 规则
    ...scssAtEachRules,
    ...scssAtElseRules,
    ...scssAtExtendRules,
    ...scssAtFunctionRules,
    ...scssAtIfRules,
    ...scssAtImportRules,
    ...scssAtMixinRules,
    ...scssAtRuleRules,
    ...scssAtUseRules,
    ...scssBlockRules,
    ...scssCommentRules,
    ...scssDeclarationRules,
    ...scssDimensionRules,
    ...scssDollarVariableRules,
    ...scssDoubleSlashCommentRules,
    ...scssFunctionRules,
    ...scssGeneralRules,
    ...scssLoadRules,
    ...scssMapRules,
    ...scssMediaFeatureRules,
    ...scssOperatorRules,
    ...scssPartialRules,
    ...scssPercentPlaceholderRules,
    ...scssPropertyRules,
    ...scssSelectorRules,
  },
};

export default scss;
