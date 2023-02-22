import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-bottom: ${24 / 16}rem;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-bottom: ${54 / 16}rem;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
`;
