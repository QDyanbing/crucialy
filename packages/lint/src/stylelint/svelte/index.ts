/**
 * Svelte Stylelint configuration
 * For <style> blocks in Svelte components
 *
 * Svelte 配置只负责容器解析层，不负责 CSS/SCSS/Less/Modules 规则。
 * 这些规则由 core/scss/less/modules 等配置组合提供。
 *
 * Svelte 特有的伪类：
 * - :global - 全局选择器，用于突破组件作用域限制
 *
 * 注意：
 * - Svelte 使用 :global(...) 语法，与 Vue 的 :deep/:global/:slotted 不同
 * - Svelte 没有类似 Vue 的 v-deep/v-slotted 等伪元素
 *
 * 使用方式：
 * - Svelte + 纯 CSS: extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/svelte']
 * - Svelte + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/svelte']
 * - Svelte + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/svelte']
 */

import type { Config } from 'stylelint';

const svelte: Config = {
  overrides: [
    {
      files: ['**/*.svelte'],
      customSyntax: 'postcss-html',
      rules: {
        // Svelte 允许 :global() 选择器
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

export default svelte;
