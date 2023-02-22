import styled from 'styled-components';

export const WordContainer = styled.div`
  margin-bottom: ${32 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const WordPhoneticsContainer = styled.div``;

export const WordName = styled.h2`
  margin-bottom: ${8 / 16}rem;
  font-weight: 700;
  font-size: ${32 / 16}rem;
  color: #2d2d2d;

  @media screen and (min-width: 768px) {
    font-size: ${64 / 16}rem;
  }
`;

export const Phonetic = styled.h3`
  font-weight: 400;
  font-size: ${18 / 16}rem;
  color: #a445ed;
  @media screen and (min-width: 768px) {
    font-size: ${24 / 16}rem;
  }
`;
