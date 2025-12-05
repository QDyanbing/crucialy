/**
 * Base Stylelint configuration
 * All core rules explicitly configured
 * Zero preset policy
 */

import type { Config } from 'stylelint';

// 导入各分组规则
import { annotationRules } from './base-rules/annotation';
import { atRuleRules } from './base-rules/at-rule';
import { blockRules } from './base-rules/block';
import { colorRules } from './base-rules/color';
import { commentRules } from './base-rules/comment';
import { complexityRules } from './base-rules/complexity';
import { customPropertyRules } from './base-rules/custom-property';
import { declarationRules } from './base-rules/declaration';
import { fontRules } from './base-rules/font';
import { functionRules } from './base-rules/function';
import { generalRules } from './base-rules/general';
import { gridRules } from './base-rules/grid';
import { importRules } from './base-rules/import';
import { keyframeRules } from './base-rules/keyframe';
import { lengthRules } from './base-rules/length';
import { mediaRules } from './base-rules/media';
import { nestingRules } from './base-rules/nesting';
import { notationRules } from './base-rules/notation';
import { numberUnitRules } from './base-rules/number-unit';
import { orderRules } from './base-rules/order';
import { patternRules } from './base-rules/pattern';
import { propertyRules } from './base-rules/property';
import { ruleRules } from './base-rules/rule';
import { selectorRules } from './base-rules/selector';
import { shorthandRules } from './base-rules/shorthand';
import { stylisticRules } from './base-rules/stylistic';
import { syntaxRules } from './base-rules/syntax';
import { valueRules } from './base-rules/value';

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
