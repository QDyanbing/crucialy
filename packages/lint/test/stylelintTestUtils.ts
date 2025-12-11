import path from 'node:path';
import { fileURLToPath } from 'node:url';
import stylelint from 'stylelint';
import type { Config } from 'stylelint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

