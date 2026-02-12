/**
 * Core Stylelint 核心配置
 * 所有核心规则显式配置
 * 零预设策略
 *
 * 这是统一的核心配置，结合了基础的代码检查规则和更严格的代码质量要求。
 * 包含：
 * - 基础 CSS 代码检查规则（验证、语法检查等）
 * - 更严格的代码质量规则（BEM 命名规范、复杂度限制、格式化要求等）
 * - 最佳实践和现代 CSS 特性支持
 *
 * @module @crucialy/lint/stylelint/core
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
