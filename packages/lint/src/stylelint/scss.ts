/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 */

import type { StylelintConfig } from './types';

export const scss: StylelintConfig = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    // TODO: M5 - Implement SCSS rules
  },
};

