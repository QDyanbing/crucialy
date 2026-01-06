import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-calc-no-unspaced-operator', () => {
  it('应该通过 calc() 运算符周围有空格的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-calc-no-unspaced-operator.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-calc-no-unspaced-operator');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 calc() 运算符周围缺少空格的错误', async () => {
    const file = resolveFixture(
      'core',
      'function',
      'function-calc-no-unspaced-operator-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-calc-no-unspaced-operator');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('function-calc-no-unspaced-operator');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/calc|operator|unspaced/i);
    });
  });
});
