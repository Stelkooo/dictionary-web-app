import styled from 'styled-components';

export const DefinitionsContainer = styled.div`
  margin-bottom: ${24 / 16}rem;
  @media screen and (min-width: 768px) {
    margin-bottom: ${40 / 16}rem;
  }
`;

export const DefinitionsList = styled.ul``;

export const Definition = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: ${24 / 16}rem;
  font-size: ${15 / 16}rem;
  line-height: ${24 / 16}rem;
  list-style: none;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: -20px;
    top: 10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #a445ed;
  }
  &:not(:last-of-type) {
    margin-bottom: ${13 / 16}rem;
  }
  @media screen and (min-width: 768px) {
    font-size: ${18 / 16}rem;
  }
`;

export const Example = styled.span`
  margin-top: ${13 / 16}rem;
  color: #757575;
  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
`;
