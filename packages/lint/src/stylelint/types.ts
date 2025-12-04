/**
 * Type definitions for Stylelint configurations
 */

export type StylelintRuleSeverity = 'error' | 'warning';

export type StylelintRuleValue =
  | null
  | boolean
  | string
  | number
  | Array<string | number>
  | Record<string, unknown>;

export type StylelintRule =
  | StylelintRuleValue
  | [StylelintRuleValue, Record<string, unknown>];

export interface StylelintConfig {
  rules?: Record<string, StylelintRule>;
  extends?: string | string[];
  plugins?: string[];
  customSyntax?: string;
  ignoreFiles?: string | string[];
  overrides?: Array<{
    files: string | string[];
    customSyntax?: string;
    rules?: Record<string, StylelintRule>;
  }>;
}

