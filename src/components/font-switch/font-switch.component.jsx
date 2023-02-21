// style import
import {
  FontsContainer,
  FontSwitchButton,
  FontList,
  FontListOption,
} from './font-switch.styles';

function FontSwitch() {
  return (
    <FontsContainer>
      <FontSwitchButton type="button">Sans Serif</FontSwitchButton>
      <FontList>
        <FontListOption type="button" fontOption="'Inter', sans-serif">
          Sans Serif
        </FontListOption>
        <FontListOption type="button" fontOption="'Lora', serif">
          Serif
        </FontListOption>
        <FontListOption type="button" fontOption="'Inconsolata', monospace">
          Mono
        </FontListOption>
      </FontList>
    </FontsContainer>
  );
}

export default FontSwitch;
