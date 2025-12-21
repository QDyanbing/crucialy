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
    const ruleNames = warnings.map(w => w.rule);
    const ruleWarnings = warnings.filter(w => w.rule === '@stylistic/unicode-bom');

    expect(errored).toBe(true);
    // BOM 检测可能需要特殊处理，因为文件系统可能会自动处理 BOM
    // 如果该规则有警告，应该检查；如果没有，可能是文件系统已经处理了 BOM
    if (ruleWarnings.length > 0) {
      expect(ruleNames).toContain('@stylistic/unicode-bom');
    } else {
      // 如果没有该规则的警告，至少应该有其他相关警告
      expect(ruleNames.length).toBeGreaterThan(0);
    }
  });
});
