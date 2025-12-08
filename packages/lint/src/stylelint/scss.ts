/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 * Extends base configuration and adds SCSS-specific rules
 * Rules are organized according to official stylelint-scss documentation
 */

import type { Config } from 'stylelint';
import core from './core';

import { scssAtEachRules } from './scss-rules/at-each';
import { scssAtElseRules } from './scss-rules/at-else';
import { scssAtExtendRules } from './scss-rules/at-extend';
import { scssAtFunctionRules } from './scss-rules/at-function';
import { scssAtIfRules } from './scss-rules/at-if';
import { scssAtImportRules } from './scss-rules/at-import';
import { scssAtMixinRules } from './scss-rules/at-mixin';
import { scssAtRuleRules } from './scss-rules/at-rule';
import { scssAtUseRules } from './scss-rules/at-use';
import { scssBlockRules } from './scss-rules/block';
import { scssCommentRules } from './scss-rules/comment';
import { scssDeclarationRules } from './scss-rules/declaration';
import { scssDimensionRules } from './scss-rules/dimension';
import { scssDollarVariableRules } from './scss-rules/dollar-variable';
import { scssDoubleSlashCommentRules } from './scss-rules/double-slash-comment';
import { scssFunctionRules } from './scss-rules/function';
import { scssGeneralRules } from './scss-rules/general';
import { scssLoadRules } from './scss-rules/load';
import { scssMapRules } from './scss-rules/map';
import { scssMediaFeatureRules } from './scss-rules/media-feature';
import { scssOperatorRules } from './scss-rules/operator';
import { scssPartialRules } from './scss-rules/partial';
import { scssPercentPlaceholderRules } from './scss-rules/percent-placeholder';
import { scssPropertyRules } from './scss-rules/property';
import { scssSelectorRules } from './scss-rules/selector';

/**
 * SCSS 配置 = Core 配置 + SCSS 规则 + 关闭冲突规则
 */
export const scss: Config = {
  ...core,
  customSyntax: 'postcss-scss',
  plugins: [...(core.plugins as string[]), 'stylelint-scss'],
  rules: {
    ...core.rules,

    // 关闭与 SCSS 语法冲突的 core 规则

    // core 配置中 at-rule-no-unknown: true，但会与 SCSS 预处理器语法冲突
    // SCSS 包含 @mixin、@include、@use、@forward、@function、@if、@else 等专用 @规则
    // core 规则会将这些 SCSS 语法误报为未知规则，需要关闭 core 规则，改用 scss/at-rule-no-unknown 来检查
    'at-rule-no-unknown': null,

    // core 配置中 function-disallowed-list: null，但会与 SCSS 预处理器语法冲突
    // SCSS 包含大量内置函数，core 规则可能无法正确处理 SCSS 的函数语法
    // 需要关闭 core 规则，改用 scss/function-disallowed-list 来检查
    'function-disallowed-list': null,

    // core 配置中 function-no-unknown: true，但会与 SCSS 预处理器语法冲突
    // SCSS 包含大量内置函数（如 darken()、lighten()、percentage()、unit()、map-get() 等）
    // core 规则会将这些 SCSS 内置函数误报为未知函数，需要关闭 core 规则，改用 scss/function-no-unknown 来检查
    'function-no-unknown': null,

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
