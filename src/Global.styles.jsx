import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${(props) => props.fontFamily};
}

body {
  padding: ${24 / 16}rem;
  color: #2d2d2d;
}
`;

export default GlobalStyle;
