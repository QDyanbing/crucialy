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
   * @name color-function-notation
   * @description 指定颜色函数的表示法；Less 等预处理器可能不完全支持 modern 语法，Base 配置不限制以保持向后兼容性
   * @value null - 不限制，允许两种语法
   * @value 'modern' - 空格分隔 + 斜杠分隔透明度（如：rgb(0 0 0 / 50%)）
   * @value 'legacy' - 逗号分隔（如：rgba(0, 0, 0, 0.5)）
   * @example ✅ 正确示例（null 时）：
   *  - rgb(0 0 0 / 50%)
   *  - rgba(0, 0, 0, 0.5)
   * @example ❌ 错误示例（假设配置为 'modern'）：
   *  - rgba(0, 0, 0, 0.5)                     (应使用 modern 语法：rgb(0 0 0 / 0.5))
   */
  'color-function-notation': null,

  /**
   * @name color-function-alias-notation
   * @description 指定颜色函数别名的使用方式；在 modern 语法中，rgb 和 rgba 实际上是一样的
   * @value null - 不限制，允许使用 rgb/rgba 或 hsl/hsla
   * @value 'short' - 使用短形式（rgb、hsl）
   * @value 'long' - 使用长形式（rgba、hsla）
   * @example ✅ 正确示例（null 时）：
   *  - rgb(255, 0, 0)
   *  - rgba(255, 0, 0, 0.5)
   *  - hsl(120, 100%, 50%)
   *  - hsla(120, 100%, 50%, 0.5)
   * @example ❌ 错误示例（假设配置为 'short'）：
   *  - rgba(255, 0, 0, 0.5)                   (应使用 rgb(255, 0, 0, 0.5))
   */
  'color-function-alias-notation': null,

  /**
   * @name hue-degree-notation
   * @description 指定 HSL/HWB 颜色函数中色相的表示法；使用角度单位更明确，避免歧义，也是 CSS 规范推荐的方式
   * @value 'angle' - 使用角度单位（如：180deg、0.5turn）
   * @value 'number' - 纯数字（如：180）
   * @example ✅ 正确示例：
   *  - hsl(180deg 50% 50%)
   *  - hsl(0.5turn 50% 50%)
   *  - hwb(180deg 30% 40%)
   * @example ❌ 错误示例：
   *  - hsl(180 50% 50%)                       (缺少角度单位，应为 180deg)
   */
  'hue-degree-notation': 'angle',

  /**
   * @name lightness-notation
   * @description 指定 HSL 颜色函数中亮度和饱和度的表示法；百分比形式更符合 HSL 的直观理解（0%-100%），也是 CSS 规范推荐的方式
   * @value 'percentage' - 百分比形式（如：50%）
   * @value 'number' - 数字形式（如：0.5）
   * @example ✅ 正确示例：
   *  - hsl(180deg 50% 50%)
   *  - hsl(0deg 100% 50%)
   * @example ❌ 错误示例：
   *  - hsl(180deg 0.5 0.5)                    (应使用百分比：50% 50%)
   */
  'lightness-notation': 'percentage',

  /**
   * @name color-hex-alpha
   * @description 控制 hex 颜色是否使用 alpha 通道；Base 配置不限制，因为两种方式都有适用场景
   * @value null - 不限制
   * @value 'always' - 必须使用 8位 hex（所有颜色都要带透明度）
   * @value 'never' - 禁止使用 8位 hex（透明色用 rgba）
   * @example ✅ 正确示例（null 时）：
   *  - color: #fff;
   *  - color: #ffffff80;
   * @example ❌ 错误示例（假设配置为 'never'）：
   *  - color: #ffffff80;                      (应使用 rgba(255, 255, 255, 0.5))
   */
  'color-hex-alpha': null,

  /**
   * @name color-hex-length
   * @description 指定 hex 颜色的长度格式；短格式更简洁，是业界常见做法
   * @value 'short' - 可以简写时使用短格式（3位或4位）
   * @value 'long' - 使用长格式（6位或8位）
   * @example ✅ 正确示例：
   *  - color: #fff;
   *  - color: #f5f5f5;                        (无法简写的保持6位)
   * @example ❌ 错误示例：
   *  - color: #ffffff;                        (可以简写为 #fff)
   *  - color: #000000;                        (可以简写为 #000)
   */
  'color-hex-length': 'short',

  /**
   * @name color-named
   * @description 禁止使用命名颜色；hex 值更精确可控，命名颜色容易产生歧义，统一使用 hex 让代码更规范
   * @value 'never' - 禁止使用命名颜色，要求使用 hex 或 rgb
   * @value 'always-where-possible' - 尽可能使用命名颜色
   * @value null - 不限制
   * @example ✅ 正确示例：
   *  - color: #000;
   *  - color: #f00;
   *  - background: transparent;                (transparent 不受此规则限制)
   * @example ❌ 错误示例：
   *  - color: black;                           (应使用 #000)
   *  - color: red;                             (应使用 #f00)
   *  - border-color: blue;                     (应使用 #00f)
   */
  'color-named': 'never',

  /**
   * @name color-no-hex
   * @description 禁止使用 hex 颜色；Base 配置不限制，因为 hex 是最常用且简洁的颜色格式
   * @value null - 不限制，允许使用 hex
   * @value true - 禁止使用 hex，要求使用颜色函数（rgb/hsl）
   * @example ✅ 正确示例（null 时）：
   *  - color: #fff;
   *  - color: rgb(255, 255, 255);
   * @example ❌ 错误示例（假设配置为 true）：
   *  - color: #fff;                            (应使用 rgb(255, 255, 255))
   */
  'color-no-hex': null,

  /**
   * @name color-no-invalid-hex
   * @description 禁止无效的 hex 颜色；检查 hex 颜色格式是否正确，无效的 hex 颜色会导致样式失效
   * @value true - 启用，禁止无效 hex
   * @value false - 禁用此规则
   * @example ✅ 正确示例：
   *  - color: #fff;
   *  - color: #f5f5f5;
   *  - color: #fff8;
   * @example ❌ 错误示例：
   *  - color: #fffffffff;                     (位数错误，hex 只能是 3/4/6/8 位)
   *  - color: #gggggg;                        (包含非法字符 g)
   */
  'color-no-invalid-hex': true,
};
