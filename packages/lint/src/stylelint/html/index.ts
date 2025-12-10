/**
 * HTML Stylelint configuration
 * For <style> blocks in HTML files
 *
 * HTML 中的 <style> 块是标准 CSS，所以直接复用 core 配置即可。
 * postcss-html 会自动解析 HTML 文件中的 <style> 块，只对 CSS 部分进行 lint。
 *
 * 示例：
 * ```html
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <style>
 *     .button {
 *       color: red;
 *     }
 *   </style>
 * </head>
 * </html>
 * ```
 */

import type { Config } from 'stylelint';
import core from '../core';

/**
 * HTML 配置 = Core 配置 + 针对 *.html 的 postcss-html customSyntax
 * 不修改全局 customSyntax，只对 html 文件生效
 */
const html: Config = {
  ...core,
  overrides: [
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};

export default html;
