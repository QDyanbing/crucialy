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
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('提交信息不符合约定格式')}\n\n` +
      `  ${chalk.red('请使用格式：')} <type>(<scope>): <subject>\n\n` +
      `  ${chalk.yellow('type 说明：')}\n` +
      `    feat      新功能\n` +
      `    fix       bug 修复\n` +
      `    chore     构建/脚本/依赖\n` +
      `    docs      文档或注释\n` +
      `    style     代码格式、样式调整\n` +
      `    refactor  代码重构（无新特性或修复）\n` +
      `    perf      性能优化\n` +
      `    test      测试用例\n` +
      `    build     构建系统或外部依赖\n` +
      `    ci        CI/CD 配置\n` +
      `    revert    回滚提交\n` +
      `    workflow  工作流相关\n` +
      `    types     类型定义\n` +
      `    wip       进行中的工作\n` +
      `    release   发布相关\n` +
      `    dep/deps  依赖相关\n` +
      `    example   示例\n` +
      `    merge     合并提交\n\n` +
      `  ${chalk.yellow('特殊提交：')}\n` +
      `    Merge xxx   合并提交\n` +
      `    Revert xxx  回滚提交\n` +
      `    Version xxx 版本提交\n\n` +
      `  ${chalk.yellow('例如：')}\n` +
      `    ${chalk.green('feat: 新增功能')}\n` +
      `    ${chalk.green('fix(lint): 修复配置问题')}\n` +
      `    ${chalk.green('chore: 更新依赖版本')}\n` +
      `    ${chalk.green("Merge branch 'main' into dev")}\n`,
  );
}

/**
 * 验证 commit message 格式
 */
if (!commitRE.test(msg)) {
  printError();
  process.exit(1);
}

process.exit(0);

