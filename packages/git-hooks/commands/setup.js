#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 项目根目录（当前工作目录）
const projectRoot = process.cwd();
const gitHooksPackageRoot = __dirname;

// 生成 hook 内容
function generateHookContent(hook) {
  const huskyTemplatesDir = path.join(gitHooksPackageRoot, 'husky');
  const source = path.join(huskyTemplatesDir, hook);
  
  if (!fs.existsSync(source)) {
    return null;
  }
  
  let content = fs.readFileSync(source, 'utf-8');
  
  // 如果是 commit-msg，需要替换脚本路径
  if (hook === 'commit-msg') {
    // 使用独立的 verify-commit 可执行文件，参考 umi 的实现方式
    // 使用 pnpm exec 确保在 monorepo 中正确工作
    content = `#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

pnpm exec crucialy-verify-commit "$1"
`;
  }
  
  return content;
}

// 安装 husky hooks
function installHuskyHooks() {
  const huskyDir = path.join(projectRoot, '.husky');

  // 确保 .husky 目录存在
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
    console.log('✓ Created .husky directory');
  }

  // 复制 husky hooks
  const hooks = ['pre-commit', 'commit-msg'];
  let hasChanges = false;
  
  hooks.forEach((hook) => {
    const target = path.join(huskyDir, hook);
    const expectedContent = generateHookContent(hook);
    
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
    } else if (fs.existsSync(target)) {
      console.log(`⚠ ${file} already exists, skipping`);
    }
  });
  
  return hasChanges;
}

// 主函数
function main() {
  console.log('Setting up @crucialy/git-hooks...\n');

  const hooksChanged = installHuskyHooks();
  const configChanged = installConfigFiles();
  
  if (hooksChanged || configChanged) {
    console.log('\n✓ @crucialy/git-hooks setup complete!');
  } else {
    console.log('\n✓ All files are up to date.');
  }
}

main();

