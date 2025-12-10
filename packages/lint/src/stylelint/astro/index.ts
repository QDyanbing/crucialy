/**
 * Astro Stylelint configuration
 * For <style> blocks in .astro files
 *
 * Astro 配置只负责容器解析层，不负责 CSS/SCSS/Less/Modules 规则。
 * 这些规则由 core/scss/less/modules 等配置组合提供。
 *
 * Astro 常见特性：
 * - <style> 中可以使用 :global() 选择器突破作用域
 *
 * 使用方式示例：
 * - Astro + 纯 CSS: extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/astro']
 * - Astro + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/astro']
 * - Astro + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/astro']
 */

import type { Config } from 'stylelint';

const astro: Config = {
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
      rules: {
        // Astro 允许 :global() 选择器，用于突破作用域
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
};

export default astro;
