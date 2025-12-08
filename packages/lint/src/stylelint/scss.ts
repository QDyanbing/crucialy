/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 * Extends base configuration and adds SCSS-specific rules
 * Rules are organized according to official stylelint-scss documentation
 */

import type { Config } from 'stylelint';
import { base } from './base';

// 按照官方文档分类顺序导入 SCSS 规则分组
// @-each
import { scssAtEachRules } from './scss-rules/at-each';
// @-else
import { scssAtElseRules } from './scss-rules/at-else';
// @-extend
import { scssAtExtendRules } from './scss-rules/at-extend';
// @-function
import { scssAtFunctionRules } from './scss-rules/at-function';
// @-if
import { scssAtIfRules } from './scss-rules/at-if';
// @-import
import { scssAtImportRules } from './scss-rules/at-import';
// @-mixin
import { scssAtMixinRules } from './scss-rules/at-mixin';
// @-rule
import { scssAtRuleRules } from './scss-rules/at-rule';
// @-use
import { scssAtUseRules } from './scss-rules/at-use';
// $-variable
import { scssDollarVariableRules } from './scss-rules/dollar-variable';
// %-placeholder
import { scssPercentPlaceholderRules } from './scss-rules/percent-placeholder';
// //-comment
import { scssDoubleSlashCommentRules } from './scss-rules/double-slash-comment';
// Block
import { scssBlockRules } from './scss-rules/block';
// Comment
import { scssCommentRules } from './scss-rules/comment';
// Declaration
import { scssDeclarationRules } from './scss-rules/declaration';
// Dimension
import { scssDimensionRules } from './scss-rules/dimension';
// Function
import { scssFunctionRules } from './scss-rules/function';
// Map
import { scssMapRules } from './scss-rules/map';
// Media feature
import { scssMediaFeatureRules } from './scss-rules/media-feature';
// Operator
import { scssOperatorRules } from './scss-rules/operator';
// Partial
import { scssPartialRules } from './scss-rules/partial';
// Property
import { scssPropertyRules } from './scss-rules/property';
// Selector
import { scssSelectorRules } from './scss-rules/selector';
// Load
import { scssLoadRules } from './scss-rules/load';
// General / Sheet
import { scssGeneralRules } from './scss-rules/general';

/**
 * SCSS 配置 = Base 配置 + SCSS 规则 + 关闭冲突规则
 */
export const scss: Config = {
  ...base,
  customSyntax: 'postcss-scss',
  plugins: [
    ...(Array.isArray(base.plugins) ? base.plugins : base.plugins ? [base.plugins] : []),
    'stylelint-scss',
  ],
  rules: {
    ...base.rules,

    // 关闭与 SCSS 语法冲突的 core 规则
    // SCSS 有自己的 @规则检查，使用 scss/at-rule-no-unknown 替代
    'at-rule-no-unknown': null,

    // SCSS 有嵌套语法，关闭一些与嵌套冲突的规则检查
    'no-descending-specificity': null, // SCSS 嵌套可能导致误报

    // 按照官方文档分类顺序合并所有 SCSS 规则
    ...scssAtEachRules,
    ...scssAtElseRules,
    ...scssAtExtendRules,
    ...scssAtFunctionRules,
    ...scssAtIfRules,
    ...scssAtImportRules,
    ...scssAtMixinRules,
    ...scssAtRuleRules,
    ...scssAtUseRules,
    ...scssDollarVariableRules,
    ...scssPercentPlaceholderRules,
    ...scssDoubleSlashCommentRules,
    ...scssBlockRules,
    ...scssCommentRules,
    ...scssDeclarationRules,
    ...scssDimensionRules,
    ...scssFunctionRules,
    ...scssMapRules,
    ...scssMediaFeatureRules,
    ...scssOperatorRules,
    ...scssPartialRules,
    ...scssPropertyRules,
    ...scssSelectorRules,
    ...scssLoadRules,
    ...scssGeneralRules,
  },
};
