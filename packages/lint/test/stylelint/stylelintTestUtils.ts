/**
 * Stylelint 测试工具函数
 * 提供测试所需的辅助函数和工具方法
 *
 * @module test/stylelint/stylelintTestUtils
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Config, Result, Warning } from 'stylelint';
import stylelint from 'stylelint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 解析测试fixture文件路径
 * @param paths - 路径片段
 * @returns 完整的文件路径
 */
export function resolveFixture(...paths: string[]) {
  return path.join(__dirname, 'fixtures', ...paths);
}

/**
 * 直接用 src 里的 TS 配置，不依赖 dist。
 * 示例：
 *   import core from '../../src/stylelint/core';
 *   runStylelintWithConfig({ config: core, files: [...] })
 */
export async function runStylelintWithConfig(options: {
  config: Config;
  files: string | string[];
}) {
  const { config, files } = options;

  const result = await stylelint.lint({
    files,
    config,
  });

  return result;
}

/**
 * 获取指定规则的所有警告
 * @param result - Stylelint结果对象
 * @param ruleName - 规则名称
 * @returns 该规则的所有警告
 */
export function getRuleWarnings(result: Result, ruleName: string): Warning[] {
  const warnings = result.warnings ?? [];
  return warnings.filter(w => w.rule === ruleName);
}

/**
 * 获取所有错误的行号（去重并排序）
 * @param warnings - 警告数组
 * @returns 排序后的行号数组
 */
export function getErrorLines(warnings: Warning[]): number[] {
  return [...new Set(warnings.map(w => w.line))].sort((a, b) => a - b);
}

/**
 * 验证警告是否包含特定关键词
 * @param warnings - 警告数组
 * @param keywords - 关键词数组（大小写不敏感）
 * @returns 是否所有警告都包含至少一个关键词
 */
export function validateWarningMessages(warnings: Result['warnings'], keywords: string[]) {
  return warnings.every(warning =>
    keywords.some(keyword => warning.text.toLowerCase().includes(keyword.toLowerCase())),
  );
}
