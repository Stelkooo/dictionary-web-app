import { combineReducers } from '@reduxjs/toolkit';

import { fontReducer } from './font/font.reducer';
import { wordReducer } from './word/word.reducer';
import { searchReducer } from './search/search.reducer';
import { darkModeReducer } from './dark-mode/dark-mode.reducer';

export const rootReducer = combineReducers({
  font: fontReducer,
  word: wordReducer,
  search: searchReducer,
  darkMode: darkModeReducer,
});

export default rootReducer;
