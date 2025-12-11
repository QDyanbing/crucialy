/* styled-components-invalid.tsx - styled-components 无效示例（应触发错误） */

import styled from 'styled-components';

const Button = styled.button`
  colr: red; /* 拼写错误 -> 应触发 property-no-unknown */
  unknown-prop: 1; /* 未知属性 -> 应触发 property-no-unknown（如果规则未关闭） */
`;

export default Button;

