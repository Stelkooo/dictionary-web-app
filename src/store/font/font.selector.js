import { createSelector } from '@reduxjs/toolkit';

const selectFontReducer = (state) => state.font;

export const selectFontFamily = createSelector(
  [selectFontReducer],
  (font) => font.fontFamily
);

export const selectFontName = createSelector(
  [selectFontReducer],
  (font) => font.fontName
);

export const selectIsFontListOpen = createSelector(
  [selectFontReducer],
  (font) => font.isFontListOpen
);
