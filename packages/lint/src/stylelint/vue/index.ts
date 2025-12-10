/**
 * Vue Stylelint configuration
 * For <style> blocks in Vue SFC
 *
 * Vue 配置默认继承 core 配置，并添加 Vue 特有的容器解析层。
 * 如果需要使用 SCSS/Less/Modules，可以组合使用：
 * - Vue + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/vue']
 * - Vue + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/vue']
 *
 * Vue 特有的伪类和伪元素：
 * - :deep - 深度选择器（Vue 3）
 * - :global - 全局选择器（Vue 3）
 * - :slotted - 插槽选择器（Vue 3）
 * - ::v-deep - 深度选择器（Vue 2，已废弃但可能仍在使用）
 * - ::v-global - 全局选择器（Vue 2，已废弃但可能仍在使用）
 * - ::v-slotted - 插槽选择器（Vue 2，已废弃但可能仍在使用）
 */

import type { Config } from 'stylelint';
import core from '../core';

const vue: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        ...core.rules,
        // Vue 特有的伪类选择器
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted'],
          },
        ],
        // Vue 特有的伪元素选择器（Vue 2 兼容）
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
  ],
};

export default vue;
