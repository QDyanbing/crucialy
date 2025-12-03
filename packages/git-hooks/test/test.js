#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Running tests for @crucialy/git-hooks...\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.message}`);
    failed++;
  }
}

// Test 1: 检查必需文件存在
test('Required files exist', () => {
  const files = [
    'crucialy.js',
    'commands/setup.js',
    'commands/verify-commit.js',
    'README.md',
    'LICENSE',
  ];
  files.forEach(file => {
    assert(fs.existsSync(path.join(__dirname, '..', file)), `${file} should exist`);
  });
});

// Test 2: 检查可执行文件有 shebang
test('Executable files have shebang', () => {
  const files = ['crucialy.js', 'commands/setup.js', 'commands/verify-commit.js'];
  files.forEach(file => {
    const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf-8');
    assert(content.startsWith('#!/usr/bin/env node'), `${file} should have shebang`);
  });
});

// Test 3: 检查 package.json 配置
test('Package.json is valid', () => {
  const pkg = require('../package.json');
  assert(pkg.name === '@crucialy/git-hooks', 'Package name should be @crucialy/git-hooks');
  assert(pkg.bin.crucialy === './crucialy.js', 'Bin should point to crucialy.js');
  assert(pkg.peerDependencies.husky, 'Should have husky as peer dependency');
  assert(pkg.peerDependencies['lint-staged'], 'Should have lint-staged as peer dependency');
});

// Test 4: 检查 verify-commit 的提交类型
test('Verify-commit has valid commit types', () => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'commands/verify-commit.js'), 'utf-8');
  assert(content.includes('COMMIT_TYPES'), 'Should define COMMIT_TYPES');
  assert(content.includes('feat'), 'Should include feat type');
  assert(content.includes('fix'), 'Should include fix type');
});

// Test 5: 检查 setup.js 的 hook 生成
test('Setup.js generates hooks', () => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'commands/setup.js'), 'utf-8');
  assert(content.includes('pre-commit'), 'Should handle pre-commit hook');
  assert(content.includes('commit-msg'), 'Should handle commit-msg hook');
  assert(content.includes('.lintstagedrc'), 'Should generate .lintstagedrc');
});

// Test 6: 检查 crucialy.js 的命令路由
test('Crucialy.js routes commands', () => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'crucialy.js'), 'utf-8');
  assert(content.includes('setup'), 'Should route setup command');
  assert(content.includes('verify-commit'), 'Should route verify-commit command');
});

// 输出结果
console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}

console.log('\n✓ All tests passed!');
