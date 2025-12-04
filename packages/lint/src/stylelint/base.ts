/**
 * Base Stylelint configuration
 * All core rules explicitly configured
 * Zero preset policy
 */

import type { StylelintConfig } from './types';

// 导入各分组规则
import { colorRules } from './rules/color';
import { lengthRules } from './rules/length';
import { fontRules } from './rules/font';
import { functionRules } from './rules/function';
import { numberUnitRules } from './rules/number-unit';
import { valueRules } from './rules/value';
import { customPropertyRules } from './rules/custom-property';
import { shorthandRules } from './rules/shorthand';
import { propertyRules } from './rules/property';
import { keyframeRules } from './rules/keyframe';
import { declarationRules } from './rules/declaration';
import { blockRules } from './rules/block';
import { selectorRules } from './rules/selector';
import { mediaRules } from './rules/media';
import { atRuleRules } from './rules/at-rule';
import { commentRules } from './rules/comment';
import { generalRules } from './rules/general';
import { notationRules } from './rules/notation';
import { ruleRules } from './rules/rule';
import { complexityRules } from './rules/complexity';
import { importRules } from './rules/import';
import { patternRules } from './rules/pattern';
import { annotationRules } from './rules/annotation';
import { gridRules } from './rules/grid';
import { nestingRules } from './rules/nesting';
import { syntaxRules } from './rules/syntax';
import { stylisticRules } from './rules/stylistic';
import { orderRules } from './rules/order';

/**
 * Base 配置
 * 合并所有规则分组
 */
export const base: StylelintConfig = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    ...colorRules,
    ...lengthRules,
    ...fontRules,
    ...functionRules,
    ...numberUnitRules,
    ...valueRules,
    ...customPropertyRules,
    ...shorthandRules,
    ...propertyRules,
    ...keyframeRules,
    ...declarationRules,
    ...blockRules,
    ...selectorRules,
    ...mediaRules,
    ...atRuleRules,
    ...commentRules,
    ...generalRules,
    ...notationRules,
    ...ruleRules,
    ...complexityRules,
    ...importRules,
    ...patternRules,
    ...annotationRules,
    ...gridRules,
    ...nestingRules,
    ...syntaxRules,
    ...stylisticRules,
    ...orderRules,
  } as any,
};
