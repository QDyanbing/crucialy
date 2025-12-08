/**
 * Strict 属性顺序规则
 *
 * 覆盖属性排序规则（1条）
 * - 按功能分组排序
 */

import type { Config } from 'stylelint';

export const orderRules: Config['rules'] = {
  /**
   * @name order/properties-order
   * @description 指定属性的排列顺序；Strict 模式强制属性按功能分组排序，提高代码可读性和可维护性
   * @value array - 属性顺序数组（Strict 配置，覆盖 Base 的 null）
   * @secondary emptyLineBefore: 'always' - 每个属性分组前自动添加空行，提升代码可读性
   * @secondary unspecified: 'bottomAlphabetical' - 未指定的属性按字母顺序放在最后
   * @example ✅ 正确示例：
   *  - .button {
   *      position: relative;
   *
   *      display: flex;
   *      width: 100px;
   *      margin: 10px;
   *
   *      color: #000;
   *      font-size: 14px;
   *
   *      background: #fff;
   *      border: 1px solid #ccc;
   *
   *      transition: all 0.3s;
   *
   *      cursor: pointer;
   *    }
   * @example ❌ 错误示例：
   *  - .button {
   *      color: #000;
   *      position: relative;
   *      background: #fff;
   *      display: flex;
   *    }                                      (顺序不符合功能分组)
   *
   * 属性分组顺序：
   * 1. 定位（position, top, right, bottom, left, z-index, inset...）
   * 2. 盒模型（display, flex, grid, width, height, margin, padding, overflow...）
   * 3. 排版（color, font, line-height, text-align, vertical-align...）
   * 4. 视觉效果（background, border, box-shadow, opacity, filter...）
   * 5. 动画过渡（transition, animation, transform...）
   * 6. 其他（cursor, pointer-events, user-select...）
   */
  'order/properties-order': [
    [
      // 1. 定位相关
      {
        groupName: 'positioning',
        emptyLineBefore: 'always',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'inset',
          'inset-block',
          'inset-block-start',
          'inset-block-end',
          'inset-inline',
          'inset-inline-start',
          'inset-inline-end',
        ],
      },
      // 2. 盒模型
      {
        groupName: 'box-model',
        emptyLineBefore: 'always',
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
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'grid-area',
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
          'isolation',
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
          'overflow-wrap',
          'object-fit',
          'object-position',
        ],
      },
      // 3. 排版相关
      {
        groupName: 'typography',
        emptyLineBefore: 'always',
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
          'text-decoration-color',
          'text-decoration-line',
          'text-decoration-style',
          'text-decoration-thickness',
          'text-underline-offset',
          'text-indent',
          'text-overflow',
          'text-shadow',
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
        emptyLineBefore: 'always',
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
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-color',
          'outline-style',
          'outline-width',
          'outline-offset',
          'box-shadow',
          'opacity',
          'visibility',
          'filter',
          'backdrop-filter',
          'clip-path',
          'mask',
          'mask-image',
          'mask-mode',
          'mask-repeat',
          'mask-position',
          'mask-size',
          'mask-clip',
          'mask-origin',
          'mask-composite',
        ],
      },
      // 5. 动画和过渡
      {
        groupName: 'animation',
        emptyLineBefore: 'always',
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
          'transform-style',
          'perspective',
          'perspective-origin',
        ],
      },
      // 6. 其他
      {
        groupName: 'misc',
        emptyLineBefore: 'always',
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
  ],
};
