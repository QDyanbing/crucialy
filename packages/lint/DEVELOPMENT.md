# 开发文档

## 里程碑进度

### ✅ M1: 项目初始化 + TypeScript 基础设施

**已完成项目：**

1. ✅ TypeScript 配置
   - 创建 `tsconfig.json` 配置文件
   - 配置严格模式和编译选项
   - 设置输出目录为 `dist/`

2. ✅ 项目结构
   - 创建 `src/stylelint/` 目录
   - 创建所有配置文件的占位符：
     - `base.ts` - 基础配置
     - `strict.ts` - 严格模式
     - `scss.ts` - SCSS 支持
     - `less.ts` - Less 支持
     - `stylus.ts` - Stylus 支持
     - `modules.ts` - CSS Modules
     - `html.ts` - HTML `<style>` 支持
     - `vue.ts` - Vue SFC
     - `svelte.ts` - Svelte 组件
     - `astro.ts` - Astro 组件
     - `angular.ts` - Angular 组件
     - `css-in-js.ts` - CSS-in-JS
   - 创建 `types.ts` 类型定义文件
   - 创建 `index.ts` 导出文件

3. ✅ 构建配置
   - 更新 `package.json` 添加 TypeScript 依赖
   - 配置构建脚本：
     - `build` - 编译 TypeScript
     - `clean` - 清理构建输出
     - `lint` - 类型检查
     - `prepublishOnly` - 发布前构建
   - 更新主入口点为 `dist/index.js`
   - 添加类型定义入口点 `dist/index.d.ts`

4. ✅ 开发工具
   - 创建 `.gitignore` 文件
   - 创建 `.npmignore` 文件
   - 更新 `README.md` 文档

5. ✅ 验证
   - TypeScript 编译成功
   - 类型检查通过
   - 生成完整的 `.d.ts` 类型定义文件
   - 生成 source maps

**技术栈：**

- TypeScript 5.x (100% TypeScript)
- Node.js >=18.0.0
- CommonJS 模块系统
- 零 JavaScript 文件，纯 TypeScript 实现

**文件结构：**

```
packages/lint/
├── src/
│   ├── stylelint/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── base.ts
│   │   ├── strict.ts
│   │   ├── scss.ts
│   │   ├── less.ts
│   │   ├── stylus.ts
│   │   ├── modules.ts
│   │   ├── html.ts
│   │   ├── vue.ts
│   │   ├── svelte.ts
│   │   ├── astro.ts
│   │   ├── angular.ts
│   │   └── css-in-js.ts
│   └── index.ts
├── dist/                    # 编译输出
│   ├── index.js
│   ├── index.d.ts
│   └── stylelint/
│       ├── *.js
│       ├── *.d.ts
│       └── *.js.map
├── tsconfig.json
├── .gitignore
├── .npmignore
├── package.json
├── README.md
└── DEVELOPMENT.md
```

---

### ⏳ M2: 收集完整规则清单

**待完成项目：**

- [ ] 创建 `src/rule-sets/` 目录
- [ ] 收集所有 Stylelint core rules
- [ ] 收集 stylistic rules
- [ ] 收集 order rules
- [ ] 收集 SCSS rules
- [ ] 收集 Less rules
- [ ] 收集 Stylus rules
- [ ] 创建 `scripts/check-missing-rules.ts` 工具

---

### ⏳ M3: 实现 base.ts

**待完成项目：**

- [ ] 配置所有 Stylelint core rules
- [ ] 添加 stylistic rules
- [ ] 添加 order rules
- [ ] 支持 PostCSS
- [ ] 支持未来 CSS 语法
- [ ] 添加详细注释说明每条规则

---

### ⏳ M4-M15: 其他配置

待后续实现...

---

## 开发命令

```bash
# 安装依赖
pnpm install

# 编译项目
pnpm run build

# 类型检查
pnpm run lint

# 清理编译输出
pnpm run clean

# 重新编译
pnpm run clean && pnpm run build
```

## 下一步

1. 开始 M2 阶段：收集完整规则清单
2. 创建规则检查脚本
3. 准备开始实现 base.ts 的核心规则

## 注意事项

- 所有配置文件都是 TypeScript 编写
- 编译后的文件在 `dist/` 目录
- 发布前会自动清理和重新编译
- 类型定义会自动生成
