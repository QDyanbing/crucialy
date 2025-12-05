/**
 * Strict 属性顺序规则
 *
 * 包含属性排序规则（1条）
 * - 按功能分组排序
 */

import type { Config } from 'stylelint';

export const orderRules: Config['rules'] = {
  /**
   * order/properties-order
   * 强制属性按功能分组排序
   *
   * 说明：将 CSS 属性按功能分为 6 大类，每类内部按字母排序
   * - 1. 定位（position, top, z-index...）
   * - 2. 盒模型（display, flex, grid, width, margin, padding...）
   * - 3. 排版（color, font, text-align...）
   * - 4. 视觉效果（background, border, box-shadow...）
   * - 5. 动画过渡（transition, animation, transform...）
   * - 6. 其他（cursor, pointer-events...）
   *
   * 优势：
   * - 提高代码可读性
   * - 便于查找和维护
   * - 团队统一规范
   *
   * 顺序：定位 → 盒模型 → 排版 → 视觉 → 动画 → 其他
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
};

