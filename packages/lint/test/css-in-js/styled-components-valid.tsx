/* styled-components-valid.tsx - styled-components 有效示例 */

import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: #000;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;

