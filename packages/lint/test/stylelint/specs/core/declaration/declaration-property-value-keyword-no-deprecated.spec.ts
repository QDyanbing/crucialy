import declarationRules from '@/stylelint/core/declaration';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-property-value-keyword-no-deprecated', () => {
  it('应该通过使用未弃用属性值的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: declarationRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-property-value-keyword-no-deprecated',
    );

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用已弃用属性值的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-property-value-keyword-no-deprecated-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: declarationRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-property-value-keyword-no-deprecated',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([4, 5]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('declaration-property-value-keyword-no-deprecated');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/deprecated/i);
    });
  });
});
