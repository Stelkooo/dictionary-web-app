import styled from 'styled-components';

export const Line = styled.div`
  width: ${(props) => (props.$isVertical ? '1px' : '100%')};
  height: ${(props) => (props.$isVertical ? '100%' : '1px')};
  background-color: #e9e9e9;
  margin-right: 1rem;
`;

export default Line;
