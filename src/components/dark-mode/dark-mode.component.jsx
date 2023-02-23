import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import actions
import { setIsDarkMode } from '../../store/dark-mode/dark-mode.reducer';

// import selector
import { selectIsDarkMode } from '../../store/dark-mode/dark-mode.selector';

// styles import
import {
  DarkModeContainer,
  Switch,
  Slider,
  Checkbox,
  MoonIcon,
} from './dark-mode.styles';

function DarkMode() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleChecked = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDark) dispatch(setIsDarkMode(true));
  }, [dispatch]);

  return (
    <DarkModeContainer>
      <Switch htmlFor="checkbox">
        <Checkbox
          type="checkbox"
          id="checkbox"
          checked={isDarkMode}
          onChange={handleChecked}
        />
        <Slider />
      </Switch>
      {/* chnage moon stroke color based on the checkbox checked value */}
      <MoonIcon stroke={isDarkMode ? '#a445ed' : '#757575'} />
    </DarkModeContainer>
  );
}

export default DarkMode;
