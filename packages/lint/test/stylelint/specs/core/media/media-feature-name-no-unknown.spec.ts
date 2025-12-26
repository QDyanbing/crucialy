import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('media-feature-name-no-unknown', () => {
  it('应该通过使用已知 media feature 的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-feature-name-no-unknown');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用未知 media feature 的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'media-feature-name-no-unknown');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('media-feature-name-no-unknown');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/media.*feature|unknown/i);
    });
  });
});
