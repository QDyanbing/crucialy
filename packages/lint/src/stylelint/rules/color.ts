/**
 * Color 相关规则
 * 
 * 包含颜色表示法、格式、验证等规则（8条）
 * - alpha 值表示法
 * - 颜色函数表示法（modern/legacy）
 * - hex 颜色长度和格式
 * - 命名颜色
 * - 颜色验证
 */

import type { Config } from 'stylelint';

export const colorRules: Config['rules'] = {
  
  /**
   * alpha-value-notation
   * 指定透明度值的表示法
   *
   * 说明：CSS 中透明度可以用两种方式表示：
   * - percentage：百分比形式（50%）
   * - number：数字形式（0.5）
   *
   * 使用百分比更直观易懂，与其他 CSS 百分比值保持一致
   *
   * 配置：Base 使用 percentage
   *
   * ✅ 正确示例：rgba(0, 0, 0, 50%)
   * ✅ 正确示例：rgb(255 255 255 / 80%)
   * ❌ 错误示例：rgba(0, 0, 0, 0.5)
   * ❌ 错误示例：rgb(255 255 255 / 0.8)
   */
  'alpha-value-notation': 'percentage',
  
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
   * Strict 配置可以启用 modern 以使用最新标准
   *
   * ✅ 正确示例（null 时）：rgb(0 0 0 / 50%)
   * ✅ 正确示例（null 时）：rgba(0, 0, 0, 0.5)
   * ❌ 错误示例（modern 时）：rgba(0, 0, 0, 0.5)
   * ❌ 错误示例（legacy 时）：rgb(0 0 0 / 50%)
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
   * 控制是否使用命名颜色
   *
   * 说明：CSS 支持使用颜色名称（如 red、blue、black）
   * - never：禁止使用命名颜色，要求使用 hex 或 rgb
   * - always-where-possible：尽可能使用命名颜色
   * - null：不限制
   *
   * Base 配置不限制的原因：
   * - 命名颜色直观易读（black 比 #000 更清晰）
   * - 但命名颜色数量有限，无法覆盖所有需求
   *
   * Strict 配置可以设为 never 以保持一致性
   *
   * ✅ 正确示例（null 时）：color: #000;
   * ✅ 正确示例（null 时）：color: black;
   * ❌ 错误示例（never 时）：color: black;
   * ❌ 错误示例（always-where-possible 时）：color: #000; (应用 black)
   */
  'color-named': null,
  
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
