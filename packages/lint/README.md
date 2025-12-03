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

```js
// .stylelintrc.js
module.exports = {
  extends: [
    require.resolve('@crucialy/lint/stylelint'),
    // 可以在这里追加自己的配置
  ],
  rules: {
    // 可以覆盖或添加规则
  },
};
```

### Prettier

#### 1. 安装依赖

```bash
# 安装 prettier
pnpm add -D prettier

# 可选：安装插件（按需选择）
pnpm add -D prettier-plugin-organize-imports prettier-plugin-packagejson prettier-plugin-tailwindcss prettier-plugin-organize-attributes
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
- `prettier-plugin-tailwindcss` - 自动排序 Tailwind CSS 类名
- `prettier-plugin-organize-attributes` - 自动排序 HTML/JSX 属性

如果不需要某些插件，可以不安装，Prettier 会自动跳过。
