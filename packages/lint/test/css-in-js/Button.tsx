import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--primary);
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

export const App = () => {
  return <Button>Click me</Button>;
};
