/**
 * Svelte Stylelint configuration
 * For <style> blocks in Svelte components
 *
 * Svelte 配置默认继承 core 配置，并添加 Svelte 特有的容器解析层。
 * 如果需要使用 SCSS/Less/Modules，可以组合使用：
 * - Svelte + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/svelte']
 * - Svelte + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/svelte']
 *
 * Svelte 特有的伪类：
 * - :global - 全局选择器，用于突破组件作用域限制
 *
 * 注意：
 * - Svelte 使用 :global(...) 语法，与 Vue 的 :deep/:global/:slotted 不同
 * - Svelte 没有类似 Vue 的 v-deep/v-slotted 等伪元素
 */

import type { Config } from 'stylelint';
import core from '../core';

const svelte: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.svelte'],
      customSyntax: 'postcss-html',
      rules: {
        ...core.rules,
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
