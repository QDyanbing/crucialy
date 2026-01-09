import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('custom-media-pattern', () => {
  it('应该通过自定义媒体查询名称使用 kebab-case 的代码', async () => {
    const file = resolveFixture('core', 'pattern', 'custom-media-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-media-pattern');

    // 只检查该规则没有警告，不检查其他规则
    expect(ruleWarnings.length).toBe(0);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告自定义媒体查询名称不使用 kebab-case 的错误', async () => {
    const file = resolveFixture('core', 'pattern', 'custom-media-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'custom-media-pattern');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('custom-media-pattern');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/custom.*media|pattern/i);
    });
  });
});
