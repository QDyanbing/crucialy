module.exports = {
  printWidth: 100, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 使用空格缩进而非 Tab
  semi: true, // 语句末尾添加分号 | const a = 1;
  singleQuote: true, // 使用单引号 | const name = 'crucialy'
  quoteProps: 'as-needed', // 对象属性引号：仅在需要时添加 | { name: 'x', 'user-id': 1 }
  jsxSingleQuote: false, // JSX 中使用双引号 | <div className="box" />
  trailingComma: 'all', // 尾随逗号：所有可能的地方都添加 | const obj = { a: 1, b: 2, }
  bracketSpacing: true, // 对象字面量的括号之间打印空格 | { foo: bar } vs {foo: bar}
  bracketSameLine: false, // JSX 标签的右尖括号不与最后一行属性对齐
  arrowParens: 'avoid', // 箭头函数参数：仅在必要时添加括号 | x => x * 2 vs (x) => x * 2
  endOfLine: 'lf', // 行尾符：使用 LF（Unix 风格）
  proseWrap: 'never', // Markdown 文本换行：不自动换行，保持原始长度
  htmlWhitespaceSensitivity: 'ignore', // HTML 空白敏感性：忽略空白，允许更激进的格式化
  overrides: [{ files: '.prettierrc', options: { parser: 'json' } }], // 特定文件的配置覆盖
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'], // 自动排序 import 和 package.json
};

