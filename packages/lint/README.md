# @crucialy/lint

> Opinionated lint configurations for ESLint, Stylelint, and Prettier

## 特性

- 🚫 **零 preset** - 不使用任何预设配置
- 📝 **全规则显式配置** - 所有规则都明确配置
- 🎯 **按类型拆分** - 每种语法独立成文件
- 🔧 **100% TypeScript** - 纯 TypeScript 编写，完整类型支持
- 🌐 **多框架支持** - Vue / React / Svelte / Astro / Angular
- 📦 **Monorepo 友好** - 可在 monorepo 中使用
- 📐 **三大目录** - ESLint / Stylelint / Prettier 独立组织

## 安装

```bash
pnpm add -D @crucialy/lint
```

需要同时安装对应的 peer dependencies：

```bash
# Stylelint
pnpm add -D stylelint

# 可选依赖（按需安装）
pnpm add -D postcss-scss postcss-less postcss-html
pnpm add -D stylelint-scss stylelint-order
pnpm add -D @stylelint/postcss-css-in-js
```

## 使用方法

### Prettier 配置

```js
// .prettierrc.js
module.exports = require('@crucialy/lint').prettier;
```

或者在 `package.json` 中：

```json
{
  "prettier": "@crucialy/lint/dist/prettier/index.js"
}
```

### ESLint 配置

```js
// .eslintrc.js - React 项目
const { eslint } = require('@crucialy/lint');
module.exports = {
  ...eslint.react,
};

// .eslintrc.js - Vue 项目
const { eslint } = require('@crucialy/lint');
module.exports = {
  ...eslint.vue,
};
```

或者直接引用：

```js
// React
module.exports = require('@crucialy/lint/dist/eslint/react.js');

// Vue
module.exports = require('@crucialy/lint/dist/eslint/vue.js');
```

## Stylelint 配置

### 当前状态

项目处于开发阶段，正在按照以下里程碑推进：

- ✅ **M1**: 项目初始化 + TypeScript 基础设施
- ✅ **M2**: 收集完整规则清单
- ✅ **M3**: 实现 core（核心规则，合并 base 和 strict）
- ⏳ **M4-M15**: 其他配置文件

### 使用方法

#### 基础 CSS

```js
// .stylelintrc.js
module.exports = {
  extends: ['@crucialy/lint/dist/stylelint/core'],
};
```

#### SCSS

```js
// .stylelintrc.js
module.exports = {
  extends: ['@crucialy/lint/dist/stylelint/scss'],
};
```

#### Less

```js
// .stylelintrc.js
module.exports = {
  extends: ['@crucialy/lint/dist/stylelint/less'],
};
```

#### Stylus

```js
// .stylelintrc.js
module.exports = {
  extends: ['@crucialy/lint/dist/stylelint/stylus'],
};
```

#### CSS Modules

CSS Modules 配置需要配合基础配置或预处理器配置使用，通过 `overrides` 来针对 `.module.css`、`.module.scss`、`.module.less` 等文件应用。

##### CSS Modules（\*.module.css）

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/core'],
  overrides: [
    {
      files: ['**/*.module.css'],
      extends: ['@crucialy/lint/dist/stylelint/modules'],
    },
  ],
};
```

##### SCSS Modules（\*.module.scss）

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/scss'],
  overrides: [
    {
      files: ['**/*.module.scss'],
      extends: ['@crucialy/lint/dist/stylelint/modules'],
    },
  ],
};
```

##### Less Modules（\*.module.less）

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/less'],
  overrides: [
    {
      files: ['**/*.module.less'],
      extends: ['@crucialy/lint/dist/stylelint/modules'],
    },
  ],
};
```

#### Vue SFC

Vue 配置只负责容器解析层，处理 Vue 特有的伪类和伪元素（`:deep`, `:global`, `:slotted`, `::v-deep` 等）。CSS/SCSS/Less/Modules 规则需要配合其他配置使用。

##### Vue + 纯 CSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/vue'],
};
```

##### Vue + SCSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/vue'],
};
```

##### Vue + SCSS + CSS Modules

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: [
    '@crucialy/lint/dist/stylelint/scss',
    '@crucialy/lint/dist/stylelint/modules',
    '@crucialy/lint/dist/stylelint/vue',
  ],
};
```

#### Svelte

Svelte 配置只负责容器解析层，处理 Svelte 特有的 `:global()` 伪类。CSS/SCSS/Less/Modules 规则需要配合其他配置使用。

