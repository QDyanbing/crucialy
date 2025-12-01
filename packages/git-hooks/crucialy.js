#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取命令参数
const command = process.argv[2];

if (command === 'setup') {
  // 执行 setup 命令
  const setupScript = path.join(__dirname, 'setup.js');
  require(setupScript);
} else if (command) {
  console.error(`Unknown command: ${command}`);
  console.error('\nAvailable commands:');
  console.error('  setup  - Setup git hooks');
  process.exit(1);
} else {
  console.log('Usage: crucialy <command>');
  console.log('\nAvailable commands:');
  console.log('  setup  - Setup git hooks');
  process.exit(0);
}

