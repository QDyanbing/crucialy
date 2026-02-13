/**
 * @crucialy/lint
 * Opinionated lint configurations for ESLint, Stylelint, and Prettier
 *
 * @module @crucialy/lint
 */

// Export Stylelint configurations
export * as stylelint from './stylelint';

// Export Prettier configuration
export { default as prettier } from './prettier';

// Export ESLint configurations
export * as eslint from './eslint';

// Re-export types for convenience
export type { Linter } from 'eslint';
export type { Config as PrettierConfig } from 'prettier';
export type { Config as StylelintConfig } from 'stylelint';
