import core from '@/stylelint/core';
import keyframeRules from '@/stylelint/core/keyframe';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('keyframes-name-pattern', () => {
  it('应该通过使用 kebab-case 命名的 keyframes', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframes-name-pattern.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { 'keyframes-name-pattern': keyframeRules['keyframes-name-pattern'] },
      },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframes-name-pattern');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });

  it('应该报告使用非 kebab-case 命名的错误', async () => {
    const file = resolveFixture('core', 'keyframe', 'keyframes-name-pattern-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'keyframes-name-pattern');

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(results[0]?.source).toBe(file);

    // 检查每个错误的具体信息
    const errorLines = [...new Set(ruleWarnings.map(w => w.line))].sort((a, b) => a - b);
    expect(errorLines).toEqual([3, 13]);

    // 检查错误信息包含相关关键词
    ruleWarnings.forEach(warning => {
      expect(warning.rule).toBe('keyframes-name-pattern');
      expect(warning.severity).toBe('error');
      expect(warning.text).toMatch(/keyframes|name|pattern/i);
    });
  });
});
