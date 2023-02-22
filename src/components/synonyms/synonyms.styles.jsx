import styled from 'styled-components';

export const SynonymsContainer = styled.div`
  display: flex;
  gap: ${24 / 16}rem;
  margin-bottom: ${24 / 16}rem;
  @media screen and (min-width: 768px) {
    font-size: ${20 / 16}rem;
    margin-bottom: ${40 / 16}rem;
  }
`;

export const Title = styled.p`
  color: #757575;
`;

export const List = styled.p`
  color: #a445ed;
  font-weight: 700;
`;
