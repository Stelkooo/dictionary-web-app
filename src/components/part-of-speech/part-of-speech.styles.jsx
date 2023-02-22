import styled from 'styled-components';

export const PartOfSpeechContainer = styled.div`
  margin-bottom: ${32 / 16}rem;
`;

export const PartOfSpeechHeading = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Speech = styled.h4`
  font-size: ${18 / 16}rem;
  font-weight: 700;
  font-style: italic;
`;

export const Meaning = styled.div`
  & > p {
    color: #757575;
    margin-bottom: 1rem;
  }
`;
