/**
 * Angular Stylelint configuration
 * For component style files: *.component.css / *.component.scss / *.component.less
 *
 * Angular 配置默认继承 core 配置，并添加 Angular 特有的组件样式适配层。
 * 如果需要使用 SCSS/Less/Modules，可以组合使用：
 * - Angular + SCSS: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/angular']
 * - Angular + SCSS + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/modules', '@crucialy/lint/dist/stylelint/angular']
 *
 * Angular 常见特性：
 * - :host / :host-context 选择器，用于作用域内样式控制
 */

import type { Config } from 'stylelint';
import core from '../core';

const angular: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.component.css', '**/*.component.scss', '**/*.component.less'],
      // 不设置 customSyntax，让 core/scss/less 自己控制解析器
      rules: {
        ...core.rules,
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
