/**
 * CSS Modules Stylelint configuration
 * For .module.css, .module.scss, .module.less files
 *
 * CSS Modules 特性：
 * - :local - 局部作用域选择器（默认所有类都是 :local）
 * - :global - 全局作用域选择器
 * - composes - 组合其他类的属性，用于复用样式
 *
 * 示例：
 * ```css
 * .localClass {
 *   color: red;
 * }
 *
 * :global(.globalClass) {
 *   color: blue;
 * }
 *
 * .composedClass {
 *   composes: localClass from './other.module.css';
 *   font-size: 14px;
 * }
 * ```
 */

import type { Config } from 'stylelint';
import core from '../core';

/**
 * CSS Modules 配置 = Core 配置 + CSS Modules 规则调整
 */
const modules: Config = {
  ...core,
  rules: {
    ...core.rules,

    // 调整与 CSS Modules 语法相关的 core 规则

    // core 配置中 property-no-unknown: true，但 CSS Modules 有专用的 composes 属性
    // composes 是 CSS Modules 的特殊属性，用于组合其他类的样式，不是标准 CSS 属性
    // 需要在 property-no-unknown 中忽略 composes，避免误报
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],

    // core 配置中 selector-pseudo-class-no-unknown: true，但 CSS Modules 有专用的 :local 和 :global 伪类
    // :local 和 :global 是 CSS Modules 的特殊伪类选择器，用于控制样式的作用域
    // :local - 局部作用域，默认所有类都是局部的
    // :global - 全局作用域，样式会全局生效
    // 需要在 selector-pseudo-class-no-unknown 中忽略这些伪类，避免误报
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['local', 'global'],
      },
    ],

    // core 配置中 value-keyword-case: ['lower', { camelCaseSvgKeywords: true }]
    // 但 CSS Modules 的 composes 属性值通常是类名，可能包含大写字母（如 camelCase）
    // composes 的值不应该被 value-keyword-case 规则检查，因为它们是类名而不是 CSS 关键字
    // 示例：composes: classNameFromOtherModule from './other.module.css';
    // 需要在 value-keyword-case 中忽略 composes 属性，避免误报
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: ['composes'],
      },
    ],
  },
};

export default modules;
