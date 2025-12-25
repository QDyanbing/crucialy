import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('function-url-quotes', () => {
  it('应该通过 url() 函数中 URL 使用引号的代码', async () => {
    const file = resolveFixture('core', 'function', 'function-url-quotes.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-url-quotes');

    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告 url() 函数中 URL 缺少引号的错误', async () => {
    const file = resolveFixture('core', 'function', 'function-url-quotes-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'function-url-quotes');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('function-url-quotes');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/url|quotes/i);
    });
  });
});
