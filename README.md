# Crucialy

Crucialy 包的 Monorepo 仓库。

## 包列表

- [`@crucialy/lint`](./packages/lint) - ESLint、Stylelint 和 Prettier 的 lint 配置

## 开发

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 运行 lint

```bash
pnpm lint
```

### 版本管理和发布

```bash
# 创建变更记录
pnpm changeset

# 更新包版本
pnpm version

# 发布包
pnpm release
```

## Workspace

本 monorepo 使用 [pnpm workspace](https://pnpm.io/workspaces) 进行包管理。

