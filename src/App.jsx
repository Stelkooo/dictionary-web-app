import { useSelector } from 'react-redux';

// components imports
import Header from './components/header/header.component';

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
    </div>
  );
}

export default App;
