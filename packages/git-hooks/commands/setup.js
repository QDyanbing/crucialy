#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 项目根目录（当前工作目录）
const projectRoot = process.cwd();
// 包根目录（setup.js 在 commands/ 目录下，需要向上一级）
const gitHooksPackageRoot = path.join(__dirname, '..');

// 生成 hook 内容
function generateHookContent(hook) {
  // 使用 npx --no-install 保持通用性（支持 npm、pnpm、yarn）
  // Husky 9.x 格式：不需要 husky.sh
  
  if (hook === 'commit-msg') {
    return `#!/usr/bin/env sh
npx --no-install crucialy verify-commit "$1"
`;
  }
  
  if (hook === 'pre-commit') {
    return `#!/usr/bin/env sh
npx --no-install lint-staged --quiet
`;
  }
  
  return null;
}

// 安装 husky hooks
function installHuskyHooks() {
  const huskyDir = path.join(projectRoot, '.husky');

  // 确保 .husky 目录存在
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
    console.log('✓ Created .husky directory');
  }

  // 根据配置决定安装哪些 hooks
  const args = process.argv.slice(2);
  const skipLint = args.includes('--skip-lint') || process.env.SKIP_LINT === 'true';
  const skipCommitMsg = args.includes('--skip-commit-msg') || process.env.SKIP_COMMIT_MSG === 'true';
  
  const hooks = [];
  if (!skipLint) hooks.push('pre-commit');
  if (!skipCommitMsg) hooks.push('commit-msg');
  
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
  const lintstagedrcPath = path.join(projectRoot, '.lintstagedrc');
  
  // 如果文件已存在，跳过
  if (fs.existsSync(lintstagedrcPath)) {
    console.log('⚠ .lintstagedrc already exists, skipping');
    return false;
  }
  
  // 生成 .lintstagedrc 配置
  const lintstagedConfig = {
    "*.{js,ts,jsx,tsx}": ["eslint --max-warnings=0 --fix", "prettier --cache --write"],
    "*.{css,scss,less}": ["stylelint --fix", "prettier --cache --write"],
    "*.{json,md,yaml,yml}": ["prettier --cache --write"]
  };
  
  fs.writeFileSync(lintstagedrcPath, JSON.stringify(lintstagedConfig, null, 2) + '\n');
  console.log('✓ Installed .lintstagedrc');
  return true;
}

// 主函数
function main() {
  console.log('Setting up @crucialy/git-hooks...\n');

  // 支持通过环境变量或命令行参数配置
  const args = process.argv.slice(2);
  const skipLint = args.includes('--skip-lint') || process.env.SKIP_LINT === 'true';
  const skipCommitMsg = args.includes('--skip-commit-msg') || process.env.SKIP_COMMIT_MSG === 'true';
  
  if (skipLint && skipCommitMsg) {
    console.log('⚠ All hooks are disabled. Nothing to setup.');
    return;
  }

  const hooksChanged = installHuskyHooks();
  const configChanged = skipLint ? false : installConfigFiles();
  
  if (hooksChanged || configChanged) {
    console.log('\n✓ @crucialy/git-hooks setup complete!');
    if (skipLint) {
      console.log('  (lint-staged disabled)');
    }
    if (skipCommitMsg) {
      console.log('  (commit-msg verification disabled)');
    }
  } else {
    console.log('\n✓ All files are up to date.');
  }
}

main();

