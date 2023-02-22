import { createSelector } from '@reduxjs/toolkit';

const selectWordReducer = (state) => state.word;

export const selectWord = createSelector(
  [selectWordReducer],
  (word) => word.word
);

export const selectPhonetic = createSelector(
  [selectWordReducer],
  (word) => word.phonetic
);
