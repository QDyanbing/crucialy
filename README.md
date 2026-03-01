# Crucialy

Crucialy 包的 Monorepo 仓库。

## 包列表

- [`@crucialy/lint`](./packages/lint) - ESLint、Stylelint 和 Prettier 的 lint 配置
- [`@crucialy/git-hooks`](https://github.com/crucialy/crucialy-git-hooks) - Git hooks 配置（Husky、lint-staged、提交信息验证），独立仓库发布

本仓库通过 `file:../crucialy-git-hooks` 引用。本地开发需将 crucialy-git-hooks 克隆到上级目录。发布与版本在独立仓库进行。

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
