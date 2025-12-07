/**
 * Strict Stylelint configuration
 * 基于 base 配置，添加更严格的限制
 * - BEM 命名规范
 * - 限制复杂度和嵌套
 * - 更严格的代码风格
 *
 * 使用方式：
 * 1. 对象方式：const config = require('@crucialy/lint').stylelint.strict;
 * 2. Extends 方式：extends: ['@crucialy/lint/stylelint/base']，然后覆盖规则
 */

import type { Config } from 'stylelint';
import { base } from './base';

// 导入 Strict 规则分组（与 base-rules 结构对应）
import { complexityRules } from './strict-rules/complexity';
import { customPropertyRules } from './strict-rules/custom-property';
import { declarationRules } from './strict-rules/declaration';
import { fontRules } from './strict-rules/font';
import { functionRules } from './strict-rules/function';
import { generalRules } from './strict-rules/general';
import { importRules } from './strict-rules/import';
import { keyframeRules } from './strict-rules/keyframe';
import { mediaRules } from './strict-rules/media';
import { nestingRules } from './strict-rules/nesting';
import { numberUnitRules } from './strict-rules/number-unit';
import { orderRules } from './strict-rules/order';
import { patternRules } from './strict-rules/pattern';
import { selectorRules } from './strict-rules/selector';
import { stylisticRules } from './strict-rules/stylistic';

/**
 * Strict 配置 = Base 配置 + 严格限制
 */
export const strict: Config = {
  plugins: base.plugins,
  rules: {
    ...base.rules,
    ...complexityRules,
    ...customPropertyRules,
    ...declarationRules,
    ...fontRules,
    ...functionRules,
    ...generalRules,
    ...importRules,
    ...keyframeRules,
    ...mediaRules,
    ...nestingRules,
    ...numberUnitRules,
    ...orderRules,
    ...patternRules,
    ...selectorRules,
    ...stylisticRules,
  },
};
