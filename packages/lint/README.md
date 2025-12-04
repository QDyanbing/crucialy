# @crucialy/lint

ESLint、Stylelint 和 Prettier 的开箱即用配置。

## 特性

- 🎯 预设合理的默认配置
- 📦 支持 React 和 Vue 项目
- 🎨 集成 Prettier 代码格式化
- 🔧 支持 Stylelint CSS 规范
- 🚀 开箱即用，零配置起步

## 安装

```bash
pnpm add -D @crucialy/lint
```

## 使用方式

### React ESLint

```js
// .eslintrc.js
module.exports = {
  extends: [
    require.resolve('@crucialy/lint/eslint-react'),
    // 可以在这里追加自己的配置
  ],
  rules: {
    // 可以覆盖或添加规则
  },
};
```

### Vue ESLint

```js
// .eslintrc.js
module.exports = {
  extends: [
    require.resolve('@crucialy/lint/eslint-vue'),
    // 可以在这里追加自己的配置
  ],
  rules: {
    // 可以覆盖或添加规则
  },
};
```

### Stylelint

`@crucialy/lint` 提供了多种 Stylelint 配置，可以根据项目技术栈选择：

| 配置 | 说明 | 适用场景 |
|------|------|----------|
| `stylelint/base` | 纯 CSS 通用配置 | 所有项目（默认） |
| `stylelint/scss` | SCSS / Sass 配置 | SCSS 项目 |
| `stylelint/less` | Less 配置 | Less 项目 |
| `stylelint/css-modules` | CSS Modules 配置 | CSS Modules 项目 |
| `stylelint/vue` | Vue SFC 配置 | Vue 项目 |
| `stylelint/css-in-js` | CSS-in-JS 配置 | styled-components、emotion 等 |
| `stylelint/all` | 全开大合集 | 混合技术栈项目 |

#### 1. 基础使用（纯 CSS）

```bash
# 安装依赖
pnpm add -D stylelint stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/base')],
};
```

#### 2. SCSS 项目

```bash
# 安装依赖
pnpm add -D stylelint postcss-scss stylelint-scss stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/scss')],
};
```

#### 3. Less 项目

```bash
# 安装依赖
pnpm add -D stylelint postcss-less stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/less')],
};
```

#### 4. Vue 项目

```bash
# 安装依赖
pnpm add -D stylelint postcss-html stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/vue')],
};
```

#### 5. CSS-in-JS 项目

```bash
# 安装依赖
pnpm add -D stylelint @stylelint/postcss-css-in-js stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/css-in-js')],
};
```

#### 6. 混合技术栈（全开）

```bash
# 安装所有依赖
pnpm add -D stylelint postcss-html postcss-scss postcss-less @stylelint/postcss-css-in-js stylelint-scss stylelint-order stylelint-declaration-block-no-ignored-properties
```

```js
// .stylelintrc.js
module.exports = {
  extends: [require.resolve('@crucialy/lint/stylelint/all')],
};
```

#### 7. 添加脚本

```json
// package.json
{
  "scripts": {
    "lint:css": "stylelint \"**/*.{css,scss,less,vue}\" --fix"
  }
}
```

#### 8. 配置特性

**规则覆盖：**
- `base` / `less` / `css-modules` / `vue` / `css-in-js`: **190 条规则**（189 条内置 + 1 条插件）
- `scss`: **249 条规则**（189 条内置 + 40 条 SCSS + 1 条插件）
- `all`: **249 条规则**（支持所有技术栈）

**技术栈支持：**
- ✅ 纯 CSS
- ✅ SCSS / Sass（`$变量`、`@mixin`、`@function`、`%占位符` 等）
- ✅ Less（`@变量`、嵌套、混合等）
- ✅ CSS-in-JS（styled-components、emotion、Linaria 等）
- ✅ CSS Modules（`:global`、`:local`、`:export`、`composes`）
- ✅ Vue SFC（`<style>`、`:deep`、`::v-deep`）
- ✅ Tailwind CSS（`@tailwind`、`@apply`、`theme()`）
- ✅ 小程序（rpx 单位、自定义标签）

**其他特性：**
- ✅ **170+ 个 CSS 属性**的逻辑排序（定位 → 布局 → 盒模型 → 样式 → 动画）
- ✅ 检测被忽略的属性（如 `display: inline` 时的 `width`）
- ✅ 类名支持 kebab-case 和 lowerCamelCase
- ✅ 禁止使用 ID 选择器
- ✅ 限制选择器复杂度和特异性
- ✅ 每条规则都有详细注释和 ✅ ❌ 示例

### Prettier

#### 1. 安装依赖

```bash
# 安装 prettier
pnpm add -D prettier

# 可选：安装插件（按需选择）
pnpm add -D prettier-plugin-organize-imports prettier-plugin-packagejson prettier-plugin-organize-attributes prettier-plugin-tailwindcss
```

#### 2. 配置文件

```js
// .prettierrc.js
// Prettier 不支持 extends，需要直接导入并扩展
module.exports = {
  ...require('@crucialy/lint/prettier'),
  // 可以在这里追加自己的配置
  // printWidth: 120,
};
```

#### 3. 添加脚本

```json
// package.json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

#### 4. 配置忽略文件（可选）

```
// .prettierignore
node_modules
dist
build
coverage
*.min.js
pnpm-lock.yaml
```

#### 5. 插件说明

配置中包含以下插件（可选安装）：

- `prettier-plugin-organize-imports` - 自动排序 import 语句
- `prettier-plugin-packagejson` - 格式化和排序 package.json
- `prettier-plugin-organize-attributes` - 自动排序 HTML/JSX 属性
- `prettier-plugin-tailwindcss` - 自动排序 Tailwind CSS 类名（仅在 JSX/TSX/Vue 等文件中启用）

如果不需要某些插件，可以不安装，Prettier 会自动跳过。
