/**
 * Angular Stylelint configuration
 * For component style files: *.component.css / *.component.scss / *.component.less
 *
 * Angular 配置只负责「组件样式适配层」，不负责 CSS/SCSS/Less/Modules 规则本身。
 * 这些规则由 core/scss/less/modules 等配置组合提供。
 *
 * Angular 常见特性：
 * - :host / :host-context 选择器，用于作用域内样式控制
 *
 * 使用方式示例：
 * - Angular + 纯 CSS: extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/angular']
 * - Angular + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/angular']
 * - Angular + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/angular']
 */

import type { Config } from 'stylelint';

const angular: Config = {
  overrides: [
    {
      files: ['**/*.component.css', '**/*.component.scss', '**/*.component.less'],
      // 不设置 customSyntax，让 core/scss/less 自己控制解析器
      rules: {
        // Angular 组件样式中常用的伪类选择器
        // :host / :host-context 用于在组件宿主元素和其上下文中应用样式
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['host', 'host-context'],
          },
        ],
      },
    },
  ],
};

export default angular;
