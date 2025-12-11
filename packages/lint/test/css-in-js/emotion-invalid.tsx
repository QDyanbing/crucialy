/* emotion-invalid.tsx - emotion 无效示例（应触发错误） */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const buttonStyle = css`
  colr: red; /* 拼写错误 -> 应触发 property-no-unknown */
  unknown-prop: 1; /* 未知属性 -> 应触发 property-no-unknown（如果规则未关闭） */
`;

export const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button css={buttonStyle}>{children}</button>;
};

