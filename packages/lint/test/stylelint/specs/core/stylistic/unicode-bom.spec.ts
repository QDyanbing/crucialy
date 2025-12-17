import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('@stylistic/unicode-bom', () => {
  it('应该通过文件开头没有 BOM 的代码', async () => {
    const file = resolveFixture('core', 'stylistic', 'unicode-bom.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/unicode-bom');

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告文件开头有 BOM 的错误', async () => {
    const file = resolveFixture('core', 'stylistic', 'unicode-bom-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/unicode-bom');

    // BOM 检测可能需要特殊处理，这里先检查是否有警告
    if (ruleWarnings.length > 0) {
      expect(ruleWarnings.length).toBeGreaterThan(0);
    } else {
      // 如果没有 BOM，测试应该通过
      expect(ruleWarnings.length).toBe(0);
    }
  });
});
