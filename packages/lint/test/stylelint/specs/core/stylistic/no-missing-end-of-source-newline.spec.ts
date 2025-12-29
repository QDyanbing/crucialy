import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/no-missing-end-of-source-newline', () => {
  it('应该通过文件末尾有换行符的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'no-missing-end-of-source-newline.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/no-missing-end-of-source-newline',
    );

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告文件末尾缺少换行符的错误', async () => {
    const file = resolveFixture(
      'core',
      'stylistic',
      'no-missing-end-of-source-newline-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === '@stylistic/no-missing-end-of-source-newline',
    );

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/no-missing-end-of-source-newline');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/missing|newline|end/i);
    });
  });
});
