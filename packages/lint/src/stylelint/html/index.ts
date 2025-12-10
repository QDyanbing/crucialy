/**
 * HTML Stylelint configuration
 * For <style> blocks in HTML files
 *
 * HTML 中的 <style> 块是标准 CSS，所以直接复用 core 配置即可。
 * 使用 postcss-html 解析 HTML 文件，自动提取 <style> 块中的 CSS 进行 lint。
 *
 * 设计说明：
 * - 使用 overrides 只针对 *.html 文件应用 postcss-html，不影响其他文件类型
 * - 完全复用 core 的所有规则（rules、plugins 等）
 * - HTML 的 <style> 块是标准 CSS，不需要额外的规则调整
 */

import type { Config } from 'stylelint';
import core from '../core';
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
