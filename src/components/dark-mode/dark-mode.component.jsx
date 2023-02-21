import { useState } from 'react';

// styles import
import {
  DarkModeContainer,
  Switch,
  Slider,
  Checkbox,
  MoonIcon,
} from './dark-mode.styles';

function DarkMode() {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <DarkModeContainer>
      <Switch htmlFor="checkbox">
        <Checkbox
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleChecked}
        />
        <Slider />
      </Switch>
      {/* chnage moon stroke color based on the checkbox checked value */}
      <MoonIcon stroke={checked ? '#a445ed' : '#757575'} />
    </DarkModeContainer>
  );
}

export default DarkMode;
