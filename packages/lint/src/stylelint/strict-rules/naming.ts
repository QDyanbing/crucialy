/**
 * Strict 命名规范规则
 *
 * 包含命名规范相关规则（5条）
 * - BEM 命名规范
 * - kebab-case 命名
 */

import type { Config } from 'stylelint';

export const strictNamingRules: Config['rules'] = {
  /**
   * selector-class-pattern
   * 强制 BEM 命名规范（Block__Element--Modifier）
   *
   * 说明：BEM 是一种 CSS 命名方法论
   * - Block：独立的功能单元（如 .button）
   * - Element：块的组成部分（如 .button__icon）
   * - Modifier：块或元素的变体（如 .button--primary）
   *
   * BEM 的优势：
   * - 命名清晰、语义化
   * - 避免样式冲突
   * - 组件化开发友好
   *
   * ✅ 正确示例：.block {}
   * ✅ 正确示例：.block__element {}
   * ✅ 正确示例：.block--modifier {}
   * ✅ 正确示例：.block__element--modifier {}
   * ❌ 错误示例：.camelCase {}
   * ❌ 错误示例：.Block {}
   */
  'selector-class-pattern': [
    '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    {
      message: 'Expected class selector to follow BEM naming (block__element--modifier)',
    },
  ],

  /**
   * selector-id-pattern
   * ID 选择器使用 kebab-case
   *
   * 说明：ID 选择器应使用小写字母和连字符
   * - 推荐少用 ID 选择器（优先使用 class）
   * - 如果必须使用，保持命名一致性
   *
   * ✅ 正确示例：#my-id
   * ✅ 正确示例：#header-nav
   * ❌ 错误示例：#myId
   * ❌ 错误示例：#MyId
   */
  'selector-id-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected id selector to be kebab-case',
    },
  ],

  /**
   * custom-property-pattern
   * CSS 自定义属性使用 kebab-case
   *
   * 说明：CSS 变量（自定义属性）命名规范
   * - 以 -- 开头
   * - 使用小写字母和连字符
   *
   * ✅ 正确示例：--my-color
   * ✅ 正确示例：--primary-bg-color
   * ❌ 错误示例：--myColor
   * ❌ 错误示例：--MyColor
   */
  'custom-property-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom property to be kebab-case',
    },
  ],

  /**
   * keyframes-name-pattern
   * 动画名称使用 kebab-case
   *
   * 说明：@keyframes 动画命名规范
   *
   * ✅ 正确示例：@keyframes slide-in {}
   * ✅ 正确示例：@keyframes fade-out {}
   * ❌ 错误示例：@keyframes slideIn {}
   * ❌ 错误示例：@keyframes SlideIn {}
   */
  'keyframes-name-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected keyframe name to be kebab-case',
    },
  ],

  /**
   * custom-media-pattern
   * 自定义媒体查询名称使用 kebab-case
   *
   * 说明：@custom-media 命名规范
   *
   * ✅ 正确示例：@custom-media --small-screen (width < 768px);
   * ✅ 正确示例：@custom-media --mobile-device (width < 480px);
   * ❌ 错误示例：@custom-media --smallScreen (width < 768px);
   * ❌ 错误示例：@custom-media --SmallScreen (width < 768px);
   */
  'custom-media-pattern': [
    '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    {
      message: 'Expected custom media query name to be kebab-case',
    },
  ],
};

