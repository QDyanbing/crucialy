import { defineConfig } from 'tsup';

export default defineConfig([
  // 主入口 - 只 re-export，不打包
  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    bundle: false, // 不打包，保持模块引用
  },
  // 子模块 - 独立打包
  {
    entry: {
      'prettier/index': 'src/prettier/index.ts',
      'eslint/index': 'src/eslint/index.ts',
      'eslint/react': 'src/eslint/react.ts',
      'eslint/vue': 'src/eslint/vue.ts',
      'stylelint/index': 'src/stylelint/index.ts',
      'stylelint/core': 'src/stylelint/core/index.ts',
      'stylelint/scss': 'src/stylelint/scss/index.ts',
      'stylelint/less': 'src/stylelint/less/index.ts',
      'stylelint/stylus': 'src/stylelint/stylus/index.ts',
      'stylelint/modules': 'src/stylelint/modules/index.ts',
      'stylelint/html': 'src/stylelint/html/index.ts',
      'stylelint/vue': 'src/stylelint/vue/index.ts',
      'stylelint/svelte': 'src/stylelint/svelte/index.ts',
      'stylelint/astro': 'src/stylelint/astro/index.ts',
      'stylelint/angular': 'src/stylelint/angular/index.ts',
      'stylelint/css-in-js': 'src/stylelint/css-in-js/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    treeshake: true,
  },
]);
