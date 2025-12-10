/**
 * CSS Modules Stylelint configuration
 * For .module.css, .module.scss, .module.less files
 *
 * CSS Modules 特性：
 * - :local - 局部作用域选择器（默认所有类都是 :local）
 * - :global - 全局作用域选择器
 * - :import - 导入其他 CSS Modules 文件
 * - :export - 导出变量给 JS/TS 使用
 * - composes - 组合其他类的属性，用于复用样式
 * - compose-with - 组合其他类的属性（别名）
 *
 * 示例：
 * ```css
 * .buttonPrimary {
 *   color: red;
 * }
 *
 * .block__element--modifier {
 *   color: blue;
 * }
 *
 * :global(.globalClass) {
 *   color: green;
 * }
 *
 * :export {
 *   colorPrimary: red;
 * }
 *
 * :import("./vars.css") {
 *   color-primary: color-primary;
 * }
 *
 * .composedClass {
 *   composes: buttonPrimary from './button.module.css';
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

    // core 配置中 selector-class-pattern 强制使用 BEM 命名规范
    // 但在 CSS Modules 中，很多人使用 camelCase 命名（如 .buttonPrimary），然后在 JS 中使用 styles.buttonPrimary
    // 所以 CSS Modules 中允许 BEM 或 camelCase 两种命名方式
    // 正则解释：
    // - 左半部分：原有的 BEM 正则（block__element--modifier）
    // - 右半部分：[a-z][a-zA-Z0-9]+ - camelCase（首字母小写，后面驼峰，如 buttonPrimary）
    'selector-class-pattern': [
      '^(?:[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}|[a-z][a-zA-Z0-9]+)$',
      {
        resolveNestedSelectors: true,
        message:
          'CSS/SCSS/Less Modules 中 class 建议使用 BEM（block__element--modifier）或 camelCase（fooBar）命名',
      },
    ],

    // core 配置中 selector-pseudo-class-no-unknown: true，但 CSS Modules 有专用的伪类
    // :local - 局部作用域，默认所有类都是局部的
    // :global - 全局作用域，样式会全局生效
    // :import - 导入其他 CSS Modules 文件
    // :export - 导出变量给 JS/TS 使用
    // 需要在 selector-pseudo-class-no-unknown 中忽略这些伪类，避免误报
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['local', 'global', 'import', 'export'],
      },
    ],

    // core 配置中 property-no-unknown: true，但 CSS Modules 有专用的属性和选择器
    // composes - 组合其他类的样式，用于复用样式
    // compose-with - 组合其他类的样式（composes 的别名）
    // :export 和 :import 选择器中使用的属性也需要被识别
    // 这些属性不是标准 CSS 属性，需要在 property-no-unknown 中忽略，避免误报
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', ':import'],
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
        ignoreProperties: ['composes', 'compose-with'],
      },
    ],
  },
};

export default modules;
