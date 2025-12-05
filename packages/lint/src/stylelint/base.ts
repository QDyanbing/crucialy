/**
 * Base Stylelint configuration
 * All core rules explicitly configured
 * Zero preset policy
 */

import type { Config } from 'stylelint';

// 导入各分组规则
import { annotationRules } from './rules/annotation';
import { atRuleRules } from './rules/at-rule';
import { blockRules } from './rules/block';
import { colorRules } from './rules/color';
import { commentRules } from './rules/comment';
import { complexityRules } from './rules/complexity';
import { customPropertyRules } from './rules/custom-property';
import { declarationRules } from './rules/declaration';
import { fontRules } from './rules/font';
import { functionRules } from './rules/function';
import { generalRules } from './rules/general';
import { gridRules } from './rules/grid';
import { importRules } from './rules/import';
import { keyframeRules } from './rules/keyframe';
import { lengthRules } from './rules/length';
import { mediaRules } from './rules/media';
import { nestingRules } from './rules/nesting';
import { notationRules } from './rules/notation';
import { numberUnitRules } from './rules/number-unit';
import { orderRules } from './rules/order';
import { patternRules } from './rules/pattern';
import { propertyRules } from './rules/property';
import { ruleRules } from './rules/rule';
import { selectorRules } from './rules/selector';
import { shorthandRules } from './rules/shorthand';
import { stylisticRules } from './rules/stylistic';
import { syntaxRules } from './rules/syntax';
import { valueRules } from './rules/value';

/**
 * Base 配置
 * 合并所有规则分组
 */
export const base: Config = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    ...annotationRules,
    ...atRuleRules,
    ...blockRules,
    ...colorRules,
    ...commentRules,
    ...complexityRules,
    ...customPropertyRules,
    ...declarationRules,
    ...fontRules,
    ...functionRules,
    ...generalRules,
    ...gridRules,
    ...importRules,
    ...keyframeRules,
    ...lengthRules,
    ...mediaRules,
    ...nestingRules,
    ...notationRules,
    ...numberUnitRules,
    ...orderRules,
    ...patternRules,
    ...propertyRules,
    ...ruleRules,
    ...selectorRules,
    ...shorthandRules,
    ...stylisticRules,
    ...syntaxRules,
    ...valueRules,
  },
};
