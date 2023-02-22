import { useSelector } from 'react-redux';

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

  return (
    <AppContainer>
      <GlobalStyle fontFamily={fontFamily} />
      <Header />
      <SearchBar />
      <Main />
    </AppContainer>
  );
}

export default App;
