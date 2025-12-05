/**
 * Color 相关规则
 *
 * 包含颜色表示法、格式、验证等规则（9条）
 * - 颜色函数表示法（modern/legacy）
 * - 颜色函数别名
 * - 色相角度表示法
 * - 亮度值表示法
 * - hex 颜色 alpha 通道使用
 * - hex 颜色长度和格式
 * - 命名颜色
 * - hex 使用限制
 * - hex 合法性校验
 */

import type { Config } from 'stylelint';

export const colorRules: Config['rules'] = {

  /**
   * color-function-notation
   * 指定颜色函数的表示法
   *
   * 说明：CSS 颜色函数有两种语法：
   * - modern：空格分隔 + 斜杠分隔透明度 rgb(0 0 0 / 50%)
   * - legacy：逗号分隔 rgba(0, 0, 0, 0.5)
   *
   * Base 配置设为 null 的原因：
   * - Less 等预处理器可能不完全支持 modern 语法
   * - 保持向后兼容性
   *
   * 某些项目可以将此规则设置为 'modern' 或 'legacy'，
   * 用于强制团队统一使用现代或传统颜色函数写法。
   *
   * ✅ 正确示例（null 时）：rgb(0 0 0 / 50%)
   * ✅ 正确示例（null 时）：rgba(0, 0, 0, 0.5)
   * ❌ 错误示例（当配置为 'modern' 时）：rgba(0, 0, 0, 0.5)
   * ❌ 错误示例（当配置为 'legacy' 时）：rgb(0 0 0 / 50%)
   */
  'color-function-notation': null,
  
  /**
   * color-function-alias-notation
   * 指定颜色函数别名的使用方式
   *
   * 说明：某些颜色函数有别名形式：
   * - rgb / rgba（a 表示 alpha 透明度）
   * - hsl / hsla
   *
   * 在 modern 语法中，rgb 和 rgba 实际上是一样的
   * - rgb(0 0 0 / 50%) 等同于 rgba(0 0 0 / 50%)
   *
   * Base 配置不限制，允许团队自行选择习惯用法
   *
   * ✅ 正确示例（null 时）：rgb(255, 0, 0)
   * ✅ 正确示例（null 时）：rgba(255, 0, 0, 0.5)
   * ✅ 正确示例（null 时）：hsl(120, 100%, 50%)
   * ✅ 正确示例（null 时）：hsla(120, 100%, 50%, 0.5)
   */
  'color-function-alias-notation': null,
  
  /**
   * hue-degree-notation
   * 指定 HSL 颜色函数中色相（hue）的表示法
   *
   * 说明：HSL/HWB 颜色函数中的色相值有两种表示方式：
   * - angle：使用角度单位（如 180deg、0.5turn、3.14rad）
   * - number：纯数字（如 180，表示 180度）
   *
   * 使用角度单位更明确，避免歧义，也是 CSS 规范推荐的方式
   *
   * Base 配置使用 angle（带单位）
   *
   * ✅ 正确示例：hsl(180deg 50% 50%)
   * ✅ 正确示例：hsl(0.5turn 50% 50%)
   * ✅ 正确示例：hwb(180deg 30% 40%)
   * ❌ 错误示例：hsl(180 50% 50%) (缺少角度单位)
   */
  'hue-degree-notation': 'angle',
  
  /**
   * lightness-notation
   * 指定 HSL 颜色函数中亮度（lightness）和饱和度（saturation）的表示法
   *
   * 说明：HSL 颜色函数中的饱和度和亮度值有两种表示方式：
   * - percentage：百分比形式（如 50%）
   * - number：数字形式（如 0.5）
   *
   * 百分比形式更符合 HSL 的直观理解（0%-100% 的范围）
   * 也是 CSS 规范推荐和广泛使用的方式
   *
   * Base 配置使用 percentage（百分比）
   *
   * ✅ 正确示例：hsl(180deg 50% 50%)
   * ✅ 正确示例：hsl(0deg 100% 50%)
   * ❌ 错误示例：hsl(180deg 0.5 0.5) (应使用百分比)
   */
  'lightness-notation': 'percentage',
  
  /**
   * color-hex-alpha
   * 控制 hex 颜色是否使用 alpha 通道
   *
   * 说明：hex 颜色可以包含 alpha 透明度（8位 hex）
   * - 6位 hex：#ffffff（不透明）
   * - 8位 hex：#ffffff80（带透明度）
   *
   * 选项：
   * - null：不限制
   * - always：必须使用 8位（所有颜色都要带透明度）
   * - never：禁止使用 8位（透明色用 rgba）
   *
   * Base 配置不限制，因为两种方式都有适用场景
   *
   * ✅ 正确示例（null 时）：#fff
   * ✅ 正确示例（null 时）：#ffffff80
   * ❌ 错误示例（never 时）：#ffffff80
   * ❌ 错误示例（always 时）：#fff（缺少 alpha）
   */
  'color-hex-alpha': null,
  
  /**
   * color-hex-length
   * 指定 hex 颜色的长度格式
   *
   * 说明：当 hex 颜色可以简写时，要求统一格式
   * - short：#fff（3位或4位）
   * - long：#ffffff（6位或8位）
   *
   * 短格式更简洁，是业界常见做法
   *
   * 配置：Base 使用 short
   *
   * ✅ 正确示例：#fff
   * ✅ 正确示例：#f5f5f5（无法简写的保持6位）
   * ❌ 错误示例：#ffffff（可以简写为 #fff）
   * ❌ 错误示例：#000000（可以简写为 #000）
   */
  'color-hex-length': 'short',
  
  /**
   * color-named
   * 禁止使用命名颜色
   *
   * 说明：CSS 支持使用颜色名称（如 red、blue、black）
   * - never：禁止使用命名颜色，要求使用 hex 或 rgb
   * - always-where-possible：尽可能使用命名颜色
   * - null：不限制
   *
   * Base 配置设为 never 的原因：
   * - hex 值更精确、可控（#000 vs black）
   * - 命名颜色容易产生歧义（red 到底是哪个红？）
   * - 命名颜色数量有限，无法覆盖所有设计需求
   * - hex 值可以直接复制自设计稿，保持一致性
   * - 统一使用 hex 让代码更规范
   *
   * ✅ 正确示例：color: #000;
   * ✅ 正确示例：color: #f00;
   * ✅ 正确示例：background: transparent; (transparent 不受此规则限制)
   * ❌ 错误示例：color: black;
   * ❌ 错误示例：color: red;
   * ❌ 错误示例：border-color: blue;
   */
  'color-named': 'never',
  
  /**
   * color-no-hex
   * 禁止使用 hex 颜色
   *
   * 说明：要求使用颜色函数（rgb/hsl）而非 hex 格式
   *
   * Base 配置不限制，因为 hex 是最常用的颜色格式
   * - hex 简洁明了
   * - 设计稿通常提供 hex 值
   * - 广泛的浏览器支持
   *
   * 某些项目可能出于以下原因禁用 hex：
   * - 统一使用 rgb/hsl 以便动态调整
   * - 团队编码规范要求
   *
   * ✅ 正确示例（null 时）：color: #fff;
   * ✅ 正确示例（null 时）：color: rgb(255, 255, 255);
   * ❌ 错误示例（true 时）：color: #fff;
   */
  'color-no-hex': null,
  
  /**
   * color-no-invalid-hex
   * 禁止无效的 hex 颜色
   *
   * 说明：检查 hex 颜色格式是否正确
   * - 有效：#fff、#ffffff、#fff8、#ffffff80
   * - 无效：位数错误、包含非法字符
   *
   * 无效的 hex 颜色会导致样式失效，必须禁止
   *
   * ✅ 正确示例：color: #fff;
   * ✅ 正确示例：color: #f5f5f5;
   * ✅ 正确示例：color: #fff8;
   * ❌ 错误示例：color: #fffffffff; (位数错误)
   * ❌ 错误示例：color: #gggggg; (包含非法字符 g)
   */
  'color-no-invalid-hex': true,
  
};
