# @crucialy/lint

ESLint、Stylelint 和 Prettier 的 lint 配置。

## 安装

```bash
pnpm add -D @crucialy/lint
```

## 使用方式

### React ESLint

```js
// .eslintrc.js
module.exports = {
  extends: require.resolve('@crucialy/lint/eslint-react'),
};
```

### Vue ESLint

```js
// .eslintrc.js
module.exports = {
  extends: require.resolve('@crucialy/lint/eslint-vue'),
};
```

### Stylelint

```js
// .stylelintrc.js
module.exports = {
  extends: require.resolve('@crucialy/lint/stylelint'),
};
```

### Prettier

```js
// .prettierrc.js
module.exports = require('@crucialy/lint/prettier');
```

