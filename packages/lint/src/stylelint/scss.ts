/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 * Extends base configuration and adds SCSS-specific rules
 * Rules are organized according to official stylelint-scss documentation
 */

import type { Config } from 'stylelint';
import { base } from './base';

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
 * SCSS 配置 = Base 配置 + SCSS 规则 + 关闭冲突规则
 */
export const scss: Config = {
  ...base,
  customSyntax: 'postcss-scss',
  plugins: [...(base.plugins as string[]), 'stylelint-scss'],
  rules: {
    ...base.rules,

    // 关闭与 SCSS 语法冲突的 core 规则
    // SCSS 有自己的 @规则检查，使用 scss/at-rule-no-unknown 替代
    'at-rule-no-unknown': null,

    // SCSS 有嵌套语法，关闭一些与嵌套冲突的规则检查
    'no-descending-specificity': null, // SCSS 嵌套可能导致误报

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
