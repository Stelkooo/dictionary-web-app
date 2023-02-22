import { useSelector } from 'react-redux';

// components imports
import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import Main from './components/main/main.component';

// font selector
import { selectFontFamily } from './store/font/font.selector';

// import styles
import { GlobalStyle } from './Global.styles';

function App() {
  const fontFamily = useSelector(selectFontFamily);

  return (
    <div className="App">
      <GlobalStyle fontFamily={fontFamily} />
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
