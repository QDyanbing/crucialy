import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/value-list-max-empty-lines', () => {
  it('应该通过值列表中没有空行的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-max-empty-lines.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/value-list-max-empty-lines');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告值列表中有空行的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'value-list-max-empty-lines-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/value-list-max-empty-lines');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('@stylistic/value-list-max-empty-lines');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/value|empty.*line/i);
    });
  });
});
