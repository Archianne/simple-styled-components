import styled from 'styled-components';

export const Text2 = styled.p<any>`
  color: ${({ color }) => (color ? color : 'red')};
  font-size: ${({ fontSize }) => (fontSize ? '10px' : '12px')};
`;
