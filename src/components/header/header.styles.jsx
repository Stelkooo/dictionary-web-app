import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-bottom: ${24 / 16}rem;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${54 / 16}rem;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
`;
