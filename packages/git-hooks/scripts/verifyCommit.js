#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const msgPath = process.argv[2];
if (!msgPath) process.exit(0);

function removeComment(msg) {
  return msg.replace(/^#.*[\n\r]*/gm, '');
}

const msg = removeComment(fs.readFileSync(msgPath, 'utf-8').trim());

// 约定式提交格式: <type>(<scope>): <subject>
// type: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  \x1b[41m\x1b[37m ERROR \x1b[0m \x1b[31m提交信息不符合约定格式\x1b[0m\n\n` +
      `  \x1b[31m请使用格式：\x1b[0m <type>(<scope>): <subject>\n\n` +
      `  \x1b[33mtype 说明：\x1b[0m\n` +
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
      `    revert    回滚提交\n\n` +
      `  \x1b[32m例如：\x1b[0m\n` +
      `    \x1b[32mfeat: 新增功能\x1b[0m\n` +
      `    \x1b[32mfix(lint): 修复配置问题\x1b[0m\n` +
      `    \x1b[32mchore: 更新依赖版本\x1b[0m\n`,
  );
  process.exit(1);
}

process.exit(0);

