import styled from 'styled-components';

export const PartOfSpeechContainer = styled.div`
  margin-bottom: ${32 / 16}rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const PartOfSpeechHeading = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const Speech = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  font-weight: 700;
  font-style: italic;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingMedium};
  }
`;

export const Meaning = styled.div`
  & > p {
    color: ${({ theme }) => theme.colours.black300};
    margin-bottom: 1rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & > p {
      font-size: ${({ theme }) => theme.fontSizes.headingSmall};
    }
  }
`;
