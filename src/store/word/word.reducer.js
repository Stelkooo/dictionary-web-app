import { createSlice } from '@reduxjs/toolkit';

const WORD_INITIAL_VALUE = {
  word: '',
  meanings: [],
  phonetic: '',
  phonetics: [],
  sourceUrls: [],
};

export const wordSlice = createSlice({
  name: 'word',
  initialState: WORD_INITIAL_VALUE,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload.word;
      state.meanings = action.payload.meanings;
      state.phonetic = action.payload.phonetic;
      state.phonetics = action.payload.phonetics;
      state.sourceUrls = action.payload.sourceUrls;
    },
  },
});

export const { setWord } = wordSlice.actions;

export const wordReducer = wordSlice.reducer;