##### Svelte + 纯 CSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/svelte'],
};
```

##### Svelte + SCSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/svelte'],
};
```

##### Svelte + SCSS + CSS Modules

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: [
    '@crucialy/lint/dist/stylelint/scss',
    '@crucialy/lint/dist/stylelint/modules',
    '@crucialy/lint/dist/stylelint/svelte',
  ],
};
```

#### Astro

Astro 配置只负责容器解析层，处理 Astro 特有的 `:global()` 伪类。CSS/SCSS/Less/Modules 规则需要配合其他配置使用。

##### Astro + 纯 CSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/core', '@crucialy/lint/dist/stylelint/astro'],
};
```

##### Astro + SCSS

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: ['@crucialy/lint/dist/stylelint/scss', '@crucialy/lint/dist/stylelint/astro'],
};
```

##### Astro + SCSS + CSS Modules

```js
// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
  extends: [
    '@crucialy/lint/dist/stylelint/scss',
    '@crucialy/lint/dist/stylelint/modules',
    '@crucialy/lint/dist/stylelint/astro',
  ],
};
```

### 支持的配置

| 配置      | 说明                                          | 状态      |
| --------- | --------------------------------------------- | --------- |
| `core`    | 核心配置，包含所有规则（合并 base 和 strict） | ✅ 已完成 |
| `scss`    | SCSS 支持                                     | ✅ 已完成 |
| `less`    | Less 支持                                     | ✅ 已完成 |
| `stylus`  | Stylus 支持                                   | ✅ 已完成 |
| `modules` | CSS Modules 支持                              | ✅ 已完成 |
| `html`    | HTML `<style>` 支持                           | ✅ 已完成 |
| `vue`     | Vue SFC 支持                                  | ✅ 已完成 |
| `svelte`  | Svelte 组件支持                               | ✅ 已完成 |
| `astro`   | Astro 组件支持                                | ✅ 已完成 |
| `angular` | Angular 组件支持                              | 🚧 开发中 |
| `cssInJs` | CSS-in-JS 支持                                | 🚧 开发中 |

## 设计原则

1. **不使用任何 preset** - 所有规则在本仓库显式配置
2. **全规则显式配置** - 不依赖默认值
3. **按类型拆分配置** - 每种语法独立文件
4. **插件只提供规则** - 不使用插件的 preset
5. **全面支持 multi-syntax** - 支持各种 customSyntax
6. **未来 CSS 友好** - 支持 nesting 等新特性
7. **严格的代码规范** - 默认启用严格规则（BEM 命名、复杂度限制等）
8. **支持所有现代框架** - 多框架覆盖

## 开发

```bash
# 安装依赖
pnpm install

# 编译
pnpm run build

# 类型检查
pnpm run lint

# 清理
pnpm run clean
```

## 项目结构

```
packages/lint/
├── src/
│   ├── stylelint/           # Stylelint 配置目录 (TypeScript)
│   │   ├── index.ts         # 导出所有配置
│   │   ├── types.ts         # TypeScript 类型定义
│   │   ├── core/            # 核心配置目录
│   │   │   ├── index.ts     # 核心配置（合并 base 和 strict）
│   │   │   └── *.ts         # 各规则分组文件
│   │   ├── scss.ts          # SCSS 配置
│   │   ├── less.ts          # Less 配置
│   │   ├── stylus.ts        # Stylus 配置
│   │   ├── modules.ts       # CSS Modules 配置
│   │   ├── html.ts          # HTML 配置
│   │   ├── vue.ts           # Vue 配置
│   │   ├── svelte.ts        # Svelte 配置
│   │   ├── astro.ts         # Astro 配置
│   │   ├── angular.ts       # Angular 配置
│   │   └── css-in-js.ts     # CSS-in-JS 配置
│   ├── prettier/            # Prettier 配置目录 (TypeScript)
│   │   └── index.ts         # Prettier 配置 + 类型定义
│   ├── eslint/              # ESLint 配置目录 (TypeScript)
│   │   ├── index.ts         # 导出所有配置
│   │   ├── react.ts         # React 配置 + 类型定义
│   │   └── vue.ts           # Vue 配置 + 类型定义
│   └── index.ts             # 主入口
├── dist/                    # 编译输出
│   ├── stylelint/           # Stylelint 编译后文件
│   ├── prettier/            # Prettier 配置文件
│   └── eslint/              # ESLint 配置文件
├── tsconfig.json            # TypeScript 配置
└── package.json

```

## License

MIT © [gaoyanbing](https://github.com/gaoyanbing)
