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
- ⏳ **M2**: 收集完整规则清单
- ⏳ **M3**: 实现 base.ts（核心规则）
- ⏳ **M4-M15**: 其他配置文件

### 使用方法

项目完成后可以这样使用：

```js
// .stylelintrc.js
module.exports = {
  extends: [
    '@crucialy/lint/dist/stylelint/base',
  ],
};
```

### 支持的配置

| 配置 | 说明 | 状态 |
|------|------|------|
| `base` | 基础配置，包含所有核心规则 | 🚧 开发中 |
| `strict` | 严格模式（BEM 命名等） | 🚧 开发中 |
| `scss` | SCSS 支持 | 🚧 开发中 |
| `less` | Less 支持 | 🚧 开发中 |
| `stylus` | Stylus 支持 | 🚧 开发中 |
| `modules` | CSS Modules 支持 | 🚧 开发中 |
| `html` | HTML `<style>` 支持 | 🚧 开发中 |
| `vue` | Vue SFC 支持 | 🚧 开发中 |
| `svelte` | Svelte 组件支持 | 🚧 开发中 |
| `astro` | Astro 组件支持 | 🚧 开发中 |
| `angular` | Angular 组件支持 | 🚧 开发中 |
| `cssInJs` | CSS-in-JS 支持 | 🚧 开发中 |

## 设计原则

1. **不使用任何 preset** - 所有规则在本仓库显式配置
2. **全规则显式配置** - 不依赖默认值
3. **按类型拆分配置** - 每种语法独立文件
4. **插件只提供规则** - 不使用插件的 preset
5. **全面支持 multi-syntax** - 支持各种 customSyntax
6. **未来 CSS 友好** - 支持 nesting 等新特性
7. **提供 strict 模式** - 更严格的代码规范
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
│   │   ├── base.ts          # 基础配置
│   │   ├── strict.ts        # 严格模式
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
