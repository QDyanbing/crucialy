/**
 * SCSS Stylelint configuration
 * Uses postcss-scss + stylelint-scss
 */

import type { Config } from 'stylelint';

export const scss: Config = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    // TODO: M5 - Implement SCSS rules
  },
};
