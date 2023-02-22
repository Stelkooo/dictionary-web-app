import styled from 'styled-components';

// import svg
import { ReactComponent as SearchSvg } from '../../assets/images/icon-search.svg';

export const SearchBarContainer = styled.div`
  position: relative;
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
`;

export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: 1rem;
  right: ${24 / 16}rem;
`;
