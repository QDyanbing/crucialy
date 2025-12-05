/**
 * At-rule 相关规则
 * 
 * 包含 @规则相关规则（10条）
 * - @规则验证（未知、已弃用）
 * - vendor prefix
 * - 空行要求
 * - @规则 descriptor 验证
 * - 白名单/黑名单
 */

import type { Config } from 'stylelint';

export const atRuleRules: Config['rules'] = {
  /**
   * at-rule-no-unknown
   * 禁止使用未知的 @规则
   *
   * 说明：CSS 中的 @规则用于传递元数据、条件信息或其他描述性信息
   * - 标准 @规则：@media, @import, @keyframes, @font-face, @supports 等
   * - 预处理器专用：@mixin, @extend 等（需要配置 ignoreAtRules）
   *
   * 如果使用 Sass/Less 等预处理器，需要在 ignoreAtRules 中配置允许的 @规则
   *
   * ✅ 正确示例：@media (min-width: 768px) { ... }
   * ✅ 正确示例：@import url('styles.css');
   * ❌ 错误示例：@unknown-rule { ... } (不存在的 @规则)
   */
  'at-rule-no-unknown': true,
  
  /**
   * at-rule-no-deprecated
   * 禁止使用已弃用的 @规则
   *
   * 说明：某些 @规则在新的 CSS 规范中已被废弃
   * - 已弃用：@document（已从规范中移除）
   * - 建议替代：使用 @supports 进行特性检测
   *
   * ✅ 正确示例：@media screen and (min-width: 768px) { ... }
   * ❌ 错误示例：@document url(http://example.com/) { ... }
   */
  'at-rule-no-deprecated': true,
  
  /**
   * at-rule-no-vendor-prefix
   * 禁止 @规则使用浏览器厂商前缀
   *
   * 说明：现代 CSS 中不再需要手动添加 vendor prefix
   * - 建议使用 Autoprefixer 等工具自动添加
   * - 手动添加会导致代码冗余且难以维护
   *
   * Autoprefixer 会根据 browserslist 配置自动处理兼容性
   *
   * ✅ 正确示例：@keyframes slideIn { ... }
   * ❌ 错误示例：@-webkit-keyframes slideIn { ... }
   * ❌ 错误示例：@-moz-keyframes slideIn { ... }
   */
  'at-rule-no-vendor-prefix': true,
  
  /**
   * at-rule-allowed-list
   * 指定允许使用的 @规则白名单
   *
   * 说明：限制项目中只能使用特定的 @规则
   * - null：允许所有 @规则
   * - 数组：只允许列表中的 @规则
   *
   * Base 配置不限制，如需限制可在项目中自定义
   *
   * 配置示例：['media', 'import', 'font-face']
   * ✅ 正确示例（配置后）：@media { ... }, @import '...';
   * ❌ 错误示例（配置后）：@keyframes { ... }（不在白名单中）
   */
  'at-rule-allowed-list': null,
  
  /**
   * at-rule-disallowed-list
   * 指定禁止使用的 @规则黑名单
   *
   * 说明：禁止项目中使用特定的 @规则
   * - null：不禁止任何 @规则
   * - 数组：禁止列表中的 @规则
   *
   * Base 配置不限制，常见禁用场景：
   * - 禁用 @extend（推荐使用 mixin 或 CSS 变量）
   * - 禁用 @debug（生产环境不应有调试代码）
   *
   * 配置示例：['extend', 'debug']
   * ❌ 错误示例（配置后）：@extend .base-class;
   */
  'at-rule-disallowed-list': null,
  
  /**
   * at-rule-empty-line-before
   * 要求 @规则前有空行
   *
   * 说明：保持 @规则前的空行，提高代码可读性
   * - always：总是要求空行
   * - except：例外情况不需要空行
   * - ignore：忽略特定情况
   *
   * 例外情况：
   * - blockless-after-same-name-blockless：连续的同名无块 @规则
   * - first-nested：作为第一个嵌套规则
   * 
   * 忽略情况：
   * - after-comment：注释后的 @规则
   *
   * ✅ 正确示例：
   * .foo { color: red; }
   * 
   * @media (min-width: 768px) { ... }
   * 
   * ❌ 错误示例：
   * .foo { color: red; }
   * @media (min-width: 768px) { ... }
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    },
  ],
  
  /**
   * at-rule-property-required-list
   * 要求特定 @规则必须包含指定的属性
   *
   * 说明：某些 @规则需要必填属性才能正常工作
   * - null：不做限制
   * - 对象：指定每个 @规则的必填属性列表
   *
   * Base 配置不限制，常见使用场景：
   * - @font-face 必须有 font-family 和 src
   * - @counter-style 必须有 system 和 symbols
   *
   * 配置示例：{ 'font-face': ['font-family', 'src'] }
   * ✅ 正确示例（配置后）：
   * @font-face {
   *   font-family: 'MyFont';
   *   src: url('font.woff2');
   * }
   * 
   * ❌ 错误示例（配置后）：
   * @font-face {
   *   font-family: 'MyFont';
   *   (缺少 src)
   * }
   */
  'at-rule-property-required-list': null,
  
  /**
   * at-rule-prelude-no-invalid
   * 禁止 @规则的 prelude 部分无效
   *
   * 说明：@规则的 prelude 是 @ 关键字和花括号之间的部分
   * - @media 的 prelude：媒体查询条件
   * - @import 的 prelude：URL 和媒体查询
   * - @keyframes 的 prelude：动画名称
   *
   * 检查 prelude 语法是否符合规范
   *
   * ✅ 正确示例：@media (min-width: 768px) { ... }
   * ✅ 正确示例：@media (width > 600px) { ... }
   * ❌ 错误示例：@media (width >>> 600px) { ... } (无效的运算符)
   * ❌ 错误示例：@keyframes 123invalid { ... } (名称不能以数字开头)
   */
  'at-rule-prelude-no-invalid': true,
  
  /**
   * at-rule-descriptor-no-unknown
   * 禁止在 @规则中使用未知的 descriptor
   *
   * 说明：某些 @规则（如 @font-face）内部使用 descriptor 而非普通属性
   * - @font-face：font-family, src, font-weight, font-display 等
   * - @counter-style：system, symbols, suffix 等
   * - @property：syntax, inherits, initial-value 等
   *
   * descriptor 是 @规则的专用配置项，不同于 CSS 属性
   *
   * ✅ 正确示例：
   * @font-face {
   *   font-family: 'MyFont';
   *   src: url('font.woff2');
   *   font-display: swap;
   * }
   * 
   * ❌ 错误示例：
   * @font-face {
   *   font-family: 'MyFont';
   *   unknown-descriptor: value; (不存在的 descriptor)
   * }
   */
  'at-rule-descriptor-no-unknown': true,
  
  /**
   * at-rule-descriptor-value-no-unknown
   * 禁止 @规则 descriptor 使用未知的值
   *
   * 说明：检查 descriptor 的值是否符合规范
   * - font-display：auto, block, swap, fallback, optional
   * - font-style：normal, italic, oblique
   * - system（@counter-style）：cyclic, numeric, alphabetic 等
   *
   * ✅ 正确示例：
   * @font-face {
   *   font-family: 'MyFont';
   *   font-display: swap; (有效值)
   * }
   * 
   * ❌ 错误示例：
   * @font-face {
   *   font-family: 'MyFont';
   *   font-display: unknown; (无效值)
   * }
   */
  'at-rule-descriptor-value-no-unknown': true,
  
};
