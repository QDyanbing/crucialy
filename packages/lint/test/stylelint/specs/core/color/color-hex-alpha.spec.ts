import colorRules from '@/stylelint/core/color';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('color-hex-alpha', () => {
  it('应该通过使用 hex 颜色的代码', async () => {
    const file = resolveFixture('core', 'color', 'color-hex-alpha.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: colorRules },
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(w => w.rule === 'color-hex-alpha');

    // 正向测试用例文件可能有其他规则的警告，但不应该有此规则的警告
    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(results[0]?.source).toBe(file);
  });
});
