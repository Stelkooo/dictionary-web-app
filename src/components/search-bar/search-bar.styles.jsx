import styled from 'styled-components';

// import svg
import { ReactComponent as SearchSvg } from '../../assets/images/icon-search.svg';

export const SearchBarContainer = styled.div`
  margin-bottom: ${24 / 16}rem;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: ${43 / 16}rem;
  }
`;

export const SearchBarInput = styled.input`
  display: block;
  padding: ${14 / 16}rem ${24 / 16}rem;
  width: 100%;
  height: ${48 / 16}rem;
  border-radius: 1rem;
  background-color: #f4f4f4;
  border: none;
  outline: none;
  font-weight: 700;
  caret-color: #a445ed;

  &:focus {
    border: 1px solid #a445ed;
  }
  @media screen and (min-width: 768px) {
    padding: ${24 / 16}rem;
    height: ${64 / 16}rem;
    font-size: ${20 / 16}rem;
  }
`;

export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: ${24 / 16}rem;
  right: ${24 / 16}rem;
`;
