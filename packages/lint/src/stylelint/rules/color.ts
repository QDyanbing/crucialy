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

export const colorRules = {
  
  /**
   * alpha-value-notation
   * 指定 alpha 值的表示法
   * percentage: 使用百分比 | number: 使用数字 0-1
   * ✅ rgba(0, 0, 0, 50%)
   * ❌ rgba(0, 0, 0, 0.5)
   */
  'alpha-value-notation': 'percentage',
  
  /**
   * color-function-notation
   * 指定颜色函数的表示法
   * modern: rgb(0 0 0 / 50%) | legacy: rgba(0, 0, 0, 0.5)
   * null: 不限制（Base 设为 null 以兼容 Less 等预处理器）
   * ✅ rgb(0 0 0 / 50%) (null 时允许)
   * ✅ rgba(0, 0, 0, 0.5) (null 时允许)
   */
  'color-function-notation': null,
  
  /**
   * color-function-alias-notation
   * 指定颜色函数别名（hsl/hsla/rgb/rgba）
   * null: 不限制
   */
  'color-function-alias-notation': null,
  
  /**
   * color-hex-alpha
   * 禁止或要求 hex 颜色使用 alpha 通道
   * null: 不限制 | always: 必须使用 | never: 禁止使用
   * ✅ #fff (null 时允许)
   * ✅ #ffffff80 (null 时允许)
   */
  'color-hex-alpha': null,
  
  /**
   * color-hex-length
   * 指定 hex 颜色的长度
   * short: #fff | long: #ffffff
   * ✅ #fff
   * ❌ #ffffff
   */
  'color-hex-length': 'short',
  
  /**
   * color-named
   * 要求或禁止命名颜色
   * null: 不限制 | never: 禁止 | always-where-possible: 尽可能使用
   * ✅ #000 (null 时允许)
   * ✅ black (null 时允许)
   */
  'color-named': null,
  
  /**
   * color-no-hex
   * 禁止使用 hex 颜色
   * null: 允许使用 hex
   * ✅ #fff (null 时允许)
   * ✅ rgb(255 255 255) (null 时允许)
   */
  'color-no-hex': null,
  
  /**
   * color-no-invalid-hex
   * 禁止无效的 hex 颜色
   * ✅ #fff
   * ❌ #fffffffff (无效)
   */
  'color-no-invalid-hex': true,
  
};
