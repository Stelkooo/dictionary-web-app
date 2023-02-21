import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';

function DarkMode() {
  return (
    <div className="dark-mode">
      <div>
        <label className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round" />
        </label>
      </div>
      <MoonIcon />
    </div>
  );
}

export default DarkMode;
