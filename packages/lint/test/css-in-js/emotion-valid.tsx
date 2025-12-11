/* emotion-valid.tsx - emotion 有效示例 */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const buttonStyle = css`
  padding: 8px 16px;
  color: #fff;
  background-color: #000;

  &:hover {
    opacity: 0.9;
  }
`;

export const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button css={buttonStyle}>{children}</button>;
};

