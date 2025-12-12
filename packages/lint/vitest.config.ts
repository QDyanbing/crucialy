import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/specs/**/*.spec.ts'],
    globals: true,
    environment: 'node',
    passWithNoTests: true, // 没有测试文件时不报错
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
