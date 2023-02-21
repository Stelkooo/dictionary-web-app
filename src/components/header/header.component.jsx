// components import
import FontSwitch from '../font-switch/font-switch.component';
import SeparatorLine from '../separator-line/separator-line.component';
import DarkMode from '../dark-mode/dark-mode.component';

// svg import
import { ReactComponent as DictionaryIcon } from '../../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <DictionaryIcon />
      <div className="header-options">
        <FontSwitch />
        <SeparatorLine />
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
