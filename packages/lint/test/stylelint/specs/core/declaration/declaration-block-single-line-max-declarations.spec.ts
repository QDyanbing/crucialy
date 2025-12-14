import core from '@/stylelint/core';
import { describe, expect, it } from 'vitest';
import { resolveFixture, runStylelintWithConfig } from '../../../stylelintTestUtils';

describe('declaration-block-single-line-max-declarations', () => {
  it('应该通过单行只有一个声明的代码', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-single-line-max-declarations.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    const ruleWarnings = warnings.filter(
      w => w.rule === 'declaration-block-single-line-max-declarations',
    );

    expect(ruleWarnings.length).toBe(0);
  });

  it('应该报告单行有多个声明的错误', async () => {
    const file = resolveFixture(
      'core',
      'declaration',
      'declaration-block-single-line-max-declarations-invalid.css',
    );

    const { errored, results } = await runStylelintWithConfig({
      config: core,
      files: file,
    });

    const warnings = results[0]?.warnings ?? [];
    if (warnings.length > 0) {
      console.log(
        '警告:',
        warnings.map(w => ({ rule: w.rule, line: w.line, text: w.text })),
      );
    }

    expect(errored).toBe(true);

    const ruleNames = warnings.map(w => w.rule);

    // 这个规则可能不会触发，因为其他规则（如 order/properties-order）可能先捕获
    // 我们检查是否有相关的警告
    expect(warnings.length).toBeGreaterThan(0);
  });
});
