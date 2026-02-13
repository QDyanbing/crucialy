/**
 * Vitest 测试配置
 * 配置测试环境、覆盖率、路径别名等
 */

import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/specs/**/*.spec.ts'],
    globals: true,
    environment: 'node',
    passWithNoTests: true, // 没有测试文件时不报错
    testTimeout: 10000, // 设置测试超时时间为10秒
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts', 'src/**/index.ts'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['./src/*'],
        },
      },
    },
  },
});
