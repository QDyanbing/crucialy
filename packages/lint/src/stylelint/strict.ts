/**
 * Strict Stylelint configuration
 * 基于 base 配置，添加更严格的限制
 * - BEM 命名规范
 * - 限制复杂度和嵌套
 * - 更严格的代码风格
 *
 * 使用方式：
 * 1. 对象方式：const config = require('@crucialy/lint').stylelint.strict;
 * 2. Extends 方式：extends: ['@crucialy/lint/stylelint/base']，然后覆盖规则
 */

import type { Config } from 'stylelint';
import { base } from './base';

/**
 * Strict 配置 = Base 配置 + 严格限制
 */
export const strict: Config = {
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    ...base.rules,

    // ============================================
    // 命名规范 - 强制 BEM
    // ============================================

    /**
     * selector-class-pattern
     * 强制 BEM 命名规范（Block__Element--Modifier）
     * ✅ .block {}
     * ✅ .block__element {}
     * ✅ .block--modifier {}
     * ✅ .block__element--modifier {}
     * ❌ .camelCase {}
     * ❌ .Block {}
     */
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        message: 'Expected class selector to follow BEM naming (block__element--modifier)',
      },
    ],

    /**
     * selector-id-pattern
     * ID 使用 kebab-case
     * ✅ #my-id
     * ❌ #myId
     * ❌ #MyId
     */
    'selector-id-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case',
      },
    ],

    /**
     * custom-property-pattern
     * 自定义属性使用 kebab-case
     * ✅ --my-color
     * ❌ --myColor
     */
    'custom-property-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property to be kebab-case',
      },
    ],

    /**
     * keyframes-name-pattern
     * keyframes 使用 kebab-case
     * ✅ @keyframes slide-in {}
     * ❌ @keyframes slideIn {}
     */
    'keyframes-name-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case',
      },
    ],

    /**
     * custom-media-pattern
     * 自定义 media 使用 kebab-case
     * ✅ @custom-media --small-screen
     * ❌ @custom-media --smallScreen
     */
    'custom-media-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message: 'Expected custom media query name to be kebab-case',
      },
    ],

    // ============================================
    // 复杂度限制
    // ============================================

    /**
     * max-nesting-depth
     * 最大嵌套深度 3 层
     * ✅ .a { .b { .c {} } }
     * ❌ .a { .b { .c { .d {} } } }
     */
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],

    /**
     * selector-max-id
     * 禁止 ID 选择器
     * ✅ .class {}
     * ❌ #id {}
     */
    'selector-max-id': 0,

    /**
     * selector-max-specificity
     * 限制选择器特异性 (id, class, type)
     * 最多 3 个类选择器的特异性
     * ✅ .a.b.c {}
     * ❌ .a.b.c.d {}
     */
    'selector-max-specificity': '0,3,0',

    /**
     * selector-max-compound-selectors
     * 限制复合选择器数量（最多 3 层）
     * ✅ .a .b .c {}
     * ❌ .a .b .c .d {}
     */
    'selector-max-compound-selectors': 3,

    /**
     * selector-max-type
     * 限制类型选择器数量（推荐少用）
     * ✅ div {}
     * ✅ div.class {}
     * ❌ div span p {}
     */
    'selector-max-type': [2, { ignore: ['child', 'descendant', 'compounded'] }],

    /**
     * selector-max-universal
     * 禁止通配符选择器
     * ✅ .class {}
     * ❌ * {}
     * ❌ .class * {}
     */
    'selector-max-universal': 0,

    /**
     * selector-no-qualifying-type
     * 禁止选择器限定类型（避免过度特异性）
     * ✅ .button {}
     * ❌ button.button {}
     * ❌ div#id {}
     */
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class'],
      },
    ],

    /**
     * declaration-no-important
     * 禁止使用 !important
     * ✅ color: red;
     * ❌ color: red !important;
     */
    'declaration-no-important': true,

    /**
     * selector-max-class
     * 限制类选择器数量（防止过度嵌套）
     * ✅ .a.b.c {}
     * ❌ .a.b.c.d.e {}
     */
    'selector-max-class': 4,

    // ============================================
    // 更严格的代码风格
    // ============================================

    /**
     * color-function-notation
     * 禁用（因为 Strict 只允许 hex 颜色）
     */
    'color-function-notation': null,

    /**
     * font-family-no-missing-generic-family-keyword
     * Strict 模式要求通用字体族
     * ✅ font-family: Arial, sans-serif;
     * ❌ font-family: Arial;
     * ❌ font-family: 'iconfont';
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * selector-type-no-unknown
     * Strict 模式完全禁止未知类型选择器
     * ✅ div {}
     * ❌ unknown-element {}
     * ❌ my-component {} (web components 也不允许)
     */
    'selector-type-no-unknown': true,

    /**
     * no-descending-specificity
     * Strict 模式禁止降序特异性（防止样式覆盖问题）
     * ✅ .a {} .a.b {}
     * ❌ .a.b {} .a {}
     */
    'no-descending-specificity': true,

    // ============================================
    // 选择器限制
    // ============================================

    /**
     * selector-max-combinators
     * 限制组合器数量（最多3个）
     * ✅ .a > .b + .c {}
     * ❌ .a > .b + .c ~ .d {}
     */
    'selector-max-combinators': 3,

    /**
     * selector-max-pseudo-class
     * 限制伪类数量（最多3个）
     * ✅ a:hover:focus:active {}
     * ❌ a:hover:focus:active:visited {}
     */
    'selector-max-pseudo-class': 3,

    /**
     * selector-max-attribute
     * 限制属性选择器数量（最多2个）
     * ✅ [type="text"][disabled] {}
     * ❌ [type="text"][disabled][required] {}
     */
    'selector-max-attribute': 2,

    /**
     * selector-nested-pattern
     * 嵌套选择器必须以 & 开头（BEM 风格）
     * ✅ .block { &__element {} }
     * ❌ .block { .element {} }
     */
    'selector-nested-pattern': '^&',

    // ============================================
    // 空行要求（更严格）
    // ============================================

    /**
     * declaration-empty-line-before
     * 声明前需要空行（提高可读性）
     * ✅
     * .a {
     *   color: red;
     *
     *   background: blue;
     * }
     */
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-declaration'],
        ignore: ['inside-single-line-block'],
      },
    ],

    /**
     * custom-property-empty-line-before
     * 自定义属性前需要空行
     */
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    // ============================================
    // 禁止不推荐的用法
    // ============================================

    /**
     * function-disallowed-list
     * 禁止颜色函数（只允许 hex 表示颜色）
     * ✅ color: #000;
     * ✅ color: #00000080;
     * ❌ color: rgb(0 0 0);
     * ❌ color: rgba(0, 0, 0, 0.5);
     * ❌ color: hsl(0, 0%, 0%);
     */
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],

    /**
     * selector-disallowed-list
     * 禁止低优先级通配符选择器
     */
    'selector-disallowed-list': ['/^\\*/'],

    /**
     * declaration-property-unit-disallowed-list
     * 禁止某些属性使用某些单位
     * 例如：禁止 font-size 使用 px（推荐 rem/em）
     */
    'declaration-property-unit-disallowed-list': {
      'font-size': ['px'],
      '/^animation/': ['ms'],
    },

    /**
     * time-min-milliseconds
     * 动画最小时长 100ms（避免过快动画）
     * ✅ transition: 100ms;
     * ❌ transition: 50ms;
     */
    'time-min-milliseconds': 100,

    /**
     * selector-max-empty-lines
     * 选择器中禁止空行
     * ✅ .a, .b {}
     * ❌ .a,
     *
     *    .b {}
     */
    '@stylistic/selector-max-empty-lines': 0,

    /**
     * value-list-max-empty-lines
     * 值列表中禁止空行
     */
    '@stylistic/value-list-max-empty-lines': 0,

    /**
     * function-max-empty-lines
     * 函数中禁止空行
     */
    '@stylistic/function-max-empty-lines': 0,

    /**
     * max-line-length
     * 限制行长度 120 字符
     */
    '@stylistic/max-line-length': 120,

    // ============================================
    // 属性顺序 - 按功能分组
    // ============================================

    /**
     * order/properties-order
     * 强制属性按功能分组排序
     * 顺序：定位 → 盒模型 → 排版 → 视觉 → 其他
     */
    'order/properties-order': [
      [
        // 1. 定位相关
        {
          groupName: 'positioning',
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'inset',
            'inset-block',
            'inset-inline',
          ],
        },
        // 2. 盒模型
        {
          groupName: 'box-model',
          properties: [
            'display',
            'flex',
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'grid',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'gap',
            'row-gap',
            'column-gap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'justify-items',
            'justify-self',
            'place-content',
            'place-items',
            'place-self',
            'order',
            'float',
            'clear',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'overflow',
            'overflow-x',
            'overflow-y',
          ],
        },
        // 3. 排版相关
        {
          groupName: 'typography',
          properties: [
            'color',
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-transform',
            'white-space',
            'word-break',
            'word-wrap',
            'vertical-align',
          ],
        },
        // 4. 视觉效果
        {
          groupName: 'visual',
          properties: [
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'background-clip',
            'background-origin',
            'background-attachment',
            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-radius',
            'box-shadow',
            'opacity',
            'visibility',
            'filter',
            'backdrop-filter',
          ],
        },
        // 5. 动画和过渡
        {
          groupName: 'animation',
          properties: [
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',
            'transform',
            'transform-origin',
          ],
        },
        // 6. 其他
        {
          groupName: 'misc',
          properties: [
            'appearance',
            'content',
            'cursor',
            'pointer-events',
            'resize',
            'user-select',
            'will-change',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ] as any,
  },
};
