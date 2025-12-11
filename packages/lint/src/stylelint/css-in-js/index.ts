/**
 * CSS-in-JS Stylelint configuration
 * For CSS written in JS/TS template literals (styled-components / emotion / etc.)
 *
 * 配置 = core 规则 + 针对 JS/TS 的容器适配层：
 * - 默认内置 core 的所有规则
 * - 对 JS/TS 文件使用 postcss-css-in-js 解析模板字符串中的 CSS
 * - 尽量避免在纯 JS/TS 文件上产生误报
 *
 * 使用方式：
 * - React + styled-components: extends: ['@crucialy/lint/dist/stylelint/css-in-js']
 * - React + styled-components + CSS Modules: extends: ['@crucialy/lint/dist/stylelint/css-in-js', '@crucialy/lint/dist/stylelint/modules']
 *
 * 注意：
 * - 此配置会匹配所有 .js、.jsx、.ts、.tsx 文件
 * - 模板字符串中的变量插值会被忽略，避免误报
 * - 支持 styled-components、emotion、styled-jsx、linaria 等主流 CSS-in-JS 库
 */

import type { Config } from 'stylelint';
import core from '../core';

const cssInJs: Config = {
  // 先铺 core 的基础配置（plugins / rules / 可能存在的 overrides）
  ...core,

  overrides: [
    // 保留 core 中已有的 overrides（如果有的话）
    ...(Array.isArray(core.overrides) ? core.overrides : []),

    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',

      rules: {
        // 继承 core 当前的规则集
        ...(core.rules ?? {}),

        // 在 JS/TS 文件中放宽一些容易误报的规则
        // 大部分 JS/TS 文件不包含 CSS，postcss-css-in-js 解析时会返回空 CSS
        // 关闭 no-empty-source 避免在纯 JS/TS 文件上误报
        'no-empty-source': null,

        // CSS-in-JS 中模板字符串的变量插值会导致误报，关闭这些规则
        // 例如：const Styled = styled.div`color: ${props => props.color};`
        // 这里的 ${props => props.color} 无法被正确识别为有效的 CSS 值
        'declaration-property-value-no-unknown': null,
        // @规则描述符值在模板字符串中也可能包含变量，容易误报
        'at-rule-descriptor-value-no-unknown': null,
        // 媒体特性值在模板字符串中可能包含变量，容易误报
        'media-feature-name-value-no-unknown': null,
        // vendor prefix 检查在模板字符串的动态值中可能误报
        'value-no-vendor-prefix': null,
      },
    },
  ],
};

export default cssInJs;
