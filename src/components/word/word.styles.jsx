import styled from 'styled-components';

export const WordContainer = styled.div`
  margin-bottom: ${32 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const WordPhoneticsContainer = styled.div``;

export const WordName = styled.h2`
  margin-bottom: ${8 / 16}rem;
  font-weight: 700;
  font-size: ${32 / 16}rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingLarge};
  }
`;

export const Phonetic = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  color: #a445ed;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingMedium};
  }
`;
