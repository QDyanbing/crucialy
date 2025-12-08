/**
 * Core Stylelint configuration
 * All core rules explicitly configured
 * Zero preset policy
 *
 * This configuration merges base rules with strict rules:
 * - Base rules provide fundamental linting checks
 * - Strict rules add enhanced restrictions (BEM naming, complexity limits, etc.)
 * - When rules overlap, strict rules take precedence
 */

import type { Config } from 'stylelint';

// 导入各分组规则
import alphaRules from './alpha';
import annotationRules from './annotation';
import atRuleRules from './at-rule';
import blockRules from './block';
import colorRules from './color';
import commentRules from './comment';
import complexityRules from './complexity';
import customPropertyRules from './custom-property';
import declarationRules from './declaration';
import fontRules from './font';
import functionRules from './function';
import generalRules from './general';
import gridRules from './grid';
import importRules from './import';
import keyframeRules from './keyframe';
import lengthRules from './length';
import mediaRules from './media';
import nestingRules from './nesting';
import numberRules from './number';
import orderRules from './order';
import patternRules from './pattern';
import propertyRules from './property';
import ruleRules from './rule';
import selectorRules from './selector';
import shorthandRules from './shorthand';
import stringRules from './string';
import stylisticRules from './stylistic';
import syntaxRules from './syntax';
import timeRules from './time';
import unitRules from './unit';
import valueRules from './value';

/**
 * Core 配置
 * 合并所有规则分组
 */
const core: Config = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    ...alphaRules,
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
    ...numberRules,
    ...orderRules,
    ...patternRules,
    ...propertyRules,
    ...ruleRules,
    ...selectorRules,
    ...shorthandRules,
    ...stringRules,
    ...stylisticRules,
    ...syntaxRules,
    ...timeRules,
    ...unitRules,
    ...valueRules,
  },
};

export default core;
