import React from 'react';
import styled from 'styled-components';

interface CardProps {
  padding?: string;
  shadow?: boolean;
}

const Card = styled.div<CardProps>`
  padding: ${props => props.padding || '16px'};
  border-radius: 8px;
  background-color: #fff;
  box-shadow: ${props => (props.shadow ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const CardComponent: React.FC<CardProps & { children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return <Card {...props}>{children}</Card>;
};
