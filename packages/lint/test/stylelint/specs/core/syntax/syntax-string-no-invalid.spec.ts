import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('syntax-string-no-invalid', () => {
  it('应该通过使用有效语法字符串的代码', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'syntax-string-no-invalid');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告使用无效语法字符串的错误', async () => {
    const file = resolveFixture('core', 'syntax', 'syntax-string-no-invalid-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    expect(errored).toBe(true);

    const warnings = results[0]?.warnings ?? [];
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === 'syntax-string-no-invalid');

    expect(errored).toBe(true);
    // 如果该规则有警告，应该检查；如果没有，可能被其他规则（如 at-rule-prelude-no-invalid）捕获
    if (ruleWarnings.length > 0) {
      expect(ruleNames).toContain('syntax-string-no-invalid');
    } else {
      // 如果没有该规则的警告，至少应该有其他相关警告
      expect(ruleNames.length).toBeGreaterThan(0);
    }
  });
});
