import styled from 'styled-components';

export const PartOfSpeechContainer = styled.div`
  margin-bottom: ${32 / 16}rem;
  @media screen and (min-width: 768px) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const PartOfSpeechHeading = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const Speech = styled.h4`
  font-size: ${18 / 16}rem;
  font-weight: 700;
  font-style: italic;
  @media screen and (min-width: 768px) {
    font-size: ${24 / 16}rem;
  }
`;

export const Meaning = styled.div`
  & > p {
    color: #757575;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    & > p {
      font-size: ${20 / 16}rem;
    }
  }
`;
