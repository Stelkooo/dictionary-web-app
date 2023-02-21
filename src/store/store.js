import { configureStore } from '@reduxjs/toolkit';

// import root reducer
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
