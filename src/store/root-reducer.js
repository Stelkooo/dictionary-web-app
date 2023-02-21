import { combineReducers } from '@reduxjs/toolkit';

import { fontReducer } from './font/font.reducer';

export const rootReducer = combineReducers({
  font: fontReducer,
});

export default rootReducer;
