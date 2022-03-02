import styled from 'styled-components';

export const Button1 = styled.button<any>`
  color: ${({ color }) => (color ? color : 'red')};
  font-size: ${({ fontSize }) => (fontSize ? '10px' : '12px')};
`;
