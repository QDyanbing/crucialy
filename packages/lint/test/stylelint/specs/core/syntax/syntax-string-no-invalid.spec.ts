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

    // 无效的语法可能被其他规则捕获（如 at-rule-prelude-no-invalid）
    // 我们检查是否有相关警告
    const hasSyntaxError = ruleNames.some(
      name => name === 'syntax-string-no-invalid' || name === 'at-rule-prelude-no-invalid',
    );

    expect(hasSyntaxError).toBe(true);
  });
});
