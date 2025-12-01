#!/usr/bin/env node

const fs = require('fs');
const assert = require('assert');
const chalk = require('chalk');

/**
 * 移除 commit message 中的注释行
 * @param {string} msg - 原始 commit message
 * @returns {string} 移除注释后的 commit message
 */
function removeComment(msg) {
  return msg.replace(/^#.*[\n\r]*/gm, '');
}

/**
 * 获取 commit message 文件路径
 * 支持从命令行参数或环境变量获取（兼容更多 git hooks 场景）
 */
const msgPath = process.argv[2] || process.env.GIT_PARAMS;

// 如果没有提供路径，静默退出（可能是非 git hooks 场景）
if (!msgPath) {
  process.exit(0);
}

// 使用 assert 明确断言，确保文件路径存在
assert(msgPath, 'msgPath is required');

/**
 * 读取并处理 commit message
 */
let msg;
try {
  msg = removeComment(fs.readFileSync(msgPath, 'utf-8').trim());
} catch (error) {
  console.error(chalk.red(`Error reading commit message file: ${msgPath}`));
  process.exit(1);
}

/**
 * 约定式提交格式: <type>(<scope>): <subject>
 * 参考: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-header
 */
const COMMIT_TYPES = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
  'workflow',
  'types',
  'wip',
  'release',
  'dep',
  'deps',
  'example',
  'examples',
  'merge',
];

/**
 * 构建 commit message 验证正则表达式
 * 支持常规格式和特殊提交（Merge, Revert, Version）
 */
const commitRE = new RegExp(
  `^((${COMMIT_TYPES.join('|')})(\\(.+\\))?:|(Merge|Revert|Version)) .{1,50}`,
  'i',
);

/**
 * 输出错误信息和使用示例
 */
function printError() {
  console.log();
  console.log(`Error: ${chalk.red('提交信息不符合约定格式')}`);
  console.log();
  console.log(
    '约定式提交格式用于自动生成 changelog，请使用正确的格式。',
  );
  console.log(chalk.yellow('Examples:'));
  console.log();
  console.log(chalk.green('  feat: 新增功能'));
  console.log(chalk.green('  fix(lint): 修复配置问题'));
  console.log(chalk.green('  chore: 更新依赖版本'));
  console.log(chalk.green("  Merge branch 'main' into dev"));
  console.log();
}

/**
 * 验证 commit message 格式
 */
if (!commitRE.test(msg)) {
  printError();
  process.exit(1);
}

process.exit(0);

