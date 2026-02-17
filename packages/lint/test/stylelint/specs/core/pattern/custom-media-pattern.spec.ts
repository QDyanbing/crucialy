import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'custom-media-pattern';

describe(ruleName, () => {
  it('应该通过自定义媒体查询名称使用 kebab-case 的代码', async () => {
    const file = resolveFixture('core', 'pattern', 'custom-media-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(result.source).toBe(file);
  });

  it('应该报告自定义媒体查询名称不使用 kebab-case 的错误', async () => {
    const file = resolveFixture('core', 'pattern', 'custom-media-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([3, 5]);
    expect(validateWarningMessages(ruleWarnings, ['custom', 'media', 'pattern'])).toBe(true);
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
