import { useSelector, useDispatch } from 'react-redux';

// font selectors
import {
  // selectFontFamily,
  selectFontName,
  selectIsFontListOpen,
} from '../../store/font/font.selector';

// font actions
import {
  setFontFamily,
  setFontName,
  setIsFontListOpen,
} from '../../store/font/font.reducer';

// style import
import {
  FontsContainer,
  FontSwitchButton,
  FontList,
  FontListOption,
} from './font-switch.styles';

function FontSwitch() {
  const dispatch = useDispatch();

  // const fontFamily = useSelector(selectFontFamily);
  const fontName = useSelector(selectFontName);
  const isFontListOpen = useSelector(selectIsFontListOpen);

  const toggleIsFontListOpen = () => {
    dispatch(setIsFontListOpen(!isFontListOpen));
  };

  const fontHandler = (font) => {
    dispatch(setFontName(font));
    dispatch(setFontFamily(font));
    dispatch(setIsFontListOpen(!isFontListOpen));
  };

  return (
    <FontsContainer>
      <FontSwitchButton type="button" onClick={toggleIsFontListOpen}>
        {fontName}
      </FontSwitchButton>
      <FontList display={isFontListOpen ? 'flex' : 'none'}>
        <FontListOption
          type="button"
          fontOption="'Inter', sans-serif"
          onClick={() => fontHandler('sans-serif')}
        >
          Sans Serif
        </FontListOption>
        <FontListOption
          type="button"
          fontOption="'Lora', serif"
          onClick={() => fontHandler('serif')}
        >
          Serif
        </FontListOption>
        <FontListOption
          type="button"
          fontOption="'Inconsolata', monospace"
          onClick={() => fontHandler('mono')}
        >
          Mono
        </FontListOption>
      </FontList>
    </FontsContainer>
  );
}

export default FontSwitch;
