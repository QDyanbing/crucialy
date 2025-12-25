import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('no-invalid-position-at-import-rule', () => {
  it('应该通过 @import 在文件开头的代码', async () => {
    const file = resolveFixture('core', 'general', 'no-invalid-position-at-import-rule.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-invalid-position-at-import-rule');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 @import 不在文件开头的错误', async () => {
    const file = resolveFixture(
      'core',
      'general',
      'no-invalid-position-at-import-rule-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'no-invalid-position-at-import-rule');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('no-invalid-position-at-import-rule');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/position|import/i);
    });
  });
});
