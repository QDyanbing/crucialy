import mediaRules from '@/stylelint/core/media';
import { describe, expect, it } from 'vitest';
import {
  getErrorLines,
  getRuleWarnings,
  resolveFixture,
  runStylelintWithConfig,
  validateWarningMessages,
} from '../../../stylelintTestUtils';

const ruleName = 'media-feature-name-value-no-unknown';

describe(ruleName, () => {
  it('应该通过使用已知媒体特性值的代码', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-value-no-unknown.css');

    const { errored, results } = await runStylelintWithConfig({
      config: {
        rules: { [ruleName]: mediaRules[ruleName] },
      },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(ruleWarnings.length).toBe(0);
    expect(errored).toBe(false);
    expect(result.source).toBe(file);
  });

  it('应该报告使用未知媒体特性值的错误', async () => {
    const file = resolveFixture('core', 'media', 'media-feature-name-value-no-unknown-invalid.css');

    const { errored, results } = await runStylelintWithConfig({
      config: { rules: mediaRules },
      files: file,
    });

    const result = results[0];
    if (!result) throw new Error('No result returned');
    const ruleWarnings = getRuleWarnings(result, ruleName);

    expect(errored).toBe(true);
    expect(ruleWarnings.length).toBeGreaterThan(0);
    expect(result.source).toBe(file);

    expect(getErrorLines(ruleWarnings)).toEqual([3, 9]);
    expect(validateWarningMessages(ruleWarnings, ['media', 'feature', 'value', 'unknown'])).toBe(
      true,
    );
    ruleWarnings.forEach(w => {
      expect(w.rule).toBe(ruleName);
      expect(w.severity).toBe('error');
    });
  });
});
