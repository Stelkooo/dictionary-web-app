import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${(props) => props.fontFamily};
  color: ${({ theme }) => theme.theme.font};
}

body {
  padding: ${24 / 16}rem;
  background-color: ${({ theme }) => theme.theme.background};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${58 / 16}rem ${24 / 16}rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${58 / 16}rem 0;
  }
}
`;

export default GlobalStyle;
