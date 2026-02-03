import selectorRules from '@/stylelint/core/selector';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('selector-no-qualifying-type', () => {
  it('应该通过不使用类型选择器限定类或ID的代码', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'selector-no-qualifying-type': selectorRules['selector-no-qualifying-type'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-no-qualifying-type');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用类型选择器限定类或ID的错误', async () => {
    const file = resolveFixture('core', 'selector', 'selector-no-qualifying-type-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: selectorRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'selector-no-qualifying-type');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([7]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('selector-no-qualifying-type');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/qualifying|type/i);
    });
  });
});
