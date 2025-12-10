/**
 * Vue Stylelint configuration
 * For <style> blocks in Vue SFC
 *
 * Vue 配置只负责容器解析层，不负责 CSS/SCSS/Less/Modules 规则。
 * 这些规则由 core/scss/less/modules 等配置组合提供。
 *
 * Vue 特有的伪类和伪元素：
 * - :deep - 深度选择器（Vue 3）
 * - :global - 全局选择器（Vue 3）
 * - :slotted - 插槽选择器（Vue 3）
 * - ::v-deep - 深度选择器（Vue 2，已废弃但可能仍在使用）
 * - ::v-global - 全局选择器（Vue 2，已废弃但可能仍在使用）
 * - ::v-slotted - 插槽选择器（Vue 2，已废弃但可能仍在使用）
 *
 * 使用方式：
 * - Vue + 纯 CSS: extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/vue']
 * - Vue + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/vue']
 * - Vue + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/vue']
 */

import type { Config } from 'stylelint';

const vue: Config = {
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
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
