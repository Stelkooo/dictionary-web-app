import { createSlice } from '@reduxjs/toolkit';

const SEARCH_INITIAL_VALUE = {
  searchQuery: '',
  hasUserSearched: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: SEARCH_INITIAL_VALUE,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setHasUserSearched: (state, action) => {
      state.hasUserSearched = action.payload;
    },
  },
});

export const { setSearch, setHasUserSearched } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
