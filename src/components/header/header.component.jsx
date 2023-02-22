// components import
import FontSwitch from '../font-switch/font-switch.component';
import SeparatorLine from '../separator-line/separator-line.component';
import DarkMode from '../dark-mode/dark-mode.component';

// svg import
import { ReactComponent as DictionaryIcon } from '../../assets/images/logo.svg';

// styles import
import { HeaderContainer, HeaderOptions } from './header.styles';

function Header() {
  return (
    <HeaderContainer>
      <DictionaryIcon height={32} />
      <HeaderOptions>
        <FontSwitch />
        <SeparatorLine isVertical />
        <DarkMode />
      </HeaderOptions>
    </HeaderContainer>
  );
}

export default Header;
