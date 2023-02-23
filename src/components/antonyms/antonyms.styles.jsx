import styled from 'styled-components';

export const AntonymsContainer = styled.div`
  display: flex;
  gap: ${24 / 16}rem;
  margin-bottom: ${24 / 16}rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${20 / 16}rem;
    margin-bottom: ${40 / 16}rem;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colours.black300};
`;

export const List = styled.p`
  color: ${({ theme }) => theme.colours.purple};
  font-weight: 700;
`;
