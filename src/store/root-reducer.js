import { combineReducers } from '@reduxjs/toolkit';

import { fontReducer } from './font/font.reducer';
import { wordReducer } from './word/word.reducer';

export const rootReducer = combineReducers({
  font: fontReducer,
  word: wordReducer,
});

export default rootReducer;
