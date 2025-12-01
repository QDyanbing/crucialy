#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 查找项目根目录（包含 @crucialy/git-hooks 依赖的 package.json）
function findProjectRoot() {
  let currentDir = process.cwd();
  const originalDir = currentDir;
  
  // 如果当前目录在 node_modules 或 packages 中，向上查找项目根目录
  if (currentDir.includes('node_modules') || currentDir.includes('packages/')) {
    // 向上查找，直到找到包含 @crucialy/git-hooks 依赖的 package.json
    while (currentDir !== path.dirname(currentDir)) {
      const packageJsonPath = path.join(currentDir, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
          const deps = {
            ...(packageJson.dependencies || {}),
            ...(packageJson.devDependencies || {}),
            ...(packageJson.peerDependencies || {})
          };
          // 检查是否包含 @crucialy/git-hooks 依赖
          if (deps['@crucialy/git-hooks']) {
            return currentDir;
          }
          // 如果是 monorepo 根目录（private: true），也认为是项目根目录
          if (packageJson.private === true && 
              (packageJson.name === 'crucialy' || fs.existsSync(path.join(currentDir, 'pnpm-workspace.yaml')))) {
            return currentDir;
          }
        } catch (e) {
          // 忽略解析错误
        }
      }
      currentDir = path.dirname(currentDir);
    }
  }
  
  // 如果没找到，检查当前目录是否是项目根目录
  const packageJsonPath = path.join(originalDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      const deps = {
        ...(packageJson.dependencies || {}),
        ...(packageJson.devDependencies || {}),
        ...(packageJson.peerDependencies || {})
      };
      if (deps['@crucialy/git-hooks']) {
        return originalDir;
      }
    } catch (e) {
      // 忽略解析错误
    }
  }
  
  // 默认返回当前目录
  return originalDir;
}

const projectRoot = findProjectRoot();
const gitHooksPackageRoot = __dirname;

// 生成 hook 内容
function generateHookContent(hook, huskyDir) {
  const huskyTemplatesDir = path.join(gitHooksPackageRoot, 'husky');
  const source = path.join(huskyTemplatesDir, hook);
  
  if (!fs.existsSync(source)) {
    return null;
  }
  
  let content = fs.readFileSync(source, 'utf-8');
  
  // 如果是 commit-msg，需要替换脚本路径
  if (hook === 'commit-msg') {
    // 使用绝对路径更可靠（通过 node -e 执行）
    content = `#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

node "$(node -e "console.log(require.resolve('@crucialy/git-hooks/scripts/verifyCommit.js'))")" "$1"
`;
  }
  
  return content;
}

// 安装 husky hooks
function installHuskyHooks() {
  const huskyDir = path.join(projectRoot, '.husky');
  const huskyTemplatesDir = path.join(gitHooksPackageRoot, 'husky');

  // 确保 .husky 目录存在（husky 9 不需要运行 husky install）
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
  }
  
  // 确保 .husky/_ 目录存在（husky 9 需要）
  const huskyInternalDir = path.join(huskyDir, '_');
  if (!fs.existsSync(huskyInternalDir)) {
    fs.mkdirSync(huskyInternalDir, { recursive: true });
  }

  // 复制 husky hooks
  const hooks = ['pre-commit', 'commit-msg'];
  let hasChanges = false;
  
  hooks.forEach((hook) => {
    const target = path.join(huskyDir, hook);
    const expectedContent = generateHookContent(hook, huskyDir);
    
    if (!expectedContent) {
      return;
    }
    
    // 检查文件是否存在且内容是否匹配
    if (fs.existsSync(target)) {
      const existingContent = fs.readFileSync(target, 'utf-8');
      if (existingContent === expectedContent) {
        // 内容匹配，跳过
        return;
      }
    }
    
    // 文件不存在或内容不匹配，需要更新
    fs.writeFileSync(target, expectedContent);
    // 设置执行权限
    if (process.platform !== 'win32') {
      fs.chmodSync(target, '755');
    }
    console.log(`✓ Installed .husky/${hook}`);
    hasChanges = true;
  });
  
  return hasChanges;
}

// 安装配置文件
function installConfigFiles() {
  const templatesDir = path.join(gitHooksPackageRoot, 'templates');
  const configFiles = ['.lintstagedrc'];
  let hasChanges = false;

  configFiles.forEach((file) => {
    const source = path.join(templatesDir, file);
    const target = path.join(projectRoot, file);

    if (fs.existsSync(source) && !fs.existsSync(target)) {
      fs.copyFileSync(source, target);
      console.log(`✓ Installed ${file}`);
      hasChanges = true;
    }
    // 如果文件已存在，静默跳过（不输出任何信息）
  });
  
  return hasChanges;
}


// 主函数
function main() {
  // 检查是否包含 @crucialy/git-hooks 依赖
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    // 没有 package.json，静默退出
    return;
  }
  
  let hasDependency = false;
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const deps = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {}),
      ...(packageJson.peerDependencies || {})
    };
    hasDependency = !!deps['@crucialy/git-hooks'];
  } catch (e) {
    // 忽略解析错误
    return;
  }
  
  if (!hasDependency) {
    // 如果没有依赖，静默退出
    return;
  }
  
  // 检查是否在项目根目录（通过检查是否有 .git 或 node_modules 或 pnpm-workspace.yaml）
  const isProjectRoot = fs.existsSync(path.join(projectRoot, '.git')) || 
                        fs.existsSync(path.join(projectRoot, 'node_modules')) ||
                        fs.existsSync(path.join(projectRoot, 'pnpm-workspace.yaml'));
  
  // 如果不在项目根目录，静默退出
  if (!isProjectRoot) {
    return;
  }
  
  const hooksChanged = installHuskyHooks();
  const configChanged = installConfigFiles();
  
  // 只有在有变化时才输出信息
  if (hooksChanged || configChanged) {
    console.log('\n✓ @crucialy/git-hooks installation complete!');
  }
  // 如果没有任何变化，静默退出（不输出任何信息）
}

// 只有在作为脚本直接执行时才运行
if (require.main === module) {
  main();
}

