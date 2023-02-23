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
}
`;

export default GlobalStyle;
