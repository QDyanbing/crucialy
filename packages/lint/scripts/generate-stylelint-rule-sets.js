// scripts/generate-stylelint-rule-sets.js
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// 输出目录
const OUT_DIR = path.resolve(__dirname, "../src/stylelint-rule-sets");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// 获取包根目录
function getPackageRoot(pkgName) {
  const pkgJsonPath = require.resolve(`${pkgName}/package.json`);
  return path.dirname(pkgJsonPath);
}

// 找 rules 目录
function findRulesDir(pkgName) {
  const root = getPackageRoot(pkgName);
  const candidates = ["rules", "dist/rules", "lib/rules", "src/rules"];

  for (const rel of candidates) {
    const full = path.join(root, rel);
    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
      return full;
    }
  }
  return null;
}

// 从 rules 目录扫描
function scanRulesFromFs(pkgName, prefix = "") {
  const dir = findRulesDir(pkgName);
  if (!dir) {
    console.warn(`[warn] Cannot find rules dir for ${pkgName}`);
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => [".js", ".cjs", ".mjs"].includes(path.extname(f)));

  return files
    .map((f) => path.basename(f, path.extname(f)))
    .map((name) => (prefix ? `${prefix}/${name}` : name))
    .sort();
}

// 从插件 exports 中扫描
function scanRulesFromExport(pkgName, prefix = "") {
  const mod = require(pkgName);
  const rulesObj = (mod && (mod.rules || mod.default?.rules)) || {};
  return Object.keys(rulesObj)
    .map((name) => (prefix ? `${prefix}/${name}` : name))
    .sort();
}

// 写出 TS 文件
function writeRuleSet(fileName, exportName, rules) {
  const fullPath = path.join(OUT_DIR, fileName);
  const content =
    `// AUTO-GENERATED. DO NOT EDIT.\n\n` +
    `export const ${exportName} = ${JSON.stringify(rules, null, 2)};\n`;

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`[ok] Generated ${fileName} (${rules.length} rules)`);
}

// 主函数
function main() {
  // Stylelint core
  const coreRules = scanRulesFromFs("stylelint");
  writeRuleSet("core.ts", "coreRules", coreRules);

  // @stylistic
  const stylisticRules = scanRulesFromExport(
    "@stylistic/stylelint-plugin",
    "@stylistic"
  );
  writeRuleSet("stylistic.ts", "stylisticRules", stylisticRules);

  // order
  const orderRules = scanRulesFromExport("stylelint-order", "order");
  writeRuleSet("order.ts", "orderRules", orderRules);

  // scss
  const scssRules = scanRulesFromFs("stylelint-scss", "scss");
  writeRuleSet("scss.ts", "scssRules", scssRules);

  // less
  const lessRules = scanRulesFromFs("stylelint-less", "less");
  writeRuleSet("less.ts", "lessRules", lessRules);

  // stylus
  const stylusRules = scanRulesFromFs("stylelint-stylus", "stylus");
  writeRuleSet("stylus.ts", "stylusRules", stylusRules);

  console.log("✨ All rule-sets generated!");
}

main();
