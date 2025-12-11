/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 css={titleStyle}>{children}</h1>;
};
