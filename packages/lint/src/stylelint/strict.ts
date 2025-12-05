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

// 导入 Strict 规则分组
import { strictComplexityRules } from './strict-rules/complexity';
import { strictNamingRules } from './strict-rules/naming';
import { strictOrderRules } from './strict-rules/order';
import { strictRestrictionsRules } from './strict-rules/restrictions';
import { strictSelectorRules } from './strict-rules/selector';
import { strictSpacingRules } from './strict-rules/spacing';
import { strictStyleRules } from './strict-rules/style';

/**
 * Strict 配置 = Base 配置 + 严格限制
 */
export const strict: Config = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    ...base.rules,
    ...strictComplexityRules,
    ...strictNamingRules,
    ...strictOrderRules,
    ...strictRestrictionsRules,
    ...strictSelectorRules,
    ...strictSpacingRules,
    ...strictStyleRules,
  },
};
