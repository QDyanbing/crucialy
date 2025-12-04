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
      'stylelint/base': 'src/stylelint/base.ts',
      'stylelint/strict': 'src/stylelint/strict.ts',
      'stylelint/scss': 'src/stylelint/scss.ts',
      'stylelint/less': 'src/stylelint/less.ts',
      'stylelint/stylus': 'src/stylelint/stylus.ts',
      'stylelint/modules': 'src/stylelint/modules.ts',
      'stylelint/html': 'src/stylelint/html.ts',
      'stylelint/vue': 'src/stylelint/vue.ts',
      'stylelint/svelte': 'src/stylelint/svelte.ts',
      'stylelint/astro': 'src/stylelint/astro.ts',
      'stylelint/angular': 'src/stylelint/angular.ts',
      'stylelint/css-in-js': 'src/stylelint/css-in-js.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    treeshake: true,
  },
]);

