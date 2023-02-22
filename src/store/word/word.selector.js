import { createSelector } from '@reduxjs/toolkit';

const selectWordReducer = (state) => state.word;

export const selectWord = createSelector(
  [selectWordReducer],
  (word) => word.word
);

export default selectWord;
