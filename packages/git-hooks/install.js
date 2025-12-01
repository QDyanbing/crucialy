#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = process.cwd();
const gitHooksPackageRoot = __dirname;

// 安装 husky hooks
function installHuskyHooks() {
  const huskyDir = path.join(projectRoot, '.husky');
  const huskyTemplatesDir = path.join(gitHooksPackageRoot, 'husky');

  // 确保 .husky 目录存在
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
  }

  // 复制 husky hooks
  const hooks = ['pre-commit', 'commit-msg'];
  hooks.forEach((hook) => {
    const source = path.join(huskyTemplatesDir, hook);
    const target = path.join(huskyDir, hook);

    if (fs.existsSync(source)) {
      let content = fs.readFileSync(source, 'utf-8');
      
      // 如果是 commit-msg，需要替换脚本路径
      if (hook === 'commit-msg') {
        // 尝试使用 require.resolve 找到包的路径（适用于已安装的包）
        let verifyScriptPath;
        try {
          const gitHooksPackagePath = require.resolve('@crucialy/git-hooks/package.json');
          const gitHooksPackageDir = path.dirname(gitHooksPackagePath);
          verifyScriptPath = path.join(gitHooksPackageDir, 'scripts', 'verifyCommit.js');
        } catch (e) {
          // 如果找不到包（开发环境），使用相对路径
          verifyScriptPath = path.join(gitHooksPackageRoot, 'scripts', 'verifyCommit.js');
        }
        
        // 计算从 .husky 目录到脚本的相对路径
        const relativeScriptPath = path.relative(huskyDir, verifyScriptPath);
        
        content = `#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

node "${relativeScriptPath}" "$1"
`;
      }
      
      fs.writeFileSync(target, content);
      // 设置执行权限
      if (process.platform !== 'win32') {
        fs.chmodSync(target, '755');
      }
      console.log(`✓ Installed .husky/${hook}`);
    }
  });
}

// 安装配置文件
function installConfigFiles() {
  const templatesDir = path.join(gitHooksPackageRoot, 'templates');
  const configFiles = ['.lintstagedrc'];

  configFiles.forEach((file) => {
    const source = path.join(templatesDir, file);
    const target = path.join(projectRoot, file);

    if (fs.existsSync(source) && !fs.existsSync(target)) {
      fs.copyFileSync(source, target);
      console.log(`✓ Installed ${file}`);
    } else if (fs.existsSync(target)) {
      console.log(`⚠ ${file} already exists, skipping`);
    }
  });
}

// 初始化 husky
function initHusky() {
  try {
    // 检查是否在 git 仓库中
    if (fs.existsSync(path.join(projectRoot, '.git'))) {
      execSync('pnpm exec husky install', { cwd: projectRoot, stdio: 'pipe' });
      console.log('✓ Husky initialized');
    } else {
      console.log('⚠ Not a git repository, skipping husky initialization');
    }
  } catch (error) {
    // 忽略错误，因为可能还没有安装 husky
    console.log('⚠ Husky will be initialized on next install');
  }
}

// 主函数
function main() {
  console.log('Installing @crucialy/git-hooks...\n');

  installHuskyHooks();
  installConfigFiles();
  initHusky();

  console.log('\n✓ @crucialy/git-hooks installation complete!');
  console.log('\nMake sure to add the following to your package.json:');
  console.log('  "prepare": "husky install"');
}

main();

