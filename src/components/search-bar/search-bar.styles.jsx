import styled from 'styled-components';

// import svg
import { ReactComponent as SearchSvg } from '../../assets/images/icon-search.svg';

export const SearchBarContainer = styled.div`
  margin-bottom: ${24 / 16}rem;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${43 / 16}rem;
  }
`;

export const SearchBarInput = styled.input`
  display: block;
  padding: ${14 / 16}rem ${24 / 16}rem;
  width: 100%;
  height: ${48 / 16}rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.theme.searchBar};
  border: ${(props) =>
    props.$displayError ? `1px solid ${props.theme.colours.warning}` : 'none'};
  outline: none;
  font-weight: 700;
  caret-color: ${({ theme }) => theme.colours.purple};

  &:focus {
    border: ${(props) =>
      props.$displayError
        ? `1px solid ${props.theme.colours.warning}`
        : `1px solid ${props.theme.colours.purple}`};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${24 / 16}rem;
    height: ${64 / 16}rem;
    font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  }
`;

export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: ${24 / 16}rem;
  right: ${24 / 16}rem;
`;

export const Error = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colours.warning};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  }
`;
