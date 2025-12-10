/**
 * Astro Stylelint configuration
 * For <style> blocks in .astro files
 *
 * Astro 配置默认继承 core 配置，并添加 Astro 特有的容器解析层。
 * 如果需要使用 SCSS/Less/Modules，可以组合使用：
 * - Astro + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/astro']
 * - Astro + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/astro']
 *
 * Astro 常见特性：
 * - <style> 中可以使用 :global() 选择器突破作用域
 */

import type { Config } from 'stylelint';
import core from '../core';

const astro: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
      rules: {
        ...core.rules,
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
