import { createSlice } from '@reduxjs/toolkit';

const fontFamilyOptions = {
  'sans-serif': "'Inter', sans-serif",
  serif: "'Lora', serif",
  mono: "'Inconsolata', monospace",
};

const fontNameOptions = {
  'sans-serif': 'Sans Serif',
  serif: 'Serif',
  mono: 'Mono',
};

const changeFontFamily = (font) => {
  return fontFamilyOptions[font];
};

const changeFontName = (font) => {
  return fontNameOptions[font];
};

const FONT_INITIAL_STATE = {
  fontFamily: fontFamilyOptions['sans-serif'],
  fontName: fontNameOptions['sans-serif'],
  isFontListOpen: false,
};

export const fontSlice = createSlice({
  name: 'font',
  initialState: FONT_INITIAL_STATE,
  reducers: {
    setFontFamily: (state, action) => {
      state.fontFamily = changeFontFamily(action.payload);
    },
    setFontName: (state, action) => {
      state.fontName = changeFontName(action.payload);
    },
    setIsFontListOpen: (state, action) => {
      state.isFontListOpen = action.payload;
    },
  },
});

export const { setFontFamily, setFontName, setIsFontListOpen } =
  fontSlice.actions;

export const fontReducer = fontSlice.reducer;
