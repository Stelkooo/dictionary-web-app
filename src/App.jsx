import { useSelector } from 'react-redux';

// theme setup
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from './styled/theme.styles';

// components imports
import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import Main from './components/main/main.component';

// font selector
import { selectFontFamily } from './store/font/font.selector';

// import styles
import { GlobalStyle } from './Global.styles';
import { AppContainer } from './App.styles';

function App() {
  const fontFamily = useSelector(selectFontFamily);

  const themesMap = {
    light,
    dark,
  };

  const theme = { ...base, theme: themesMap.light };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle fontFamily={fontFamily} />
        <Header />
        <SearchBar />
        <Main />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
