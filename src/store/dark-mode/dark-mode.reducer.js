import { createSlice } from '@reduxjs/toolkit';

const DARK_MODE_INITIAL_VALUE = {
  isDarkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: DARK_MODE_INITIAL_VALUE,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;
