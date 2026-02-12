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
    // Alpha / Opacity 相关规则
    ...alphaRules,
    // Annotation 相关规则
    ...annotationRules,
    // At-rule 相关规则
    ...atRuleRules,
    // Block 相关规则
    ...blockRules,
    // Color 相关规则
    ...colorRules,
    // Comment 相关规则
    ...commentRules,
    // Complexity 复杂度规则
    ...complexityRules,
    // Custom Property 相关规则
    ...customPropertyRules,
    // Declaration 相关规则
    ...declarationRules,
    // Font 相关规则
    ...fontRules,
    // Function 相关规则
    ...functionRules,
    // General 通用规则
    ...generalRules,
    // Grid 相关规则
    ...gridRules,
    // Import 相关规则
    ...importRules,
    // Keyframe 相关规则
    ...keyframeRules,
    // Length 相关规则
    ...lengthRules,
    // Media 相关规则
    ...mediaRules,
    // Nesting 相关规则
    ...nestingRules,
    // Number 相关规则
    ...numberRules,
    // Order 顺序规则
    ...orderRules,
    // Pattern 命名模式规则
    ...patternRules,
    // Property 相关规则
    ...propertyRules,
    // Rule 相关规则
    ...ruleRules,
    // Selector 相关规则
    ...selectorRules,
    // Shorthand Property 相关规则
    ...shorthandRules,
    // String 相关规则
    ...stringRules,
    // Stylistic 格式化规则
    ...stylisticRules,
    // Syntax 相关规则
    ...syntaxRules,
    // Time 相关规则
    ...timeRules,
    // Unit 相关规则
    ...unitRules,
    // Value 相关规则
    ...valueRules,
  },
};

export default core;
