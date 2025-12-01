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

### 2. 配置 package.json

在项目的 `package.json` 中添加以下脚本：

#### Husky 9.x

```json
{
  "scripts": {
    "postinstall": "crucialy setup",
    "prepare": "husky"
  }
}
```

#### Husky 8.x

```json
{
  "scripts": {
    "postinstall": "crucialy setup",
    "prepare": "husky install"
  }
}
```

**说明**：
- `postinstall`: 每次 `pnpm install` 后自动运行 setup，确保 git hooks 文件是最新的
- `prepare`: husky 初始化命令
  - **Husky 9.x**: 使用 `husky`（不带参数）
  - **Husky 8.x**: 使用 `husky install`（已废弃，但 husky 8 仍支持）

**如何确认版本**：

```bash
pnpm list husky
```

本包要求 `husky >= 9.0.0`，建议使用 Husky 9.x。

### 3. 运行 setup

运行以下命令初始化 git hooks：

```bash
pnpm exec crucialy setup
```

或者直接运行：

```bash
crucialy setup
```

setup 命令会在项目根目录生成以下文件：

- `.husky/pre-commit` - 提交前运行 lint-staged
- `.husky/commit-msg` - 提交时验证提交信息格式
- `.lintstagedrc` - lint-staged 配置文件（如果不存在则创建）

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

如果需要自定义提交信息验证规则，需要 fork 本包并修改 `commands/verify-commit.js` 中的正则表达式。
