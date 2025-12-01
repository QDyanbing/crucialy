# @crucialy/git-hooks

## 功能

- **Husky**: Git hooks 管理
- **lint-staged**: 提交前自动 lint 和格式化
- **提交信息验证**: 自定义脚本验证提交信息格式（无需 commitlint）

## 安装

### 1. 安装包和依赖

```bash
pnpm add -D @crucialy/git-hooks husky lint-staged
```

**注意**：需要同时安装 `husky` 和 `lint-staged` 作为 peerDependencies。

### 2. 自动安装

安装包后，`postinstall` 脚本会自动执行，自动生成以下文件：

- `.husky/pre-commit` - 提交前运行 lint-staged
- `.husky/commit-msg` - 提交时验证提交信息格式
- `.lintstagedrc` - lint-staged 配置文件（如果不存在则创建）

**无需手动运行任何命令！** 每次 `pnpm install` 后都会自动更新这些文件。

**注意**：

- 不需要安装 commitlint，使用自定义脚本验证提交信息
- `husky` 和 `lint-staged` 需要作为 peerDependencies 安装

## 使用

安装后，工具会自动工作：

- **提交前**: 自动运行 lint-staged，修复代码格式
- **提交时**: 检查提交信息格式，必须符合约定式提交规范

## 提交信息格式

提交信息必须符合以下格式：

```
<type>(<scope>): <subject>
```

**type 类型**：

- `feat`: 新功能
- `fix`: bug 修复
- `chore`: 构建/脚本/依赖
- `docs`: 文档或注释
- `style`: 代码格式、样式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试用例
- `build`: 构建系统或外部依赖
- `ci`: CI/CD 配置
- `revert`: 回滚提交

**示例**：

```
feat: 新增拖拽功能
fix(lint): 修复配置问题
chore: 更新依赖版本
```

## 自定义配置

如果需要自定义配置，可以直接修改项目根目录下的配置文件：

- `.lintstagedrc` - lint-staged 配置

如果需要自定义提交信息验证规则，需要 fork 本包并修改 `scripts/verifyCommit.js` 中的正则表达式。

## 手动安装

如果自动安装失败，可以手动运行：

```bash
pnpm exec crucialy-git-hooks-install
```
