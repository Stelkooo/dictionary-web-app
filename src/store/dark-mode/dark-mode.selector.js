import { createSelector } from '@reduxjs/toolkit';

const selectDarkModeReducer = (state) => state.darkMode;

export const selectIsDarkMode = createSelector(
  [selectDarkModeReducer],
  (darkMode) => darkMode.isDarkMode
);

export default selectIsDarkMode;
