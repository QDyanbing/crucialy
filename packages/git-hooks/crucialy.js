#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取命令参数
const command = process.argv[2];

if (command === 'setup') {
  // 执行 setup 命令
  const setupScript = path.join(__dirname, 'commands', 'setup.js');
  require(setupScript);
} else if (command === 'verify-commit') {
  // 执行 verify-commit 命令（兼容旧方式，推荐直接使用 crucialy-verify-commit）
  const verifyScript = path.join(__dirname, 'commands', 'verify-commit.js');
  // 修改 process.argv，让 verify-commit.js 能正确获取文件路径
  process.argv = [process.argv[0], verifyScript, process.argv[3]];
  require(verifyScript);
} else if (command) {
  console.error(`Unknown command: ${command}`);
  console.error('\nAvailable commands:');
  console.error('  setup         - Setup git hooks');
  console.error('  verify-commit - Verify commit message format');
  process.exit(1);
} else {
  console.log('Usage: crucialy <command>');
  console.log('\nAvailable commands:');
  console.log('  setup         - Setup git hooks');
  console.log('  verify-commit - Verify commit message format');
  process.exit(0);
}
