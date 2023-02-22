import { createSelector } from '@reduxjs/toolkit';

const selectWordReducer = (state) => state.word;

export const selectWord = createSelector(
  [selectWordReducer],
  (word) => word.word
);

// filter out the first array with a valid text, audio url, and sourceUrl for its text
export const selectPhonetic = createSelector([selectWordReducer], (word) => {
  const validArr = word.phonetics.filter(
    (obj) => obj.audio && obj.sourceUrl
  )[0];
  return validArr?.text;
});

// filter out the first array with a valid text, audio url, and sourceUrl
export const selectAudioUrl = createSelector([selectWordReducer], (word) => {
  const validArr = word.phonetics.filter(
    (obj) => obj.audio && obj.sourceUrl
  )[0];
  const audio = new Audio(validArr?.audio);
  return audio || null;
});
